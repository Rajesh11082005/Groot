
function dataStoring(data, project_name) {
    let stringified_data = data;
   

    const userDocRef = db.collection("user").doc(user_assign().uid);

    return userDocRef.update({
        [project_name]: stringified_data
    })
        .then(() => {
            // console.log("Data appended successfully");
            db_key_setter();
        })
        .catch((error) => {
            // console.error("Error appending data: ", error);
        });
}

async function get_data_from_db() {
    let obj = {};
    let new_obj = {};
    let st = false
    await db.collection("user").doc(user_assign().uid).get().then(s => {
        obj = s.data();
        console.log(obj);
        if(obj){
            NAME_SET.textContent = obj.name;
        EMAIL_SET.textContent = obj.email;
        st=true;
        }
        
    });
    console.log(obj);
    if(st){
        let obj_key = Object.keys(obj);
        for (let i = 0; i < obj_key.length; i++) {
            if (obj_key[i] != "email" && obj_key[i] != "name") {
                new_obj[obj_key[i]] = JSON.parse(obj[obj_key[i]]);
            }
        }
        initial_project_loader(new_obj);
    }
   
    // console.log(new_obj);
}

function initial_project_loader(obj) {

    let obj_key = Object.keys(obj);

    for (let i = 0; i < obj_key.length; i++) {

        // console.log(obj[obj_key[i]].sample)

        let current_obj_sample = obj[obj_key[i]].sample;
        let current_value_sam = obj[obj_key[i]];
        let current_value = obj[obj_key[i]].value;

        let new_ele = document.createElement("choose-custom-element");
        new_ele.setAttribute("height", "140px");
        new_ele.setAttribute("width", "250px");
        new_ele.setAttribute("header", obj_key[i]);
        new_ele.setAttribute("value_all",current_value_sam)
        new_ele.setAttribute("value", current_value);
        new_ele.setAttribute("content", current_obj_sample);
        new_ele.setAttribute("class", "p_cust");
        new_ele.addEventListener("click", (event) => {
            
            if (document.querySelector("selected")) {
                document.querySelector("selected").classList.remove("selected");
            }
            event.target.classList.add("selected");
            yes_no_action_trig("Do you want to use this structure set!", "pro");
            ASK_YES_NO.setAttribute("value", "pro");
            CLICKED_BY_PRO_CUST = true;
            Project.call_state(true);
        });

        PC_PROJECT.appendChild(new_ele);
    }
    db_key_setter();
}

async function db_key_setter(){
    let obj;
    await db.collection("user").doc(user_assign().uid).get().then(s => {
        obj = s.data();
    })
    let obj_key = Object.keys(obj);
    // console.log(obj_key);
    Project.store_obj_key(obj_key);
}

function signOut() {
    auth.signOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }
