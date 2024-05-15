class CopyButton extends HTMLElement{
    constructor(){
        super();
        console.log(this);

        this.attachShadow({
            mode : "open"
        });
    }

    createDOMelements(){

      console.log(this);
this.style.position = "absolute";
this.style.top = "7px";
this.style.right = "6px";
this.style.height="30px";
this.style.width="30px";
if (this.parentElement) {
    this.parentElement.style.position = "relative";
}
        let button = document.createElement("button");
        button.className = "copy-button";

        // button.innerHTML = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="#ffffff"/>
        //     <path d="M17.1 2H12.9C9.81693 2 8.37099 3.09409 8.06975 5.73901C8.00673 6.29235 8.465 6.75 9.02191 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V14.9781C17.25 15.535 17.7077 15.9933 18.261 15.9303C20.9059 15.629 22 14.1831 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" fill="#ffffff"/>
        //     </svg>;

        button.style.border = "none";
        button.style.backgroundColor = "transparent";
        button.style.color = "white";

        return button;
    }

    copyContents(button) {
        const selector = this.getAttribute("for");
        const elementToCopy = document.querySelector(selector);
        if (elementToCopy) {
            const textToCopy = elementToCopy.value || elementToCopy.textContent; 
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('Content copied to clipboard');
                // button.innerHTML = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#ffffff"/><path d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z" fill="#ffffff"/></svg>
                setTimeout(()=>{
                    // button.innerHTML = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="#ffffff"/><path d="M17.1 2H12.9C9.81693 2 8.37099 3.09409 8.06975 5.73901C8.00673 6.29235 8.465 6.75 9.02191 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V14.9781C17.25 15.535 17.7077 15.9933 18.261 15.9303C20.9059 15.629 22 14.1831 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" fill="#ffffff"/></svg>
                }, 6000)
                
            }).catch(err => {
                console.error('Error in copying text: ', err);
            });
        }
    }

    

    connectedCallback(){
        let button = this.createDOMelements();
        this.shadowRoot.appendChild(button);
        button.addEventListener('click',() =>{
            this.copyContents(button);
        });
    }
}

customElements.define("copy-button", CopyButton)