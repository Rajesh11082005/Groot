
let DOM = (function () {
    let dom_obj = {
        id: {
            row_count: "get_row",
            add_field: "add_field",
            choice_closer: "close_choice_loader",
            category: "category",
            option_holder: "options_holder",
            addi_option_holder: "additional_option_holder",
            range_setter:"rng",
            generate : "generate",
            array_option_holder : "array_option_holder",
            get_row : "get_row",
            array_obj_close : "confirm_arr_obj",
            choice_search : "choice_search",
            image_info : "image_info",
            data_info : "data_info",
            arr_opt_info : "arr_opt_info",
            close_noti : "close_noti",
            close_array_info : "close_array_info",
            div_ov : "div_ov",
            json_or_csv : "json_or_csv",
            bity : "bity",
            beautifier : "beautifier",
            menu_icon : "menu_icon",
            nav_holder : "nav_holder",
            project : "project",
            converter : "converter",
            file_getter : "file_getter",
            convert_download : "convert_download",
            file_name : "file_name",
            set : "set",
            logo : "logo",
            object_viewer : "object_viewer",
            object_viewer1 : "object_viewer1",
            project_name : "project_name",
            project_search : "project_search",
            yes : "yes",
            no : "no",
            ask_yes_no : "ask_yes_no",
            save_structure : "save_structure",
            name_set : "name_set",
            email_set : "email_set",
            back_from_user : "back_from_user",
            log_out : "log_out"
        },
        class: {
            main_body : "main_body",
            input_section: "section_get_input",
            choice_loader: "choice_loader",
            set_data_close : "set_data_confirm",
            current_year : "current_year",
            notify : "notify",
            right_arr_body : "right_arr_body",
            array_option : "array_option",
            array_choice_holder:"array_choice_holder",
            info_cont : "info_cont",
            right_trig : "right_trig",
            left_trig : "left_trig",
            info : "info",
            get_data : "get_data",
            set_data : "set_data",
            beautifier : "beautifier",
            project : "project",
            converter : "converter",
            convert_to : "convert_to",
            convert_to_cate : "convert_to_cate",
            convert_download : "convert_download",
            file_name:"file_name",
            nav : "nav",
            nav : "nav1",
            pc_project : "pc_project",
            new_set : "new_set",
            ns1 : "ns1",
            ns2 : "ns2",
            yes_no : "yes_no",
            ques : "ques",
            user_dis : "user_dis"
        },
        element: {
            input_custom_element: "input-custom-element",

            set_data_custom_element : "set-data-custom-element"
        }
    }
    return {
        GET_DOM: function () {
            return dom_obj;
        }
    }
})();


let REEL_DOM = DOM.GET_DOM();
let CURRENT_DISPLAY;

const MAIN_BODY = document.querySelector(REEL_DOM.class.main_body);
const ADD_FIELD = document.getElementById(REEL_DOM.id.add_field);
const INPUT_SECTION = document.querySelector("." + REEL_DOM.class.input_section);
const CHOICE_SEARCH = document.getElementById(REEL_DOM.id.choice_search);
const CHOICE_CLOSER = document.getElementById(REEL_DOM.id.choice_closer);
const CHOICE_LOADER = document.querySelector("." + REEL_DOM.class.choice_loader);
const OPTION_HOLDER = document.getElementById(REEL_DOM.id.option_holder);
const ROW_COUNT = document.getElementById(REEL_DOM.id.row_count);
const INPUT_CUSTOM_ELEMENT = document.querySelectorAll(REEL_DOM.element.input_custom_element);
const SET_DATA_CLOSE = document.querySelector("."+REEL_DOM.class.set_data_close);
const SET_DATA_CUSTOM_ELE = document.querySelector(REEL_DOM.element.set_data_custom_element);
const RANGE_SETTER = document.getElementById(REEL_DOM.id.range_setter);
const CURRENT_YEAR = document.querySelector("."+REEL_DOM.class.current_year);
const CHECKBOX = CURRENT_YEAR.querySelector("input");
const ARRAY_OPTION_HOLDER = document.getElementById(REEL_DOM.id.array_option_holder);
const ARRAY_OPTION_CLOSER = document.getElementById(REEL_DOM.id.array_obj_close);
const NOTIFY = document.querySelector("."+REEL_DOM.class.notify);
const DIV_OV = document.getElementById(REEL_DOM.id.div_ov);
const NEW_SET = document.querySelectorAll("."+REEL_DOM.class.new_set);
const NS1 = document.querySelector("."+REEL_DOM.class.ns1);
const NS2 = document.querySelector("."+REEL_DOM.class.ns2);
const OBJECT_VIEWER1 = document.getElementById(REEL_DOM.id.object_viewer1);
const USER_DISPLAY = document.querySelector("."+REEL_DOM.class.user_dis);
const NAME_SET = document.getElementById(REEL_DOM.id.name_set);
const EMAIL_SET = document.getElementById(REEL_DOM.id.email_set);
const BACK_FROM_USER = document.getElementById(REEL_DOM.id.back_from_user);
const LOG_OUT = document.getElementById(REEL_DOM.id.log_out);

let uid;


function caller(){
    let a =user_assign();
    uid = a.uid;
    get_data_from_db();
}

setTimeout(()=>{
    caller();
},700);

LOG_OUT.addEventListener("click",()=>{
    signOut();
    window.location.href = "sign_login.html";
    sessionStorage.removeItem("visited_signup_login");
});

function name_email_assigner(){
    document.getElementById(REEL_DOM.id.name_set).textContent = username;
};

// if (sessionStorage.getItem("visited_signup_login")) {
//     window.location.href = "index.html";
// }

ADD_FIELD.addEventListener("click", () => {
    let cust_ele = document.createElement("input-custom-element")
    INPUT_SECTION.appendChild(cust_ele);
    INPUT_SECTION.scrollTop = INPUT_SECTION.scrollHeight;
})

CHOICE_CLOSER.addEventListener("click", () => {
    CHOICE_SEARCH.value = "";
    CHOICE_LOADER.style.display = "none";
})

NEW_SET.forEach((s)=>{
    s.addEventListener("click",(event)=>{
        yes_no_action_trig("Do you want to clear the existing set and create a new one!","create_new_set");
    })
})

CHOICE_SEARCH.addEventListener("input",(event)=>{
    document.getElementById("o_all").click();
    let cont = event.target.value;
    search_data(cont);
});


CHOICE_SEARCH.addEventListener("blur",(event)=>{
    if(event.relatedTarget==null){
        event.target.value="";
        document.getElementById("o_all").click();
    }
});

NOTIFY.addEventListener("blur",(event)=>{
        event.target.blur();
        event.target.style.transform = "translateX(150%)"
})

ROW_COUNT.addEventListener('keydown', function (e) {
    if (e.key == "e" || e.key == "E" || e.key == "+" || e.key == "-") {
        e.preventDefault();
    }
});
ROW_COUNT.addEventListener("click", (event) => {
    var inputValue = event.target.value;
    inputValue = inputValue.replace(/^0+/, '');
    inputValue = inputValue.replace(/^\.+/, '');
    inputValue = inputValue.replace(/(\.\d*?)0+(\D|$)/, '$1$2');
    if (!/^\d*\.?\d*$/.test(inputValue)) {
        event.target.value = inputValue.slice(0, -1);
    }
});

CURRENT_YEAR.addEventListener("click",(event)=>{
    let par_ele = valueAdder.set_trigger_element.getRootNode().host;
    if(!CHECKBOX.checked){
        CHECKBOX.checked = true;
        par_ele.setAttribute("extra",true);
    }
    else{
        CHECKBOX.checked = false;
        par_ele.setAttribute("extra",false);
    }
});

CHECKBOX.addEventListener("click",(event)=>{
    let par_ele = valueAdder.set_trigger_element.getRootNode().host;
    if(!CHECKBOX.checked){
        CHECKBOX.checked = true;
        par_ele.setAttribute("extra",true);
    }
    else{
        CHECKBOX.checked = false;
        par_ele.setAttribute("extra",false);
    }
});

class valueAdder{

    static set_trigger_element;
    static value_to_pass;

    static set_trigger(value){
        this.set_trigger_element = value;
        return this.set_trigger_element.getRootNode().host;
    }

    static option_holder_iter(){
        OPTION_HOLDER.addEventListener("click",(event)=>{

            if (event.target.nodeName == 'CHOOSE-CUSTOM-ELEMENT'){
                    if(event.target.Header=="Range"){
                    //    RANGE_SETTER.style.display="block"
                    }
                    else{
                        this.value_to_pass = event.target.getAttribute("value");
                        choice_closer_v1("general");
                    }
            }
        })
    } 

    static set_data_close(){
        SET_DATA_CLOSE.addEventListener("click",()=>{
            if(SET_DATA_CUSTOM_ELE.filter.length>0){
                this.value_to_pass =  SET_DATA_CUSTOM_ELE.filter;
                choice_closer_v1("setdata");
            }
            else{
                notify("Set data field is empty ,fill it with appropriate values & press enter to confirm the value","830px","-30.8%")
            }
           
        })
    }

    static set_array_object(){
        ARRAY_OPTION_CLOSER.addEventListener("click",()=>{
            // CHOICE_CLOSER.click();
            let noti = 1
            if(!check_for_content()){
                if(!array_checker()){
                    this.value_to_pass = JSON.stringify(array_iterator());       
                    choice_closer_v1("setarray")
                }
                
                else{
                    notify("check whether all fields are filled [name,count,min,max [max>min] ]","830px","-69%");
                }
            }
            else{
                notify("No field is defined in the set array Or object container","830px","-81%");
            }
           
 
        });
       
    }


}

ARRAY_OPTION_CLOSER.addEventListener("blur",(ele)=>{
    ele.target.style.transform = "translateX(150%)"
});

function choice_closer_v1(v){
    let init_value = valueAdder.set_trigger_element
    let parent = init_value.getRootNode().host;
    let value = valueAdder.value_to_pass;

    // console.log(value)

    if(v=="general"){
        CHOICE_CLOSER.click();
        parent.setAttribute("value",value);
       
    }
    else if(v=="setdata"){
        CHOICE_CLOSER.click();
        value = `11,${value}`;
        parent.setAttribute("value",value);
    }
    else if(v=="setarray"){
        CHOICE_CLOSER.click();
        value = `12,${value}`;
        parent.setAttribute("value",value);
    }

    combinedFunction(value,init_value);

}

function truncateString(str, maxLength) {
   let a = str.toString().slice(0,maxLength);
   let b = a+" ...";
   return b;
}

function combinedFunction(value, init_value) {
    let value_v1 = value.split(",");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth>450){
        if (parseInt(value_v1[0]) != 11 && parseInt(value_v1[0]) != 12) {
            init_value.firstChild.data = truncateString(options_obj[value.split(",")[0]][value.split(",")[1]].header, 12);
        }
        else if(parseInt(value_v1[0])==12){
            let obj=JSON.parse(value_v1.slice(1).join(','));

            if(!obj[1] && obj[0].count==1){
                init_value.firstChild.data = truncateString(obj[0].org_name , 12);
            }
            else if(!obj[1] && obj[0].count>1){
                init_value.firstChild.data = truncateString(`[Array - ${obj[0].org_name}`, 12);
            }
            else{
                init_value.firstChild.data = truncateString(`[Object - ${obj}`, 12);
            }
        }
        else {
            init_value.firstChild.data = truncateString(value_v1.slice(1), 12);
        }
    }
    else{
        let svg = init_value.querySelector("img");  
        svg.setAttribute("src","svgs/ch_type2.svg")
    }
   
}


function notify(message,top,tra){
    let ele = document.querySelector("."+REEL_DOM.class.notify);
    ele.querySelector("#cont_alert_holder > p").innerHTML = message;
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth>880){
    ele.style.top = top;
    // ele.style.left = left;
    setTimeout(()=>{
        ele.style.transform = `translateX(${tra})`
    },100);
    }
    else{
       ele.style.transform = "translateX(0%)"
    }
    setTimeout(()=>{
        ele.focus();
    },800);
}


valueAdder.option_holder_iter();
valueAdder.set_data_close();
valueAdder.set_array_object();



