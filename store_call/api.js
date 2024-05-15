// let category =  ["user","login","media","location","number","Logic-state","date","Nature","transport","MNC","Banking","Set Data","Object","Other"];


let data={};
let img_data = [];

class USER {

    static calling(val, id,extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#first_name(id);
        }
        else if (val == 1) {
            returned_thing = this.#last_name(id);
        }
        else if (val == 2) {
            returned_thing = this.#dob(id);
        }
        else if (val == 3) {
            returned_thing = this.#age(id);
        }
        else if (val == 4) {
            returned_thing = this.#email(id);
        }
        else if (val == 5) {
            returned_thing = this.#gender(id);
        }
        else if (val == 6) {
            returned_thing = this.#full_name(id);
        }
        else if (val == 7) {
            returned_thing = this.#title(id);
        }
        return returned_thing;
    }

    static #first_name(id) {
        return data[id].name.first;
    }
    static #last_name(id) {
        return data[id].name.last;
    }
    static #dob(id) {
        return data[id].dob.date.substring(0, 10);
    }
    static #age(id) {
        return data[id].dob.age;
    }
    static #email(id) {
        return LOGIN.calling(3, id);
    }
    static #gender(id) {
        return data[id].gender;
    }
    static #full_name(id) {
        return this.#first_name(id) + " " + this.#last_name(id);
    }
    static #title(id) {
        return data[id].name.title;
    }

}

class LOGIN {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#user_id1(id)
        }
        else if(val == 1){
            returned_thing = this.#user_id2(id);
        }
        else if (val == 2) {
            returned_thing = this.#user_name(id);
        }
        else if (val == 3) {
            returned_thing = this.#email(id);
        }
        else if (val == 4) {
            returned_thing = this.#password(id);
        }
        else if (val == 5) {
            returned_thing = this.#salt_pass(id);
        }
        else if (val == 6) {
            returned_thing = this.#sha_256(id);
        }

        return returned_thing;
    }

    static #user_id1(id) {
        return "u" + (id + 1);
    }
    static #user_id2(id) {
        return data[id].login.uuid;
    }
    static #user_name(id) {
        return data[id].login.username;
    }
    static #email(id) {
        return data[id].email;
    }
    static #password(id) {
        return data[id].login.password;
    }
    static #salt_pass(id) {
        return data[id].login.salt;
    }
    static #sha_256(id) {
        return data[id].login.sha256;
    }
}

class MEDIA {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#large_img(id);
        }
        else if (val == 1) {
            returned_thing = this.#medium_img(id);
        }
        else if (val == 2) {
            returned_thing = this.#thumbnail(id);
        }
        else if (val == 3) {
            returned_thing = this.#random_image(id);
        }

        return returned_thing;

    }

    static #large_img(id) {
        return data[id].picture.large;
    }
    static #medium_img(id) {
        return data[id].picture.medium;
    }
    static #thumbnail(id) {
        return data[id].picture.thumbnail;
    }
    static async #random_image(id) {
        return img_data[id];
    }
}

class LOCATION {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#street_name(id);
        }
        else if (val == 1) {
            returned_thing = this.#street_number(id);
        }
        else if (val == 2) {
            returned_thing = this.#city(id);
        }
        else if (val == 3) {
            returned_thing = this.#state(id);
        }
        else if (val == 4) {
            returned_thing = this.#country(id);
        }
        else if (val == 5) {
            returned_thing = this.#address(id);
        }
        else if (val == 6) {
            returned_thing = this.#country_code(id);
        }
        else if (val == 7) {
            returned_thing = this.#longitude(id);
        }
        else if (val == 8) {
            returned_thing = this.#latitude(id);
        }

        return returned_thing;
    }

    static #street_name(id) {
        return data[id].location.street.name;
    }
    static #street_number(id) {
        return data[id].location.street.number;
    }
    static #city(id) {
        return data[id].location.city;
    }
    static #state(id) {
        return data[id].location.state;
    }
    static #country(id) {
        return data[id].location.country;
    }
    static #address(id) {
        return this.#street_name(id) + " , " + this.#street_number(id) + " , " + this.#city(id) + " , " + this.#state(id) + " , " + this.#country(id) + " , " + this.#country_code(id);
    }
    static #country_code(id) {
        return data[id].location.postcode;
    }
    static #longitude(id) {
        return data[id].location.coordinates.longitude;
    }
    static #latitude(id) {
        return data[id].location.coordinates.latitude;
    }

}

class NUMBER {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#pincode();
        }
        else if (val == 1) {
            returned_thing = this.#ph_num();
        }
        else if (val == 2) {
            returned_thing = this.#range(extra);
        }
        else if (val == 3) {
            returned_thing = this.#percentage();
        }

        return returned_thing;
    }

    static #pincode() {
        return this.#random(100000, 999999);;
    }
    static #ph_num() {
        return this.#random(7000000000, 9999999999);
    }
    static #range(extra) {
        let range_arr = extra.split(",");
        return this.#random(parseInt(range_arr[0]), parseInt(range_arr[1]));
    }
    static #percentage() {
        return this.#random(1, 100) + "%";
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }
}

class LOGICAL_STS {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#true();
        }
        else if (val == 1) {
            returned_thing = this.#false();
        }
        else if (val == 2) {
            returned_thing = this.#true_false();
        }

        return returned_thing;
    }

    static #true() {
        return true;
    }
    static #false() {
        return false;
    }
    static #true_false() {
        let n = Math.round(Math.random())
        if (n == 0) {
            return false;
        }
        else {
            return true;
        }
    }

}

class DATE_TIME {

    static month_arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    static week_arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    static calling(val, id, extra,limit=[2000,2024]) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#year(extra);
        }
        else if (val == 1) {
            returned_thing = this.#date(extra,limit[0],limit[1]);
        }
        else if (val == 2) {
            returned_thing = this.#month();
        }
        else if (val == 3) {
            returned_thing = this.#days();
        }
        else if (val == 4) {
            returned_thing = this.#week_day();
        }
        else if (val == 5) {
            returned_thing = this.#date_time();
        }
        else if (val == 6) {
            returned_thing = this.#hms();
        }
        else if (val == 7) {
            returned_thing = this.#hm();
        }
        else if (val == 8) {
            returned_thing = this.#h();
        }
        else if (val == 9) {
            returned_thing = this.#m();
        }
        else if (val == 10) {
            returned_thing = this.#s();
        }

        return returned_thing;
    }

    static #year(extra) {
        if (!extra) {
            let n = this.#random(1940, 2026);
            return n;
        }
        else {
            return new Date().getFullYear();
        }
    }
    static #date(extra,a,b) {
        let y = 0;
        if (!extra) {
            y = this.#random(a, b);
        }
        else {
            y = new Date().getFullYear();
        }
        let m = this.#random(1, 12);
        if(m<10){
            m = "0"+m;
        }
        let d = 0;
        if ((y % 4 == 0 || y % 400 == 0) && m == 2) {
            d = this.#random(1, 29);
        }
        else {
            d = this.#random(1, 28);
        }
        if(d<10){
            d = "0"+d;
        }

        return y + "-" + m + "-" + d;
    }

    static #month() {
        let n = this.#random(1, 12);
        return this.month_arr[n - 1];
    }

    static #days() {
        let n = this.#random(1, 31);
        return n;
    }

    static #week_day() {
        let n = this.#random(0, 6);
        return this.week_arr[n];
    }

    static #date_time() {
        let date = this.#date();
        let time = this.#hms();

        return date + " | " + time;
    }

    static #hms() {
        let h = this.#hour();
        let m = this.#min_sec();
        let s = this.#min_sec();
        let a_p = this.#am_pm();

        return h + ":" + m + ":" + s + " " + a_p;
    }

    static #hm() {
        let h = this.#hour();
        let m = this.#min_sec();
        let a_p = this.#am_pm();

        return h + ":" + m + " " + a_p;
    }

    static #h() {
        let h = this.#random(1, 24);
        if (h < 10) {
            "0" + h;
        }
        return h + "hr";
    }

    static #m() {
        return this.#min_sec() + "min"
    }

    static #s() {
        return this.#min_sec() + "sec"
    }

    static #min_sec() {
        let n = this.#random(1, 60);
        if (n < 10) {
            return "0" + n;
        }
        else {
            return n;
        }
    }

    static #hour() {
        let n = this.#random(1, 12);
        if (n < 10) {
            return "0" + n;
        }
        else {
            return n;
        }
    }

    static #am_pm() {
        let n = this.#random(1, 2);
        if (n == 1) {
            return "am";
        }
        else {
            return "pm";
        }
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

}

class NATURE {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#animal();
        }
        else if (val == 1) {
            returned_thing = this.#plant();
        }
        else if (val == 2) {
            returned_thing = this.#fish();
        }
        else if (val == 3) {
            returned_thing = this.#bird();
        }

        return returned_thing;
    }

    static #animal() {
        let n = this.#random(0, animal.length-1);
        return animal[n];
    }

    static #plant() {
        let n = this.#random(0, plant.length-1);
        return plant[n];
    }

    static #fish() {
        let n = this.#random(0, fish.length-1);
        return fish[n];
    }

    static #bird() {
        let n = this.#random(0, bird.length-1);
        return bird[n];
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }
}

class TRANSPORT {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#car_make();
        }
        else if (val == 1) {
            returned_thing = this.#car_model();
        }
        else if (val == 2) {
            returned_thing = this.#bike_brand();
        }
        else if (val == 3) {
            returned_thing = this.#bike_model();
        }
        else if (val == 4) {
            returned_thing = this.#mileage();
        }
        else if (val == 5) {
            returned_thing = this.#fueltype();
        }
        else if (val == 6) {
            returned_thing = this.#airport_code();
        }
        else if (val == 7) {
            returned_thing = this.#airport_name();
        }

        return returned_thing;
    }

    static #car_make() {
        let n = this.#random(0, car_brand.data.length-1);
        return car_brand.data[n].name;
    }

    static #car_model() {
        let n = this.#random(0, car_model.data.length-1);
        return car_model.data[n].name;
    }

    static #bike_brand() {
        let n = this.#random(0, bike_brand.data.length-1);
        return bike_brand.data[n].name;
    }

    static #bike_model() {
        let n = this.#random(0, bike_model.data.length-1);
        return bike_model.data[n].name;
    }

    static #mileage() {
        let n = this.#random(50, 150);
        return n + " km/l";
    }

    static #fueltype() {
        let a = ["petrol", "diesel", "elericity"]
        let n = this.#random(0, 2);
        return a[n];
    }

    static #airport_code() {
        let a = "";
        let b = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let len = this.#random(3, 4);
        for (let i = 0; i < len; i++) {
            let j = this.#random(0, 25);
            a += b[j];
        }
        return a;
    }

    static #airport_name() {
        let n = this.#random(0, airport_det.length-1);
        if (airport_det[n].name) {
            return airport_det[n].name;
        }
        else {
            let c = this.#airport_name();
            return c;
        }
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }
}

class MNC {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#company_name();
        }
        else if (val == 1) {
            returned_thing = this.#construction_material();
        }

        return returned_thing;
    }

    static #company_name() {
        let n = this.#random(0, 499);
        return company_name[n];
    }

    static #construction_material() {
        let n = this.#random(0, material.length-1);
        return material[n];
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

}

class BANK {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#bank_name();
        }
        else if (val == 1) {
            returned_thing = this.#credit_number();
        }
        else if (val == 2) {
            returned_thing = this.#credit_type();
        }
        else if (val == 3) {
            returned_thing = this.#account_number();
        }
        else if (val == 4) {
            returned_thing = this.#cif_number();
        }

        return returned_thing
    }

    static #credit_type() {
        let n = this.#random(0, 47);
        return credit_type[n];
    }

    static #credit_number() {
        let n = this.#random(1000000000000000, 9999999999999999);
        let v = n.toString().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
        return v;
    }

    static #account_number() {
        let n = this.#random(1000000000, 999999999999);
        return n;
    }


    static #cif_number() {
        let n = this.#random(1000000000, 99999999999);
        return n;
    }

    static #bank_name() {
        let n = this.#random(0,(Object.entries(bank_name).length)-1);
        return Object.entries(bank_name)[n];
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }
}

class OTHER {

    static calling(val, id, extra) {
        let returned_thing;

        if (val == 0) {
            returned_thing = this.#app_v();
        }
        else if(val==1){
            returned_thing = this.#blank();
        }
        else if(val==2){
            returned_thing = this.#color();
        }
        else if(val==3){
            returned_thing = this.#ch_sq();
        }
        else if(val==4){
            returned_thing = this.#currency();
        }
        else if(val==5){
            returned_thing = this.#domain();
        }
        else if(val==6){
            returned_thing = this.#hex_code();
        }
        else if(val==7){
            returned_thing = this.#ip_add();
        }
        else if(val==8){
            returned_thing = this.#para();
        }
        else if(val==9){
            returned_thing = this.#shirt_size();
        }

        return returned_thing
    }

    static #app_v() {
        let n = this.#random(1, 8);
        return "v" + n;
    }

    static #blank() {
        return "";
    }

    static #color() {
        let n = this.#random(0, (Object.keys(color).length)-1);
        return Object.values(color)[n];
    }

    static #hex_code() {
        let n = this.#random(0,(Object.keys(color).length)-1);
        return Object.keys(color)[n];
    }

    static #domain(){
        let n = this.#random(0,91);
        return domain[n];
    }

    static #ch_sq() {
        let length = this.#random(15,20);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let sequence = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            sequence += characters.charAt(randomIndex);
        }

        return sequence;
    }

    static #currency(){
        let n = this.#random(0,(Object.values(currency).length)-1);
        console.log(n);
        return Object.values(currency)[n].name;
    }

    static #ip_add(){
        const num1 = Math.floor(Math.random() * 256);
        const num2 = Math.floor(Math.random() * 256);
        const num3 = Math.floor(Math.random() * 256);
        const num4 = Math.floor(Math.random() * 256);
    
        // Concatenate the numbers with periods to form the IP address
        const ipAddress = `${num1}.${num2}.${num3}.${num4}`;
        return ipAddress;
    }

    static #shirt_size(){
        const shirtSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
        let n = this.#random(0,6);
        return shirtSizes[n];
    }

    static #para(){
        let a = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        return a;
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }


}

class SETDATA{

    static calling(val,id,extra){
        // console.log(val);

        return this.#set_data(val);
    }

    static #set_data(value){
        if(value.length==1){
            return value[0];
        }
        else{
        let a = this.#random(0,value.length-1);
        return value[a];
        }
    }

    static #random(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }
}

class API_CALLER {

    static async initial_api_caller(count) {
        try {
            let url = `https://randomuser.me/api/?results=${count}&password=number,upper,lower,1-16`;
            let a = await fetch(url, {
                headers: {
                    dataType: 'json'
                }
            });

            if (a.ok) {
                let b = await a.json();
                // data = b.results;
                return b.results;
            }
        }
        catch {

        }
    }

    static async img_api_caller(count){
        let arr = [];
        let a = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
        if (a.ok) {
            let b = await a.json();
            for(let i=0;i<b.length;i++){
                let obj = {};
                obj.url = b[i].url;
                obj.download_url = b[i].download_url;
                arr.push(obj);
            }
        }
       
        return arr;   
    }
}

async function random_user_caller(c){
    let first_part = Math.floor(c / 5000);
    let second_part = c % 5000;
    
    for (let i = 0; i < first_part; i++) {
        let array = await API_CALLER.initial_api_caller(5000);
        let ct =0;
        let len = Object.keys(data).length; 
        for(let i=len;i<array.length+len;i++){
            data[i]=array[ct];
            ct++;
        }
    };

    let array = await API_CALLER.initial_api_caller(second_part);
    let ct = first_part;
    for(let i=first_part;i<second_part;i++){
        data[ct] = array[i];
        ct++;
    }
    
    return;
}
