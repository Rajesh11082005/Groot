let template = document.createElement("template");
template.innerHTML = `
<style>

    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    .display_flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .col{
        display: flex;
        /*justify-content: space-evenly;*/
        align-items: center;
        width: 100%;
        height: 50px;
        background-color:var(--color6);
        padding: 10px;

        & > div{

            display:flex;
            align-items:center;

            > *{
                margin-inline:10px;
            }
        .choices{
            position: relative;
            justify-content: space-between;
            color: #9f9f9f;
            scrollbar-width: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition:.3s;
           
           
            .overlay{
                height: 100%;
                width: 100%;
                left: 0;
                position: absolute;
                border-radius: 8px;
                background-color: rgba(255, 252, 252, 0.2);
                display: none;
            }
            img{
                width: fit-content;
            }
        }

        .choices::-webkit-scrollbar{
            display: none;
        }

        .choices:hover{
            border-color: transparent;
          
           .overlay{
              display: block;
           }
        }

        #name_field{
            outline: none;
            border: none;
            outline: 1.4px solid var(--color3);
            border:2px solid transparent;
            font-family: "Josefin Sans", sans-serif;
            
        }
        #name_field:hover{
            outline-color:transparent;
            border: 2px solid white;
        }
        #name_field:focus{
            outline-color:transparent;
            border: 2px solid #52a552;
        }
    }

        & > img{
            height: 30px;
            width: 30px;
           
        }

       #dragger{
          cursor: s-resize;
       }
       
      
    }
   
    .structure{
        height: 40px;
        width: 220px;
        background-color: transparent;
        border: 1.4px solid var(--color3);
        border-radius: 8px;
        font-size: 1.3rem;
        color: white;
        padding: 10px;
    }

    .error{
        border:2px solid red;
        color:red;
    }
    @media screen and (max-width: 600px) {
        .structure{
            width: 180px;
        }
    }
    @media screen and (max-width: 500px) {
        .structure{
            width:150px;
        }
        .choices{
            width:90px
        }
    }
    @media screen and (max-width: 380px) {
        .structure{
            width:110px;
        }
       
    }
</style>

   
    <div class="col" draggable=true>
        <img id="dragger" draggable=false class="dragger" src="svgs/dragger.svg">
        <div draggable=true>
        <input type="text" placeholder="Enter key" class="display_flex structure" id="name_field">
        <div class="choices structure display_flex">
             Choose type ...
            <img src="svgs/uda.svg">
            <div class="overlay">

            </div>
        </div> 
        <img id="close" class="close" src="svgs/close.svg">
        <div>
    </div>


`

class customInputClass extends HTMLElement {

    static img_state;

    static get observedAttributes() {
        return ["name", "value"];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "closed" });
        this.connected = false;
    }
    connectedCallback() {
        if (!this.connected) {
            this.connected = true;
            let clone = template.content.cloneNode(true);
            this.shadow.append(clone);


            if (this.Name) {
                this.Name = this.Name;
            }
            
            if(this.Value){
                this.Value = this.Value;
            }

            if(this.hasAttribute("img_state")){
                this.img_state = true;
            }

            let input_ele = this.shadow.querySelector("input");
            // let custom_ele = document.querySelectorAll("input-custom-element")
            let input_close = this.shadow.querySelectorAll(".close");
            let choice_selector = this.shadow.querySelector(".choices");
            let x_media_query = window.matchMedia("(max-width: 500px)");
            let choice_loader = document.querySelector(".choice_loader");


            this.shadow.querySelector(".col > div").addEventListener("dragstart", (ele) => {
                ele.preventDefault();
            });

            input_ele.addEventListener("input", (event) => {
                let text = event.target.value
                this.Name = text;

                this.checker_name(text, this);
            })

            input_close.forEach((ele) => {
                ele.addEventListener("click", (event) => {
                    this.remove()
                    // console.log(document.querySelector("body").removeChild(event.target.parentNode.parentNode))
                })
            })

            const handleMediaQuery = (ev) => {
                let ele = this.shadow.querySelector(".choices");
                if (ev.matches) {
                    ele.firstChild.data = "";
                    ele.style.justifyContent = "center";
                    ele.querySelector("img").setAttribute("src", "svgs/ch_type1.svg");
                    if(this.img_state){
                        ele.querySelector("img").setAttribute("src", "svgs/ch_type2.svg");
                        this.img_state = false;
                    }
                } else {
                    if (!this.Value) {
                        ele.firstChild.data = "choose type ...";
                    }
                    else {
                        let val ;
                        if(this.Value.split(",").length>2){
                            val = [...this.Value.split(",")].slice(1);
                            console.log(val , "media")
                            val = `11,${val}`;
                        }
                        else{
                            val = this.Value;
                        }
                        // val = [11,val];
                        combinedFunction(val,ele);
              
                    }
                    ele.style.justifyContent = "space-between";
                    ele.querySelector("img").setAttribute("src", "svgs/uda.svg");
                }
            };

            x_media_query.addEventListener("change", handleMediaQuery);

            choice_selector.addEventListener("click", () => {
                setTimeout(() => {
                    choice_loader.style.display = "block";

                    if (this.Value) {
                        this.setter(this.Value.split(",")[0])
                    }
                    else {
                        this.setter("o_all");
                    }

                }, 90);

                valueAdder.set_trigger(choice_selector);
            });

            const choicesElement = this.shadow.querySelector('.choices');

            // Listen for changes in the text content
            choicesElement.addEventListener('input', function () {
                const content = choicesElement.firstChild.data.trim(); // Get the text content and remove leading/trailing spaces
                if (content.length > 12) {
                    choicesElement.firstChild.data = content.slice(0, 12) + " ... ";
                }
            });



            handleMediaQuery(x_media_query);
        }
    }

    attributeChangedCallback(attr, old_v, new_v) {

    }

    setter(value) {

        let ele = document.querySelectorAll("category-custom-element")
        ele.forEach((s, index) => {
            s.shadow.querySelector(".cate").classList.remove("clicked");
        });

        let element;

        if (value != "o_all") {

            if (value == "11") {

                let arr = this.Value.split(",").slice(1);
                console.log(arr);
                SET_DATA_CUSTOM_ELE.remove();
                SET_DATA_CUSTOM_ELE.first_add_tag(arr);

            }

            if(value === "4"){
                if(this.Extra){
                    
                }
            }

            let id = "o" + value;
            element = document.getElementById(id);
        }
        else {
            element = document.getElementById(value);
        }
        element.click();
        element.shadow.querySelector(".cate").classList.add("clicked");
        element.scrollTop = 0;
    }

    checker_name(text, targeted_ele) {

        let arr = [...document.querySelectorAll("input-custom-element")];
        let arr_v = arr.map(input => input.getAttribute("name"));

        let index = arr.indexOf(targeted_ele);
        arr_v.splice(index, 1)

        if (arr_v.includes(text) && text != "") {
            this.shadow.querySelector("input").style.border = "2px solid red"
            this.shadow.querySelector("input").style.color = "red"
        }
        else {
            this.shadow.querySelector("input").removeAttribute("style")
        }



    }

    set Name(value) {
        this.setAttribute("name",value);
        this.shadow.querySelector("input").value = value;
    }



    get Name() {
        return this.getAttribute("name");
    }

    set Value(value) {
        combinedFunction(value,this.shadow.querySelector(".choices"));
    }
    get Value() {
        return this.getAttribute("value");
    }

    set Extra(value) {
        this.setAttribute("extra", value);
    }
    get Extra() {
        return this.getAttribute("extra");
    }
}



customElements.define('input-custom-element', customInputClass);

let sample = {
    "0": {
        "name": "a",
        "cate": 0,
        "opt": 3,
        "extra": null
    },
    "1": {
        "name": "b",
        "cate": 6,
        "opt": 1,
        "extra": "true"
    },
    "2": {
        "name": "c",
        "cate": 11,
        "opt": [
            "daf",
            "sdf",
            "rfreg"
        ],
        "extra": null
    },
    "3": {
        "name": "d",
        "cate": 7,
        "opt": 0,
        "extra": null
    },
    "4": {
        "name": "e",
        "cate": 4,
        "opt": 2,
        "extra": "20,25"
    }
}

function loader(load_obj){
    let a = load_obj;

    for(let i=0;i<Object.keys(a).length;i++){

        let ele = document.createElement("input-custom-element");

        ele.setAttribute("name",a[i].name);
        ele.setAttribute("value",`${a[i].cate},${a[i].opt}`);
        ele.setAttribute("extra",a[i].extra);
        ele.setAttribute("img_state",true);

        // let svg = ele.querySelector("img");
        // svg.setAttribute("src","svgs/ch_type2.svg")
        // console.log(ele.shadow);
        INPUT_SECTION.appendChild(ele);
        // combinedFunction(`${a[i].cate},${a[i].opt}`,ele);

    }

    

}

// setTimeout(()=>{
//     loader(sample);
// },2000);

// // setTimeout(()=>{
// //     loader(sample);
// // },9000);