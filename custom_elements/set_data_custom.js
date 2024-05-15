class CustomTagInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.filter = [];
        this.MAX_TAGS = 100;
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();

    }

    render() {
        this.shadowRoot.innerHTML = `
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Rajdhani&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;300;400;500;600;700;800;900&display=swap');

                
                * {
                    font-family: "Josefin Sans", sans-serif;                    
                    padding: 0;
                    box-sizing: border-box;
                    transition: 150ms ease-in;
                }
                .form-group-tags-input {
                    background: transparent;
                    border-radius: 10px;
                    font-family: Roboto;
                    line-height: 35px;
                    cursor: pointer;
                    transition: 0.1s all;
                    max-width:100%;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    overflow:hidden;
                    scrollbar-width:none;
                    flex-direction: row;
                    padding:10px

                }
                .form-group-tags-input::-webkit-scrollbar{
                    display:none;
                }

                .form-group-tags-input .tag {
                    background: black;
                    margin: 3px;
                    color: white;
                    border-radius: 10px;
                    cursor: pointer;
                    display: flex;
                    font-size: 17px;
                    white-space: nowrap;
                    overflow: hidden;
                    position:relative;

                    .text-content-tag{
                        color:var(--color1);
                        text-overflow: ellipsis;
                        scrollbar-width:none;
                        display:block;
                        font-size:1.5rem;
                        white-space: nowrap;
                        overflow-x:hidden;
                        background-color:black;
                        padding:5px;
                        margin-right:28px;
                        margin-left:14px;
                        border-top-left-radius:10px;
                        border-bottom-left-radius:10px;

                    }
                }
                
                .form-group-tags-input .text-content-tag:hover {
                    overflow-x: scroll;
                    text-overflow: clip;
                }
                
                .form-group-tags-input .tag .remove:before {
                    content: '×';
                    height:100%;
                    font-family: 'Urbanist', sans-serif;
                    position:absolute;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    right:0;
                    padding-inline:9px;
                    background:black;
                    font-weight:bold;
                    font-size:1.6rem;
                    border-top-right-radius:10px;
                    border-bottom-right-radius:10px;
                }
                .text-content-tag{
                    overflow-x:scroll;
                }
                .form-group-tags-input input[name="search"] {
                    padding: 10px;
                    border: none;
                    margin-left: 5px;
                }
                
                input:focus, textarea:focus, select:focus {
                    outline: 2px solid var(--color1);
                }
                
                #tag-input {
                    flex: 1;
                    margin: 5px;
                    height: 100%;
                    border: none;
                    background:rgba(255,255,255,.4);
                    color:white;
                    font-size:1.3rem;
                }

                @keyframes shake-animation {
                    0% { transform: translate(0, 0); }
                    10%, 30%, 50%, 70%, 90% { transform: translate(-10px, 0); }
                    20%, 40%, 60%, 80% { transform: translate(10px, 0); }
                    100% { transform: translate(0, 0); }
                }

                .shake {
                    animation: shake-animation 0.82s cubic-bezier(.36,.07,.19,.97) both;
                    transform: translate3d(0, 0, 0);
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
                .form-group {
                    margin-bottom: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                }
                
                .form-group input[type="text"],
                .form-group input,
                .form-group input[type="date"],
                .form-group input[type="number"],
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid var(--colors-5);
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <div class="form-group">
                <div class="form-group-tags-input">
                    <input type="text" name="search" placeholder="" id="tag-input" size="1">
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const input = this.shadowRoot.querySelector('input[name="search"]');
        input.addEventListener('keydown', event => this.handleKeydown(event));
        this.shadowRoot.addEventListener('click', event => this.handleClick(event));
    }

    handleKeydown(event) {
        const input = event.target;
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleTagInput(input.value.trim());
            input.value = ''; // Reset input field after adding tag
        } else if (event.key === 'Backspace' && input.value === '') {
            this.removeLastTag();
        }
    }

    handleClick(event) {
        if (event.target.classList.contains('remove')) {
            this.removeTag(event.target.parentNode.textContent.trim());
        }
    }

    handleTagInput(tag) {
        if (tag === '' || this.filter.includes(tag)) return;

        if (this.filter.length >= this.MAX_TAGS) {
            this.shadowRoot.querySelector('#tag-input').classList.add('shake');
            setTimeout(() => {
                this.shadowRoot.querySelector('#tag-input').classList.remove('shake');
            }, 1500); // Remove shake class after 1.5 seconds
        } else {
            this.addTag(tag);
        }
    }
    remove(){
            this.filter = [];
            this.shadowRoot.querySelectorAll('.tag').forEach((ele)=>{
                ele.remove();
            })
    }


    addTag(tag) {
        // if(tag!=","){
            this.filter.push(tag);
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            const textContentSpan = document.createElement("span")
            textContentSpan.textContent = tag;
            textContentSpan.className = "text-content-tag"
            const removeIcon = document.createElement('span');
            removeIcon.classList.add('remove');
            tagElement.appendChild(textContentSpan)
            tagElement.appendChild(removeIcon);
            this.shadowRoot.querySelector('.form-group-tags-input').insertBefore(tagElement, this.shadowRoot.querySelector('input[name="search"]'));
        // }\
       
    }

    first_add_tag(arr){

        arr.forEach((e)=>{
            this.addTag(e)
        })

    }

   
    removeTag(tag) {
        this.filter = this.filter.filter(t => t !== tag);
        const tagElements = this.shadowRoot.querySelectorAll('.tag');
        tagElements.forEach(tagElement => {
            if (tagElement.textContent.trim() === tag) {
                tagElement.remove();
            }
        });
    }

    removeLastTag() {
        if (this.filter.length > 0) {
            const lastTag = this.filter.pop();
            const tagElements = this.shadowRoot.querySelectorAll('.tag');
            tagElements[tagElements.length - 1].remove();
        }
    }
}

customElements.define('set-data-custom-element', CustomTagInput);