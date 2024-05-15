let cust_template = document.createElement("template");
cust_template.innerHTML = `
<style>
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Inter:wght@100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Rajdhani&display=swap');

    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
        
    }
    :root{
        --color1 :#52a552;
        --color2 :#424242;
        --color3 :#818181;
        --color4 :#ffffff;
        --color5 :#19857b;
        --color6 :#303030;
        --color7:#656565;
    }
    .ch_container{
        height: 120px;
        width: 240px;
        //border:2px solid red;
        border-radius: 10px;
        background-color: var(--color2);
        font-family: "Inter", sans-serif;
    
        h3{
            height: 25%;
            width: 100%;
            color: white;
            display: flex;
            align-items: center;
            padding-inline: 10px;
            padding-top: 7px;
            font-family: "Inter", sans-serif;
            white-space: nowrap;
            overflow-x: scroll;
            text-overflow: ellipsis;
            scrollbar-width:none;
            display:inline-block;
            text-transform: capitalize;
        }
        h3:hover{
            text-overflow:clip;
            overflow-x:scroll;
            width:90%
        }
        h3::-webkit-scrollbar{
            display:none;
        }
        p{
            font-style: italic;
            height: 75%;
            width: 100%;
            padding: 12px;
            padding-top: 5px;
            font-size: .9rem;
            line-height: 1.4rem;
            font-family: "Inter", sans-serif;
            color:#e9e7e7;
            overflow-y: scroll;
            scrollbar-width: none;
           
        }
        p::-webkit-scrollbar{
            display: none;
        }
    }
    .ch_container:hover{
        background-color: var(--color6);
    }
    .rs{
        display:none;
       // border:2px solid pink;
       transition:.5s;

        div{
            display:flex;
            justify-content:center;
            align-items:center;
        }

        input{
            display: block;
            height: 35px;
            width: 100px;
            outline:none;
            margin-inline-end: 10px;
            border-radius: 8px;
            padding-inline: 10px;
            font-size: 1.1rem;
            border: 2px solid var(--color4);
            background-color: var(--color2);
            color: var(--color4);
        }
        input:hover {
            border: 2px solid #52a552;
        }
        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button {
             -webkit-appearance: none;
             appearance: none;
              margin: 0;
              display: none;
        }
    }
   
    @media screen and (max-width: 800px) {
        .ch_container{
            height: 110px;
            width: 220px;
        }
        .rs{
            input{
                width:80px;
            }
        }
    }
    @media screen and (max-width: 800px) {
        .ch_container{
            height: 110px;
            width: 200px;
           /* border:2px solid red;*/
        }
        .rs{
            input{
                width:80px;
            }
        }
    }
</style>

<div class="ch_container">
    <h3></h3>
    <p>
       
    </p>
    <div class="rs">
    <div>
        <input type="number" id="min" placeholder="min" value=0>
        <input type="number" id="max" placeholder="max">
    </div>
    <div>
</div>
`


let cate_template = document.createElement("template");
cate_template.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Rajdhani&display=swap');
    
            :root{
                --color1 :#52a552;
                --color2 :#424242;
                --color3 :#818181;
                --color4 :#ffffff;
                --color5 :#19857b;
                --color6 :#303030;
                --color7 :#656565;
            }
    
    
            * {
                padding: 0%;
                margin: 0%;
                box-sizing: border-box;
                font-family: "Josefin Sans", sans-serif;
            }
            .cate{
                width: 100%;
                height:44px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: white;
                padding-left:10px;
                border-left:4px solid #262626;
                transition:.2s;
                
    
               .name{
                    text-transform: capitalize;
                    font-size: 1.2rem;
                    width:100%;
                    height:100%
                    padding-inline:10px ;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    scrollbar-width:none;
                    white-space:nowrap;
                    display:inline-block;
                    
                }
               
                .name:hover{
                    text-overflow:clip;
                    overflow-x:scroll;
                }
                .name::-webkit-scrollbar{
                    display:none;
                }
                .count{
                    height: 100%;
                    width: fit-content;
                    display: flex;
                    align-items: center;
                    padding-right: 10px;
                    margin-left:8px;
                }
            }
            .cate:not(.clicked):hover{
                background-color: #343434;
                border-left:4px solid #343434;
            }
            .clicked{
                background-color: var(--color2);
                border-left: 4px solid var(--color5);
            }
            
        </style>
        <div class="cate">
            <div class="name">
                
            </div>
            <div class="count">
                
            </div>
        </div>
        `


class chooseCustomElement extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "closed" });
        this.connected = false;

        this.check_prevent_def = this.check_prevent_def.bind(this);
    }

    connectedCallback() {
        

        if (!this.connected) {
            this.connected = true;
            let clone = cust_template.content.cloneNode(true);
            this.shadow.append(clone);

            if (this.hasAttribute("header")) {
                if (!this.Header) {
                    this.remove();
                }
                else {
                    this.Header = this.Header;
                }
            }

            if(this.hasAttribute("width") && this.hasAttribute("height")){
                let ele = this.shadow.querySelector(".ch_container")
                ele.style.width=this.getAttribute("width");
                ele.style.height=this.getAttribute("height");
                ele.style.paddingBottom="20px";
                ele.addEventListener("mouseover",()=>{
                    ele.style.backgroundColor = 'var(--color2)';
                })
            }

            if (this.hasAttribute("content")) {
                if (!this.Content) {
                    this.remove();
                }
                else {
                    this.Content = this.Content;
                }
            }

            if(this.hasAttribute("extra")) {
                this.Extra = this.Extra
            }
        }

        const MIN = this.shadow.getElementById("min");
        const MAX = this.shadow.getElementById("max");


        MAX.addEventListener("input",(event)=>{
           if(this.checker_min_max(MIN,MAX)){
                event.target.style.color="red";
                event.target.style.border="red";
           }
           else{
                event.target.removeAttribute('style');
           }
        })

        MIN.addEventListener("input",(event)=>{
            if(this.checker_min_max(MIN,MAX)){
                 MAX.style.color="red";
                 MAX.style.border="red";
            }
            else{
                MAX.removeAttribute('style');
            }
         })

        this.addEventListener("click", (ev) => {
            if (ev.target.Header == "Range") {
                this.shadow.querySelector("p").style.height = "fit-content";
                this.shadow.querySelector("p").style.paddingBottom = "20px";
                this.shadow.querySelector(".ch_container").style.height = "160px"
                this.shadow.querySelector(".rs").style.display = "block";
            }
        });


        MIN.addEventListener("keydown",this.check_prevent_def);
        MAX.addEventListener("keydown",this.check_prevent_def);
    }

    check_prevent_def(event) {
        if (event.target.id == "min" || event.target.id == "max") {
            if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-') {
                event.preventDefault();
            }
           
        }
        if (event.target.id == "max" && event.key == "Enter") {
            //    console.log(this.shadow.getElementById("min"));
               console.log()
               let min = this.shadow.getElementById("min");
               let max = this.shadow.getElementById("max");

               if(!this.checker_min_max(min,max)){
                   let arr = [min.value,max.value];
                   let par = valueAdder.set_trigger_element.getRootNode().host;
                   valueAdder.value_to_pass = this.getAttribute("value");
                   par.setAttribute("extra",arr);
                   choice_closer_v1("general")
               }
        }
    }

    checker_min_max(MIN,MAX){
        let min_v = parseInt(MIN.value);
        let max_v = parseInt(MAX.value);

        if(max_v<min_v || min_v==max_v){
            return true;
        }
        else{
            return false;
        }
    }

    get Extra(){
        return this.getAttribute("extra");
    }

    set Extra(value){
        let min = this.shadow.getElementById("min");
        let max = this.shadow.getElementById("max");

        let a = value.split(",");

        min.value = parseInt(a[0]);
        max.value = parseInt(a[1]);
    }

    get Header() {
        return this.getAttribute("header");
    }

    set Header(value) {
        let ele = this.shadow.querySelector("h3");
        if (ele) {
            ele.textContent = value;
        }
    }

    get Content() {
        return this.getAttribute("content");
    }

    set Content(value) {
        let ele = this.shadow.querySelector("p");
        let val = "";
        try {
            let content_array = JSON.parse(value);
            val = content_array.join("\n");

        } catch (e) {
            val = value;
        }
        if (ele) {
            ele.innerText = val;
        }

    }

}

//name & count

class cateCustomElement extends HTMLElement {

    tobe_removed;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "closed" });
    }


    connectedCallback() {

        let clone = cate_template.content.cloneNode(true);
        this.shadow.append(clone);

        if (this.hasAttribute("name")) {
            if (!this.Name) {
                this.remove();
            }
            else {
                this.Name = this.Name;
            }
        }

        if (this.hasAttribute("count")) {
            if (!this.Count) {
                this.remove();
            }
            else {
                this.Count = this.Count;
            }
        }

        let removee = () => {
            document.querySelectorAll("category-custom-element").forEach((ele) => {
                let element = ele.shadow.querySelector(".cate");
                if ([...element.classList].includes("clicked")) {
                    element.classList.remove("clicked");
                }
            })

        }

        document.querySelectorAll("category-custom-element").forEach((ele)=>{
            ele.addEventListener("click",(e)=>{
                removee();
                e.target.shadow.querySelector(".cate").classList.add("clicked")
            });
        });

    }

    static remove_ele() {
        this.shadow.querySelectorAll(".cate");
    }

    get Name() {
        return this.getAttribute("name");
    }

    set Name(value) {
        let ele = this.shadow.querySelector(".name");
        if (ele) {
            ele.textContent = value;
        }
    }

    get Count() {
        return this.getAttribute("count");
    }

    set Count(value) {
        let ele = this.shadow.querySelector(".count");
        if (ele) {
            ele.textContent = value;
        }
    }

}

customElements.define("category-custom-element", cateCustomElement);
customElements.define("choose-custom-element", chooseCustomElement);

