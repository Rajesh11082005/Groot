const PC_PROJECT =document.querySelector("."+REEL_DOM.class.pc_project);
const YES_NO = document.querySelector("."+REEL_DOM.class.yes_no);
const YES = document.getElementById(REEL_DOM.id.yes);
const NO = document.getElementById(REEL_DOM.id.no);
const QUES = document.querySelector("."+REEL_DOM.class.ques);
const ASK_YES_NO = document.getElementById(REEL_DOM.id.ask_yes_no);
const PROJECT_SEARCH = document.getElementById(REEL_DOM.id.project_search);




class Project{
    static user;
    static passing_obj;
    static sample_obj;
    static complete_obj;
    static stored_obj_key = [];
    static called_state = false;

    static pass_obj(val){
        this.passing_obj = val;
    }
    static sam_obj(val){
        this.sample_obj = val;
    }
    static com_obj(val){
        this.complete_obj = val;
    }
    static call_state(val){
        this.called_state = val;
    }
    static store_obj_key(val){
        this.stored_obj_key = val;
    }
    static user_setter(val){
        this.user = val;
    }
    
}

PROJECT_SEARCH.addEventListener("input",(event)=>{
    if(event.target.value.length>=1){
        let val = event.target.value;
        search_project(val);
    }
    else{
        display_all_search();
    }
})

function search_project(sch){
    let search = sch.toLowerCase();
    let ele_p = PC_PROJECT.querySelectorAll("choose-custom-element");
    ele_p.forEach((s)=>{
        let val = s.getAttribute("content");
        let head  = s.getAttribute("header");

        if(val.toLowerCase().includes(search) || head.toLowerCase().includes(search)){
            s.style.display="block";
        }
        else{
            s.style.display="none";
        }

    })
}

function display_all_search(){
    let ele_p = PC_PROJECT.querySelectorAll("choose-custom-element");
    ele_p.forEach((s)=>{
        s.style.display="block";
    })
}

function project_loader(){
    let ele = document.querySelector(".selected");
    let val = JSON.parse(ele.getAttribute("value"));
    let name = ele.getAttribute("header");
    PROJECT_NAME.value = name;
    if(ASK_YES_NO.getAttribute("state")=="true"){
        INPUT_SECTION.innerHTML="";
        loader(val);
    }
    else{
        loader(val);
    }
    OBJECT_VIEWER1.textContent="";
    SET_TRIG.click();
}

function blank_set_loader(){
    Project.call_state(false);
    if(ASK_YES_NO.getAttribute("state")=="true"){
        INPUT_SECTION.innerHTML="";
        let first_ele = document.createElement("input-custom-element");
        INPUT_SECTION.appendChild(first_ele);
        OBJECT_VIEWER1.textContent="";
    }
}

function yes_no_action_trig(mess,id){
    YES_NO.style.display = "flex";
    YES_NO.querySelector("#ask_yes_no").setAttribute("value",id);
    QUES.textContent = mess;
}

YES.addEventListener("click",(event)=>{
    YES_NO.style.display="none"
    ASK_YES_NO.setAttribute("state",true);
    
    if(ASK_YES_NO.getAttribute("value")=="pro"){
        project_loader()
    };
    if(ASK_YES_NO.getAttribute("value")=="create_new_set"){
        blank_set_loader();
    }
});
NO.addEventListener("click",()=>{
    YES_NO.style.display="none";
    ASK_YES_NO.setAttribute("state",false);

    if(ASK_YES_NO.getAttribute("value")=="pro"){
        // project_loader()
    };
    if(ASK_YES_NO.getAttribute("value")=="create_new_set"){
        blank_set_loader();
    }
});

function project_adder(){
    let name = PROJECT_NAME.value;
    let val = JSON.stringify(Project.passing_obj);
    let samp = beautifyJSON(JSON.stringify(Project.sample_obj));

    let sam_and_val = {
        sample : samp,
        value : val,
    }

    let stringed_sam_val = JSON.stringify(sam_and_val);
    dataStoring(stringed_sam_val,name);
    PC_PROJECT.innerHTML="";
    get_data_from_db();
}

function project_name_check(name){
        let key_array = Project.stored_obj_key;
        if(key_array.includes(name)){
            return true;
        }
        else{
            return false;
        }
}
