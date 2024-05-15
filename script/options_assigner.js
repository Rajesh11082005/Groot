

let options_obj ={
  All:"",
  category : ["user","login","media","location","number","Logic-state","date-time","Nature","transport","MNC","Banking","Set Data","Object | Array","Other"],
  class : [USER,LOGIN,MEDIA,LOCATION,NUMBER,LOGICAL_STS,DATE_TIME,NATURE,TRANSPORT,MNC,BANK,SETDATA,"",OTHER],
  //user
  0:{
    0:{
      header:"First Name",
      content:'["John","Emily","Michael"]',
      extra:"",
    },
    1:{
      header:"Last Name",
      content:'["Smith","Johnson","Garcia"]',
      extra:"",
    },
    2:{
      header:"DOB",
      content:'Generate random date as user\'s DOB',
      extra:"",
    },
    3:{
      header:"Age",
      content:'Generate random number and set it as user\'s age',
      extra:""
    },
    4:{
      header:"Email",
      content:'Generate email address for user \nEx : "test_email@hmail.com"',
      extra:""
    },
    5:{
      header:"Gender",
      content:'["Male","Female"]',
      extra:""
    },
    6:{
      header:"Full Name",
      content:'["John Smith","Emily Johnson","Michael Garcia"]',
      extra:""
    },
    7:{
      header:"Title",
      content:'["Mr","Mrs"]',
      extra:""
    }
  },
  //login
  1:{
    0:{
      header:"User Id I",
      content:'A unique identifier assigned to a user within a system \nEx : u1,u2,u3...',
      extra:"",
    },
    1:{
      header:"User Id II",
      content:'A unique identifier assigned to a user within a system \n#random',
      extra:"",
    },
    2:{
      header:"User Name",
      content:'["goldpanda112","orgawolf65","happyfrog691"]',
      extra:"",
    },
    3:{
      header:"Email",
      content:'["ex1@example.com", "user123@gmail.com", "test_email@hmail.com"]',
      extra:""
    },
    4:{
      header:"Password",
      content:'Generate passwords with customizable requirements ',
      extra:""
    },
    5:{
      header:"Salted Password",
      content:'Salt algorithm encrypted password ',
      extra:""
    },
    6:{
      header:"SHA-256",
      content:'The bcrypt hash of a randomly generated password',
      extra:""
    }
  },
  //Media
  2:{
    0:{
      header:"Large IMG",
      content:'User image in large \nresolution ',
      extra:"",
    },
    1:{
      header:"Medium IMG",
      content:'User image in medium \nresolution ',
      extra:"",
    },
    2:{
      header:"Thumbnail",
      content:'User thumbnail image',
      extra:"",
    },
    3:{
      header:"Random Image",
      content:'Generate a random image url and download url for it',
      extra:"",
    },
    // 4:{
    //   header:"Download URL",
    //   content:'Download  url for the random image generated before ',
    //   extra:"",
    // }
  },
  //Location
  3:{
    0:{
      header:"Street Name",
      content:'A street name (excluding the suffix) Pine View',
      extra:"",
    },
    1:{
      header:"Street Number",
      content:'A street number between 1 and 5 digits \n6449',
      extra:"",
    },
    2:{
      header:"City",
      content:'["New York","Berlin","London"]',
      extra:"",
    },
    3:{
      header:"State",
      content:'State/Province names, US and worldwide',
      extra:"",
    },
    4:{
      header:"Country",
      content:'["Germany","France","Japan"]',
      extra:"",
    },
    5:{
      header:"Address",
      content:'Room, Apt, Floor, Suite, or PO box number',
      extra:"",
    },
    6:{
      header:"Country Code",
      content:'["ES","GR","FR"]',
      extra:"",
    },
    7:{
      header:"Longitude",
      content:'["-45.15259533671917","115.70563293321999","81.9426325226724"]',
      extra:"",
    },
    8:{
      header:"Latitude",
      content:'["48.52469361225269","72.26886762838888","-12.592370752117404"]',
      extra:"",
    },
  },
  //number
  4:{
    0:{
      header:"Pincode",
      content:'["647233","656768","675554"]',
      extra:"",
    },
    1:{
      header:"PH-number",
      content:'["(88) 1404-7017","92384-92894","0110687 930 1656"]',
      extra:"",
    },
    2:{
      header:"Range",
      content:'Give a random number from the given range',
      extra:"",
    },
    3:{
      header:"Percentage",
      content:'["90%","60%","75%"]',
      extra:"",
    },
  },
  //boolean
  5:{
    0:{
      header:"True",
      content:'Set true for all keys',
      extra:"",
    },
    1:{
      header:"False",
      content:'Set false for all keys',
      extra:"",
    },
    2:{
      header:"True / False",
      content:'["true","false"]',
      extra:"",
    },
  },
  //date
  6:{
    0:{
      header:"Year",
      content:'generates a random year \nEx : 1940,2005..',
      extra:"",
    },
    1:{
      header:"Date",
      content:'["12-04-2005","24-10-2020","30-06-2015"]',
      extra:"",
    },
    2:{
      header:"Month",
      content:'["February","September","December"]',
      extra:"",
    },
    3:{
      header:"Days",
      content:'generate nth day of a month [1-31] ',
      extra:"",
    },
    4:{
      header:"Week Day",
      content:'["Sunday","Monday","Thursday"]',
      extra:"",
    },
    5:{
      header:"Date time",
      content:'["7:00pm|22-09-2001","8:30am|12-09-2017","10:30pm|10-09-2023"]',
      extra:"",
    },
    6:{
      header:"Time [hh:mm:ss]",
      content:'["05:34:45 am","12:43:20 pm","01:14:13 am"]',
      extra:"",
    },
    7:{
      header:"Time [hh:mm]",
      content:'["05:34 am","12:43 pm","01:14 am"]',
      extra:"",
    },
    8:{
      header:"Hour",
      content:'["05hr","22hr","14hr"]',
      extra:"",
    },
    9:{
      header:"Minute",
      content:'["14min","45min","58min"]',
      extra:"",
    },
    10:{
      header:"Seconds",
      content:'["10sec","52sec","20sec"]',
      extra:"",
    },
  },
  //Nature
  7:{
    0:{
      header:"Animal",
      content:'["Tiger","Dog","Zebra"]',
      extra:"",
    },
    1:{
      header:"Plant",
      content:'["Cactus","Rose","Tomato"]',
      extra:"",
    },
    2:{
      header:"Fish",
      content:'["Whale","Dolphin","Sea horse"]',
      extra:"",
    },
    3:{
      header:"Bird",
      content:'["Swifts","Eagle","Penguins"]',
      extra:"",
    }

  },
  //Transport
  8:{
    0:{
      header:"Car Make",
      content:'["Honda","Ford","Pontiac"]',
      extra:"",
    },
    1:{
      header:"Car Model",
      content:'["Prelude","Mustang", "Trans Am"]',
      extra:"",
    },
    2:{
      header:"Bike Make",
      content:'["KTM","Hero", "TVS"]',
      extra:"",
    },
    3:{
      header:"Bike Model",
      content:'["RX100","Jupiter", "v1"]',
      extra:"",
    },
    4:{
      header:"Mileage",
      content:'Generate a random mileage for any vehicle',
      extra:"",
    },
    5:{
      header:"Fuel Type",
      content:'["Diesel","Petro", "Electricity"]',
      extra:"",
    },
    6:{
      header:"Airport Code",
      content:'["LAX","NWR","JFK"]',
      extra:"",
    },
    7:{
      header:"Airport Name",
      content:'Names of the Airports from different region',
      extra:"",
    }
  },
  //Industries - MNC
  9:{
    0:{
      header:"Company Name",
      content:'["Google","Home Depot","General Electric"]',
      extra:"",
    },
    1:{
      header:"Construction Material",
      content:'["Glass","Plastic","Aluminum"]',
      extra:"",
    }
  },
  //Banking
  10:{
    0:{
      header:"Bank Name",
      content:'["Chase Bank", "Wells Fargo", "Bank of America"]',
      extra:"",
    },
    1:{
      header:"Credit Card #",
      content:'["4017959045824","5349690971837932","372301294706546"]',
      extra:"",
    },
    2:{
      header:"Credit Type",
      content:'["visa","mastercard","americanexpress"]',
      extra:"",
    },
    3:{
      header:"Account Number",
      content:'["12345678906", "98765432123", "55512343567"]',
      extra:"",
    },
    4:{
      header:"CIF Number",
      content:'["12345678901", "98765432109", "45678901234"]',
      extra:"",
    },
  },
  //others
  13:{
    0:{
      header:"App Version",
      content:'["V1", "V2", "V3"]',
      extra:"",
    },
    1:{
      header:"Blank",
      content:'Set default value as null',
      extra:"",
    },
    2:{
      header:"Color",
      content:'["Red", "Blue", "Yellow"]',
      extra:"",
    },
    3:{
      header:"Character Sequence",
      content:'Create simple sequences of characters, digits, and symbols',
      extra:"",
    },
    4:{
      header:"Currency",
      content:'["Dollar","Euro","Peso"]',
      extra:"",
    },
    5:{
      header:"Domain Name",
      content:'["google.com","wikipedia.org","nih.gov"]',
      extra:"",
    },
    6:{
      header:"Hex Code",
      content:'["#142a0b","#F0F0F0","#0066FF"]',
      extra:"",
    },
    7:{
      header:"Ip Address",
      content:' 121.150.202.132',
      extra:"",
    },
    8:{
      header:"Paragragh",
      content:'Chosen randomly from lorem ipsum',
      extra:"",
    },
    9:{
      header:"Shirt Size",
      content:'["M","L","S"]',
      extra:"",
    }
  }
}
const CATEGORY = document.getElementById(REEL_DOM.id.category);
const ADDITIONAL_OPTION_HOLDER = document.getElementById(REEL_DOM.id.addi_option_holder);

function option_loader(){
  // console.log();
  let Array = options_obj.category;
  
  let ele_first = document.createElement("category-custom-element");
  ele_first.setAttribute("name","All");
  ele_first.setAttribute("id","o_all");

  let get_total_length = ()=>{
    let length = 0;

    Array.forEach((e,index)=>{
      if(options_obj[index]){
        length+=Object.keys(options_obj[index]).length;
      }
    })
    return length;
  }

  ele_first.setAttribute("count",get_total_length());
  CATEGORY.appendChild(ele_first);

  Array.forEach((element,index) => {


    let ele = document.createElement("category-custom-element");
    ele.setAttribute("name",element);
    ele.setAttribute("id","o"+index);
    ele.setAttribute("tabindex",-1);
    if(options_obj[index]){
      ele.setAttribute("count",Object.keys(options_obj[index]).length)
    }

    CATEGORY.appendChild(ele);

  });

};

function category_loader(id){
  if(id!="all"){
    ARRAY_OPTION_HOLDER.style.display="none";
    let object = options_obj[id];
    if(options_obj[id]){
      for(let i=0;i<Object.keys(options_obj[id]).length;i++){
        let ele = document.createElement("choose-custom-element");
        let value_list = [id,i];
        ele.setAttribute("header",object[i].header);
        ele.setAttribute("content",object[i].content);
        ele.setAttribute("value",value_list);
        ele.setAttribute("id",id+"|"+i);
        ele.setAttribute("tabindex",-1);

        let par_ele = valueAdder.set_trigger_element.getRootNode().host;
        if(par_ele.Extra){
          if(i==2){
             ele.setAttribute("extra",par_ele.Extra);
          }
        }
  
        OPTION_HOLDER.appendChild(ele);
      }
    }
    else{
      display_set_data(id);
    }
  }
  else{
    CURRENT_YEAR.style.display="none";
    ARRAY_OPTION_HOLDER.style.display="none";

    options_obj.category.forEach((s,index)=>{
      if(options_obj[index]){
        category_loader(index);
      }
    })
    sorting_all();
  }
};

function display_set_data(id){
  if(id==11){
    ARRAY_OPTION_HOLDER.style.display="none";
    let trig_element = valueAdder.set_trigger_element.getRootNode().host;
    let value = trig_element.getAttribute("value");
    
    if(value){
      ADDITIONAL_OPTION_HOLDER.style.display="block";
    }
    else{
      
      ADDITIONAL_OPTION_HOLDER.style.display="block";
      SET_DATA_CUSTOM_ELE.remove();
    }
   
  }
  if(id==12){
    let trig_element = valueAdder.set_trigger_element.getRootNode().host;
     ARRAY_OPTION_HOLDER.style.display="block";
     if(trig_element.Value){
      let obj = JSON.parse(trig_element.Value.split(",") .slice(1).join(','))
      array_loader(obj);
     }
     else{
        ARRAY_CHOICE_HOLDER.innerHTML="";
     }
  }
}

function sorting_all(){
  const optionsHolder = document.getElementById('options_holder');
  const customElements = Array.from(optionsHolder.querySelectorAll('choose-custom-element'));

  customElements.sort((a, b) => {
    const valueA = a.getAttribute('header');
    const valueB = b.getAttribute('header');
    return valueA.localeCompare(valueB);
  });

  customElements.forEach(element => optionsHolder.appendChild(element));
}

CATEGORY.addEventListener("click",(event)=>{
  let clicked_id = event.target.id;
  let passing_id;
  if(clicked_id!="o_all" && clicked_id!="category"){
    passing_id = parseInt(clicked_id.replace(/\D/g, ''), 10)
   
    if(passing_id==6){
        if(valueAdder.set_trigger_element.getRootNode().host.getAttribute("extra")){
          CHECKBOX.checked=true;
        }
        else{
          CHECKBOX.checked=false;
        }
        CURRENT_YEAR.style.display="block";
    }
    else{
      CURRENT_YEAR.removeAttribute('style');
    }
  }
  else{
    if(clicked_id!="category"){
      passing_id = "all";
    }
  }
  OPTION_HOLDER.innerHTML="";
  ADDITIONAL_OPTION_HOLDER.style.display="none"
  category_loader(passing_id);
});


function search_data(content){
  display_none();
  for(let i=0;i<14;i++){
    if (i !== 11 && i !== 12) {
      for(let j=0;j<Object.keys(options_obj[i]).length;j++){
          if(options_obj[i][j].header.toLowerCase().includes(content) || options_obj[i][j].content.includes(content)){
              let id = i+"|"+j;
              document.getElementById(id).style.display="block";
          }
      }
    }
  };
};

function display_none(){
  for(let i=0;i<OPTION_HOLDER.children.length;i++){
     OPTION_HOLDER.childNodes[i].style.display="none";
  }
}
option_loader();