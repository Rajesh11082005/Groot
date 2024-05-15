let arr_opt_template = document.createElement("template");
arr_opt_template.innerHTML = `
<style>
    .array_option{
        height:45px;
        // width:100%;
        text-transform: capitalize;
        color: var(--color4);
        transition: .1s;
        // justify-content: space-between;
        background-color:var(--color7);
        display:flex;
        align-items:center;
    


        p{
            font-size:1.3rem;
            margin-inline:5px;
            margin-block:6px;
            padding-inline:6px;
            flex-grow:1;
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height:80%;
            display:flex;
            align-items:center;
        }
        p:hover{
            overflow-x:scroll;
            text-overflow:clip;
        }
        p::-webkit-scrollbar{
            display: none;
        }
        p:focus{
            border:2px solid red;
            outine:none;
        }

        .min_max{
            //display: none;
            margin-inline: 5px;

            div{
                display: flex;
                align-items: center;
            }

        }

        input{
            display: block-inline;
            height: 25px;
            width: 40px;
            outline:none;
            margin-inline-end: 10px;
            border-radius: 6px;
            padding-inline: 10px;
            font-size: 1.1rem;
            //border: 2px solid var(--color4);
            border:2px solid transparent;
            background-color: var(--color2);
            color: var(--color4);
        }
        input::placeholder{
            font-size:.9rem;
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

        
        img{
            padding: 5px;
            padding-right: 10px;
            display: none;
        }
    }
    .array_option:hover{
        background-color: #303030;
    }
    .red{
        color:red;
        border:2px solid red;
    }
    @media screen and (max-width: 800px) {
        .array_option{

            p{
                width:50px;
                margin-right:10px;
            }
            input{
                width:25px;
            }
        }
    }
</style>
<div class="array_option box">
    <p id="nam">Name</p>
    <div class="min_max">
        <div>
        <input type="number" id="arr_min" placeholder="min" value=0>
        <input type="number" id="arr_max" placeholder="max">
    </div>
    </div>
    <input type="number" id="arr_count" placeholder="count" value=1 title="count">
    <img src="svgs/close.svg" id="arr_close">
</div>        
`

class arrayOptionCustomElement extends HTMLElement{
     
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:"closed"});
    }

    connectedCallback(){
        let clone = arr_opt_template.content.cloneNode(true);
        this.shadow.append(clone);

        const ARRAY_OPTION = this.shadow.querySelector(".array_option");
        const ARR_MIN = this.shadow.getElementById("arr_min");
        const ARR_MAX = this.shadow.getElementById("arr_max");
        const ARR_COUNT = this.shadow.getElementById("arr_count");
        const ARR_CLOSE = this.shadow.getElementById("arr_close");
        const ARR_P = this.shadow.getElementById("nam");

        // console.log(this.parentElement)
        if(this.parentElement.id=="array_choice_holder"){
            let ele = this.shadow.querySelector(".array_option");
            ele.style.width="fit-content";
            ele.style.borderRadius="5px"
        }

        this.draggable=true;
        if(!this.hasAttribute("edit")){
            this.setAttribute("edit",false);
        }
        if(this.hasAttribute("count")){
            ARR_COUNT.value = this.getAttribute("count");
        }
        if(this.hasAttribute("extra")){
            let a = this.getAttribute("extra").split(",");
            ARR_MIN.value = parseInt(a[0]);
            ARR_MAX.value = parseInt(a[1]);
        }
        if(this.hasAttribute("name")){
            this.Name = this.Name;
        }

        if(this.hasAttribute("min_max_state")){
            this.Min_Max_State = this.Min_Max_State;
        }
        if(this.hasAttribute("count_state")){
            this.Count_State = this.Count_State;
        }
        if(this.hasAttribute("close_state")){
            this.Close_State = this.Close_State;
        }

        this.Count = ARR_COUNT.value;

        ARR_P.addEventListener("input",(event)=>{
            if(!event.target.textContent){
                event.target.style.borderBottom = "2px solid red";
            }
            else{
                event.target.style.borderBottom = ""; 
            }

        })

        ARR_P.addEventListener("dblclick",this.makeEditable);
        ARR_P.addEventListener("keypress",this.handleKeyPress);
        ARR_P.addEventListener("blur",(event)=>{
            event.target.contentEditable = false;
            event.target.getRootNode().host.setAttribute("name",event.target.textContent);
        })

        ARR_CLOSE.addEventListener("click",()=>{
            this.remove();
        });

        ARR_COUNT.addEventListener("input",(event)=>{
            this.Count = event.target.value;
        })

        ARR_MIN.addEventListener("input",()=>{
            this.extra_array_setter(ARR_MIN,ARR_MAX);
            if(this.checker_min_max(ARR_MIN,ARR_MAX)){
                ARR_MAX.style.color="red";
                ARR_MAX.style.border="red";
                this.Error = true;
           }
           else{
               ARR_MAX.style.color="";
               ARR_MAX.style.border="";
               this.Error = false;
           }
        });

        ARR_MAX.addEventListener("input",(event)=>{
            this.extra_array_setter(ARR_MIN,ARR_MAX);
            if(this.checker_min_max(ARR_MIN,ARR_MAX)){
                event.target.style.color="red";
                event.target.style.border="red";
                this.Error = true;
           }
           else{
               event.target.style.color="";
               event.target.style.border="";
               this.Error = false;
           }
        })

        // console.log(ARR_MIN);


        ARR_COUNT.addEventListener("keydown",this.check_prevent_def);
        ARR_MIN.addEventListener("keydown",this.check_prevent_def);
        ARR_MAX.addEventListener("keydown",this.check_prevent_def);

    };

    makeEditable(event) {
        let par = event.target.getRootNode().host;
        console.log(par.getAttribute("edit"));
        if(par.getAttribute("edit")=="true"){
            event.target.contentEditable = true;
            event.target.focus();
        }
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
           event.target.contentEditable = false;
           event.target.getRootNode().host.setAttribute("name",event.target.textContent);
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

    extra_array_setter(MIN,MAX){
        let min_v = MIN.value;
        let max_v = MAX.value;

        let arr = [min_v,max_v];
        this.Extra = arr;
    }

    check_prevent_def(event) {
            if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-') {
                event.preventDefault();
            }
    };

    get Org_Name(){
        return this.getAttribute("org_name");
    }

    get Error(){
        return this.getAttribute("error");
    }

    set Error(value){
        this.setAttribute("error",value);
    }

    get Name(){
        return this.getAttribute("name");
    }
    set Name(value){
        let ele = this.shadow.querySelector("p");
        ele.textContent = value;
    }

    get Count(){
        return this.getAttribute("count");
    }

    set Count(value){
        this.setAttribute("count",value);

        let ele = this.shadow.getElementById("arr_count");
        ele.value =value;
    }

    get Extra(){
        return this.getAttribute("extra");
    }
    set Extra(value){
        this.setAttribute("extra",value);
    }

    get Min_Max_State(){
        return this.getAttribute("min_max_state")
    }
    set Min_Max_State(value){
        // console.log(value);
        let ele = this.shadow.querySelector(".min_max");

        if(value=="true"){
            ele.style.display="block";
        }
        else{
            ele.style.display="none";
        }
    }
    get Close_State(){
        return this.getAttribute("close_state");
    }
    set Close_State(value){
        let ele = this.shadow.getElementById("arr_close");
        if(value=="true"){
            ele.style.display="block";
        }
        else{
            ele.style.display="none";
        }
    }
    get Count_State(){
        return this.getAttribute("count_state");
    }
    set Count_State(value){
        let ele = this.shadow.getElementById("arr_count");
        if(value=="true"){
            ele.style.display="block";
        }
        else{
            ele.style.display="none";
        }
    }
}



customElements.define("array-option-custom-element",arrayOptionCustomElement);

