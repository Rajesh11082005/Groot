const IMAGE_INFO = document.getElementById(REEL_DOM.id.image_info);
const INFO_CONT = document.querySelector("." + REEL_DOM.class.info_cont);
const RIGHT_TRIG = document.querySelector("." + REEL_DOM.class.right_trig);
const LEFT_TRIG = document.querySelector("." + REEL_DOM.class.left_trig);
const INFO = document.querySelector("." + REEL_DOM.class.info);
const DATA_INFO = document.getElementById(REEL_DOM.id.data_info);
const ARR_OPT_INFO = document.getElementById(REEL_DOM.id.arr_opt_info);
const CLOSE_ARRAY_INFO = document.getElementById(REEL_DOM.id.close_array_info);
const CLOSE_NOTI = document.getElementById(REEL_DOM.id.close_noti);

let arr = [
           ["set_data_img/img1.svg", "<span>Set data</span> helps user to define set of values , so that the value assigned to the defined key will be from any of the values user define in set data"], 
           ["set_data_img/img2.gif", "<span>To Add Value</span><br><br> enter the value in the container below <span>ADD DATA</span> and press enter key or space key"], 
           ["set_data_img/img3.gif", "<span>To Remove Value</span><br><br>Click close to remove a defined value or focus on the container to add a value. Press backspace to remove the last value when the container is empty."]
          ];
let arr1 = [
            ["opt_arr_img/img1.svg","<span>set array or object </span> , allows user to define value for the key either in array or object format"],
            ["opt_arr_img/img2.png","<span>Type 1 : </span><br><br>when one field is defined with count as 1 or many , returns a array of values"],
            ["opt_arr_img/img3.png","<span>Type 2 : </span><br><br>when multiple fields are defined with count , it returns a object with key [user defined/default]"],
            ["opt_arr_img/img4.gif","<span>to add field</span><br><br>drag the field from the right side category container and drop it in container below 'SET ARRAY & OBJECT'"],
            ["opt_arr_img/img5.gif","<span>change field name :</span><br><br>double tap on the specified name in the field <br> => edit it <br> => press enter to save changes"],
            ["opt_arr_img/img6.gif","<span>Set count ,min & max</span><br><br>set count,min and max for a field in respective input segment."],
            ["opt_arr_img/img7.gif","<span>To remove field</span><br><br>click the close symbol in the field."],
            ["opt_arr_img/img8.svg","<span>desclaimer </span><br><br>don't confirm with defining :<br><br> <span id='red'>*</span>name of the field<br><span id='red'>*</span>count<br><span id='red'>*</span>min & max<br><span id='red'>*</span>max > min"]
          ]
let assign_arr;

CLOSE_ARRAY_INFO.addEventListener("click",()=>{
    INFO.style.transform = "translateX(150%)";
});
CLOSE_NOTI.addEventListener("click",()=>{
    NOTIFY.style.transform = "translateX(150%)"
})
INFO.addEventListener("blur",()=>{
    INFO.style.transform = "translateX(150%)"
})

DATA_INFO.addEventListener("mouseover",(event)=>{
    event.target.setAttribute("src","svgs/info1.svg");
});
DATA_INFO.addEventListener("mouseleave",(event)=>{
    event.target.setAttribute("src","svgs/info.svg");
});
ARR_OPT_INFO.addEventListener("mouseover",(event)=>{
    event.target.setAttribute("src","svgs/info1.svg");
});
ARR_OPT_INFO.addEventListener("mouseleave",(event)=>{
    event.target.setAttribute("src","svgs/info.svg");
});

DATA_INFO.addEventListener("click",()=>{
    INFO.style.transform = "translateX(0%)";
    setTimeout(() => {
        INFO.focus();
    }, 200);
    info_loader(arr);
});
ARR_OPT_INFO.addEventListener("click",()=>{
    INFO.style.transform = "translateX(0%)";
    setTimeout(() => {
        INFO.focus();
    }, 200);
    info_loader(arr1);
});

function info_loader(arr) {
    let count = parseInt(INFO.setAttribute("count", 0));
    img_cont_info_loader(arr[0][0], arr[0][1]);
    LEFT_TRIG.style.display = "none";
    assign_arr = arr;
};

function arrow_display() {
    let count = parseInt(INFO.getAttribute("count"));

    if (count === 0) {
        LEFT_TRIG.style.display = "none";
        RIGHT_TRIG.style.display = "block";
    } else if (count === (assign_arr.length - 1)) {
        LEFT_TRIG.style.display = "block";
        RIGHT_TRIG.style.display = "none";
    } else {
        LEFT_TRIG.style.display = "block";
        RIGHT_TRIG.style.display = "block";
    }
}

RIGHT_TRIG.addEventListener("click", () => {
    let c = parseInt(INFO.getAttribute("count"));

    INFO.setAttribute("count", c + 1);
    img_cont_info_loader(assign_arr[c + 1][0], assign_arr[c + 1][1]);

    arrow_display();
    // img_cont_info_loader()
});

LEFT_TRIG.addEventListener("click", () => {
    let c = parseInt(INFO.getAttribute("count"));
    INFO.setAttribute("count", c - 1);
    console.log(assign_arr[c - 1][0]);
    img_cont_info_loader(assign_arr[c - 1][0], assign_arr[c - 1][1]);
    arrow_display();
    // img_cont_info_loader()
});

function img_cont_info_loader(img, cont) {
    IMAGE_INFO.setAttribute("src", img);
    INFO_CONT.innerHTML = cont;
}
