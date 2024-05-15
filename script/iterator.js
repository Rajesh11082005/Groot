// let img_state = true;

let clickedInIframe = false;
const GENERATOR = document.getElementById(REEL_DOM.id.generate);
const PROJECT_NAME = document.getElementById(REEL_DOM.id.project_name);
const OBJECT_VIEWER = document.getElementById(REEL_DOM.id.object_viewer);
const SAVE_STRUCTURE = document.getElementById(REEL_DOM.id.save_structure);
const DOWNLOAD = document.getElementById("download");

let save_state = false;
let download_state = false;

let count = document.getElementById(REEL_DOM.id.get_row).value;

SAVE_STRUCTURE.addEventListener("click",() => {
    if(Project.stored_obj_key.includes(PROJECT_NAME.value) && !Project.called_state){
        notify("Project name is already defined ","800px","-270%");
    }
    else{
        save_state = true;
        GENERATOR.click();
    } 
});

DOWNLOAD.addEventListener("click",()=>{
    download_state = true;
    GENERATOR.click();
})

GENERATOR.addEventListener("click", (event) => {
    iter_custom_element();
    clickedInIframe = false;
});

PROJECT_NAME.addEventListener("input", (event) => {
    if (event.target.value.length < 1) {
        event.target.style.borderBottomColor = "red";
    }
    else {
        event.target.style.borderBottomColor = "var(--color2)";
    }
})

async function iter_custom_element() {
    let count = document.getElementById(REEL_DOM.id.get_row).value;
    let passing_obj = {};
    if (checker() && PROJECT_NAME.value) {
        if (count > 0 && count) {

            NS1.style.display = "none";
            OBJECT_VIEWER.style.display = 'block';
            gene_time_call();

            DIV_OV.style.display = "block";
            await random_user_caller(count);

            // await API_CALLER.img_api_caller(count);

            document.querySelectorAll("input-custom-element").forEach((ele, index, arr) => {
                let length = [...arr].length;
                let cate = parseInt(ele.Value.split(",")[0]);
                let opt;
                passing_obj[index] = {};

                if (index < length) {
                    if (cate != 11) {
                        opt = parseInt(ele.Value.split(",")[1]);
                    }
                    if (cate == 12) {
                        opt = JSON.parse(ele.Value.split(",").slice(1).join(","));
                    }
                    else {
                        opt = ele.Value.split(",").slice(1);
                    }


                    passing_obj[index].name = ele.Name;
                    passing_obj[index].cate = cate;
                    passing_obj[index].opt = opt
                    passing_obj[index].extra = ele.Extra;
                }

            });
            // console.log(passing_obj);
            Project.pass_obj(passing_obj);

            if (has_img(passing_obj)) {
                await img_caller(count);
            }

            iter_obj_created(passing_obj, count);
        }
        else {
            notify("Row count is not defined ","800px","-330%");
        }
    }
    else {
        notify("Please fill the name & category field !","800px","-233%")
    }


}


function checker() {
    let isValid = true;
    let ele_p = document.querySelectorAll("input-custom-element");
    if(ele_p.length>=1){
        ele_p.forEach((ele, index) => {

            if (!ele.Name || !ele.Value) {
                isValid = false;
                return isValid;
            }
            else {
                if (ele.Value.split(",")[1] === "") {
                    isValid = false;
                    return isValid;
                }
            }
        });
    }
    else{
        isValid = false;
    }
   
    return isValid;
}

async function iter_obj_created(obj, count) {

    let final_obj = {};
    let final_array = [];


    for (let i = 0; i < count; i++) {
        final_obj[i] = {};
        for (let j = 0; j < Object.keys(obj).length; j++) {
            if (obj[j].cate == 2 && obj[j].opt == 3) {
                final_obj[i][obj[j].name] = await options_obj.class[obj[j].cate].calling(obj[j].opt, i, obj[j].extra)//.then(result => {final_obj[i][obj[j].name] = result;});
            }
            if (obj[j].cate == 12) {
                final_obj[i][obj[j].name] = array_reader(obj[j].opt);
            }
            else {
                // console.log(options_obj.class[obj[j].cate].calling(obj[j].opt, i, obj[j].extra));
                final_obj[i][obj[j].name] = options_obj.class[obj[j].cate].calling(obj[j].opt, i, obj[j].extra);
            }
            if (i == 0) {
                DIV_OV.style.display = "none";
                gene_time_stop();
            }

        }
        call_to_beautify(JSON.stringify(final_obj));
        final_array.push(final_obj[i]);
    }


    Project.sam_obj(final_obj[0]);
    Project.com_obj(final_obj);
    if(save_state){
        project_adder();
        save_state = false;
    }
    if(download_state){
        download_fn(final_obj);
        download_state = false;
    }
    console.log(final_obj);
    console.log(final_array);
}

function has_img(obj) {
    for (let key in obj) {
        if (obj[key].cate === 2 && obj[key].opt === 3) {
            return true;
        }
    }
    return false;
}


function download_fn(json_obj) {

    const jsonBlob = new Blob([JSON.stringify(json_obj, null, 2)], { type: 'application/json' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(jsonBlob);

    downloadLink.download = 'data.json';

    document.body.appendChild(downloadLink);

    // Simulate a click on the link
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
}

async function img_caller(count) {

    let first_part = Math.floor(count / 100);
    let second_part = count % 100;

    for (let i = 0; i < first_part; i++) {
        let array = await API_CALLER.img_api_caller(100);
        img_data = img_data.concat(array);
    };

    let array = await API_CALLER.img_api_caller(second_part);
    img_data = img_data.concat(array);

    console.log(img_data);
    return;
}
