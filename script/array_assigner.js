class ARR_USER {

  static dob = "";
  static age = "";

  static calling(id,s,extra) {
    let returned_thing;
    if (id == 0) {
      returned_thing = this.#name();
    }
    else if (id == 1) {
      returned_thing = this.#dob();
    }
    else if (id == 2) {
      returned_thing = this.#age();
    }
    else if (id == 3) {
      returned_thing = this.#gender();
    }
    else if (id == 4) {
      returned_thing = this.#title();
    }

    return returned_thing;
  }

  static #name() {
    return name_arr[RANDOM.random(0, 4946)]
  }

  static #dob() {
    let d;
    if(this.age){
      let y = new Date().getFullYear()-this.age;
      d = DATE_TIME.calling(1, "", "", [y,y]);
      this.dob = parseInt(d.split("-")[0]);
    }
    else{
      d = DATE_TIME.calling(1, "", "", [1950, 2019]);
    this.dob = parseInt(d.split("-")[0]);
    }
   
    return d
  }

  static #age() {
    let age;
    if (this.dob) {
      age = new Date().getFullYear() - this.dob;
    }
    else {
      age = RANDOM.random(2, 75);
    }
    this.age = age;
    return age;
  }

  static #gender() {
    let r = RANDOM.random(0, 1);
    if (r == 1) {
      return "male";
    }
    else {
      return "female";
    }
  }

  static #title() {
    let r = RANDOM.random(0, 1);
    if (r == 1) {
      return "Mr";
    }
    else {
      return "Miss";
    }
  }

}

class ARR_LOGIN {

  static salt = "+oCs&9PRmay1EQ0O";

  static calling(id,s,extra) {
    let returned_thing;
    if (id == 0) {
      returned_thing = this.#user_id();
    }
    else if (id == 1) {
      returned_thing = this.#email();
    }
    else if (id == 2) {
      returned_thing = this.#password(16);
    }
    else if (id == 3) {
      returned_thing = this.#salt_password();
    }
    else if (id == 4) {
      returned_thing = this.#sha_256();
    }
    return returned_thing;
  }

  static #user_id() {
    var randomString = Math.random().toString(36).substr(2, 4).toUpperCase();
    var timestamp = new Date().getTime();
    var userID = 'USER_' + timestamp + '_' + randomString;

    return userID;
  }
  static #email() {
    var usernameChars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var username = '';

    var usernameLength = Math.floor(Math.random() * 6) + 5;
    for (var i = 0; i < usernameLength; i++) {
      var randomIndex = Math.floor(Math.random() * usernameChars.length);
      username += usernameChars[randomIndex];
    }
    var domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    var domainIndex = Math.floor(Math.random() * domains.length);
    var domain = domains[domainIndex];

    var email = username + '@' + domain;

    return email;
  }
  static #password(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    var password = "";

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  static #salt_password() {
    let password = this.#password(16);
    var combinedString = password + this.salt;
    var hashedPassword = CryptoJS.SHA256(combinedString).toString(CryptoJS.enc.Hex);
    return hashedPassword;
  }

  static #sha_256() {
    let password = this.#password(16);
    let salt = this.#password(16);
    var combinedString = password + salt;
    var hashedPassword = CryptoJS.SHA256(combinedString).toString(CryptoJS.enc.Hex);
    return hashedPassword;
  }
}


class ARR_LOCATION {

  static country;

  static calling(id,s,extra) {
    let returned_thing;
    if(id==0){
      returned_thing = this.#street_name();
    }
    else if(id==1){
      returned_thing = this.#street_num();
    }
    else if(id==2){
      returned_thing = this.#city();
    }
    else if(id==3){
      returned_thing = this.#state();
    }
    else if(id==4){
      returned_thing = this.#country();
    }
    else if(id==5){
      returned_thing = this.#country_code();
    }
    else if(id==6){
      returned_thing = this.#long();
    }
    else if(id==7){
      returned_thing = this.#lat();
    }

    return returned_thing;
  }

  static #street_name(){
     return street_name[RANDOM.random(0,999)];
  }
  static #state(){
    return state[RANDOM.random(0,5083)];
  }
  static #street_num(){
    let a =  RANDOM.random(1,450);
    if(a<10){
      a = "00"+a;
    }
    else if(a>=10 && a<=99){
      a = "0"+a;
    }
    return a;
  }
  static #country(){
    if(this.country){
      return this.country.name;
    }
    else{
      let a = country_code[RANDOM.random(0,241)];
      this.country = a;
      return a.name;
    }
  }
  static #country_code(){
    if(this.country){
      return this.country.code;
    }
    else{
      let a = country_code[RANDOM.random(0,241)];
      this.country = a;
      return a.code;
    }
  }
  static #city(){
    return  city_long_lat[RANDOM.random(0,146993)].name;
  }

  static #long(){
    return  city_long_lat[RANDOM.random(0,146993)].lng;
  }

  static #lat(){
    return  city_long_lat[RANDOM.random(0,146993)].lat;
  }
}

let array_obj = {
  class : [ARR_USER,ARR_LOGIN,ARR_LOCATION,NUMBER,LOGICAL_STS,DATE_TIME,NATURE,TRANSPORT,MNC,BANK,OTHER],
  category: ["user", "login", "location", "number", "Logic-state", "date-time", "Nature", "transport", "MNC", "Banking","Other"],
  0: ["Name", "dob", "age", "gender", "title"],
  1: ["user id", "email", "password", "salted password", "SHA-256"],
  2: ["street name", "street number", "city", "state", "country", "country code", "longitude", "latatitude"],
  3: ["pincode", "ph-number", "range", "percentage"],
  4: ["true", "false", "true/false"],
  5: ["year", "date", "month", "days", "week day", "date time", "time HH:MM:SS", "time HH:SS", "hour", "minute", "seconds"],
  6: ["animal", "plant", "fish", "bird"],
  7: ["car make", "car model", "bike make", "bike model", "mileage", "fuel type", "airport code", "airport name"],
  8: ["company name", "construction material"],
  9: ["bank name", "credit card #", "credit type", "acc. No", "CIF no"],
  10: ["app version", "blank", "color", "character sequence", "currency", "domain name", "hex code", "ip address", "paragragh", "shirt size"]
}

const RIGHT_ARR_BODY = document.querySelector(".right_arr_body");
const ARRAY_CUSTOM_ELEMENT = document.querySelectorAll("array-option-custom-element");
const ARRAY_CHOICE_HOLDER = document.querySelector("." + REEL_DOM.class.array_choice_holder);




class RANDOM {
  static random(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
  }
}

function array_reader(obj){
  let array = [];
  let object = {};
  if(Object.keys(obj).length==1){
    for(let i=0;i<obj[0].count;i++){
        let a =  array_obj.class[obj[0].cate].calling(obj[0].chs,"",obj[0].extra);
        array.push(a);
    }

    return array;
  }
  else{
    ARR_LOCATION.country = "";
    ARR_USER.dob="";
    for(let i=0;i<Object.keys(obj).length;i++){
        // let send_obj = {};
        if(obj[i].count==1){
          // console.log(obj[i].cate);
          object[obj[i].name] = array_obj.class[obj[i].cate].calling(obj[i].chs,"",obj[i].extra);
        }
        else{
          let ar =[];
          // console.log(obj[i]);
          for(let j=0;j<obj[i].count;j++){
            let a =  array_obj.class[obj[i].cate].calling(obj[i].chs,"",obj[i].extra);
              ar.push(a);
              ARR_LOCATION.country = "";
              ARR_USER.dob="";
          }
          object[obj[i].name] = ar;
          
        }
    }
    // ARR_LOCATION.country = "";

    return object;
  }
  // console.log(array);
  // console.log(object);
}



function array_iterator() {
  // console.log(ARRAY_CHOICE_HOLDER);
  let children = ARRAY_CHOICE_HOLDER.querySelectorAll("array-option-custom-element");
  let obj_to_pass = {};
  children.forEach((child, index) => {
    let c_obj = {};

    let cate = parseInt(child.id.split("-")[0]);
    let chs = parseInt(child.id.split("-")[1]);
    
    c_obj.name = child.Name;
    c_obj.org_name = child.Org_Name;
    c_obj.count = child.Count;
    c_obj.extra = child.Extra;
    c_obj.cate = cate;
    c_obj.chs  = chs; 
    c_obj.min_max_state = child.Min_Max_State;
    c_obj.close_state = true;
    c_obj.count_state = true;

    obj_to_pass[index] = c_obj;
  });

  return obj_to_pass;
}

function array_loader(obj){
   
    ARRAY_CHOICE_HOLDER.innerHTML=""; 
    for(let i=0;i<Object.keys(obj).length;i++){
        let ele = document.createElement("array-option-custom-element");
        
        ele.setAttribute("id",obj[i].cate+"-"+obj[i].chs);
        ele.setAttribute("close_state",obj[i].close_state);
        ele.setAttribute("count",obj[i].count);
        ele.setAttribute("count_state",obj[i].count_state);
        ele.setAttribute("min_max_state",obj[i].min_max_state);
        ele.setAttribute("extra",obj[i].extra);
        ele.setAttribute("name",obj[i].name);
        ele.setAttribute("org_name",obj[i].org_name);

        ARRAY_CHOICE_HOLDER.appendChild(ele);
    }

}

function array_checker() {
  let children = ARRAY_CHOICE_HOLDER.querySelectorAll("array-option-custom-element");
  let return_sts = false;
  children.forEach((child) => {
    if ((child.Min_Max_State == "true" && child.Error == "true") || !child.Name || !child.Count) {
      return_sts = true;
    }
  });

  return return_sts;
};

function check_for_content(){
   if(ARRAY_CHOICE_HOLDER.children.length>0){
    return false;
  }
  else{
    return true;
  }
}

function array_tite(val) {
  let ele = document.createElement("div");
  ele.classList.add("array_title", "box");
  ele.textContent = val;
  return ele;
}

function assign() {
  let a = false;

  for (let i = 0; i < array_obj.category.length; i++) {
    let t_ele = array_tite(array_obj.category[i]);
    RIGHT_ARR_BODY.appendChild(t_ele);

    for (let j = 0; j < array_obj[i].length; j++) {
      let i_ele = document.createElement("array-option-custom-element");

      i_ele.setAttribute("name", array_obj[i][j]);
      i_ele.setAttribute("org_name", array_obj[i][j]);
      i_ele.setAttribute("id", `${i}-${j}`);
      i_ele.setAttribute("min_max_state", false);
      i_ele.setAttribute("count_state", false);
      i_ele.setAttribute("close_state", false);
      i_ele.addEventListener('dragstart', function (event) {
        event.target.classList.add("being_dragged");
        // event.target.dataTransfer.setData('text/plain', 'dragged_element');
      });
      i_ele.draggable = true;

      RIGHT_ARR_BODY.appendChild(i_ele);
    }

    if (i == (array_obj.category.length - 1)) {
      a = true;
    }
  }


}


ARRAY_CHOICE_HOLDER.addEventListener('dragover', function (event) {
  event.preventDefault();
});

ARRAY_CHOICE_HOLDER.addEventListener('drop', function (event) {
  event.preventDefault();
  let min_max_state = false;

  let dragged_element = document.querySelector(".being_dragged");
  if (dragged_element.id == "3-2") {
    min_max_state = true;
  }
  if (dragged_element) {
    dragged_element.classList.remove("being_dragged")

    var clonedElement = dragged_element.cloneNode(true);

    clonedElement.setAttribute('count_state', 'true');
    clonedElement.setAttribute('close_state', 'true');
    clonedElement.setAttribute("edit", true);
    if (min_max_state) {
      clonedElement.setAttribute("min_max_state", 'true');
      clonedElement.setAttribute("error", 'true');
    }
    clonedElement.focus();

    // Append the cloned element to the array_choice_holder
    ARRAY_CHOICE_HOLDER.appendChild(clonedElement);
    ARRAY_CHOICE_HOLDER.scrollTop = ARRAY_CHOICE_HOLDER.scrollHeight;
  }

});

assign();
