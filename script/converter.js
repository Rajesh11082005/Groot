const FILE_GETTER = document.getElementById(REEL_DOM.id.file_getter);
const CONVERT_DOWNLOAD_BUTTON = document.getElementById(REEL_DOM.id.convert_download);
const CONVERT_TO_PAR = document.querySelector("."+REEL_DOM.class.convert_to);
const CONVERT_TO_CATE = document.querySelectorAll("."+REEL_DOM.class.convert_to_cate);
const CONVERT_DOWNLOAD_PAR = document.querySelector("."+REEL_DOM.class.convert_download);
const FILE_NAME_PAR = document.querySelector("."+REEL_DOM.class.file_name);
const FILE_NAME = document.getElementById(REEL_DOM.id.file_name);

let type;
let file_name;

FILE_GETTER.addEventListener("change",(event)=>{
    console.log(event.target.files);
    let fileInput = event.target;
    var allowedFormats = ['text/xml', 'text/csv', 'application/json'];


    if (fileInput.files.length > 0) {
        var fileType = fileInput.files[0].type;
        if (allowedFormats.indexOf(fileType) === -1) {
            notify('Please upload an XML, CSV, or JSON file.');
            fileInput.value = '';
        }
        else{
            if(fileType=='text/xml'){
                type="xml";
            }
            else if(fileType=='text/csv'){
                type="csv";
            }
            else if(fileType=='application/json'){
                type="json";
            }
            file_name = fileInput.files[0].name;
        }
    }
    displaying_converter(type,file_name);
});

function displaying_converter(type,name){
    CONVERT_TO_CATE.forEach((ele)=>{
        ele.style.display="block";
    });
    let display_none = document.querySelector("."+type);
    display_none.style.display="none";
    FILE_NAME.textContent = name;
    CONVERT_TO_PAR.style.scale="1";
    FILE_NAME_PAR.style.scale="1";
}

CONVERT_TO_CATE.forEach((s)=>{
    s.addEventListener("click",(event)=>{
        if(document.querySelector(".make_it_green")){
            document.querySelector(".make_it_green").classList.remove("make_it_green");
        }
        event.target.classList.add("make_it_green");
        console.l
        if(CONVERT_DOWNLOAD_PAR.style.scale==0){
            CONVERT_DOWNLOAD_PAR.style.scale=1;
        }
    })
})

function initial_convert(){
    CONVERT_TO_PAR.style.scale="0";
    FILE_NAME_PAR.style.scale="0";
    CONVERT_DOWNLOAD_PAR.style.scale="0";
    FILE_GETTER.value="";
}

CONVERT_DOWNLOAD_BUTTON.addEventListener("click",()=>{

})

function reader(){

}

function jsonToXml(jsonData) {
    let xml = "<root>\n";

    for (const key in jsonData) {
        xml += `<${key}>${jsonData[key]}</${key}>\n`;
    }

    xml += "</root>";
    return xml;
}