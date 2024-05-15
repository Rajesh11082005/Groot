let generating_timer;
const SET_DATA = document.querySelector("."+REEL_DOM.class.set_data);
const GET_DATA = document.querySelector("."+REEL_DOM.class.get_data);
const JSON_OR_CSV = document.getElementById(REEL_DOM.id.json_or_csv);
const BITY = document.getElementById(REEL_DOM.id.bity);
const BEAUTIFIER = document.querySelector("."+REEL_DOM.class.beautifier);


function beautifyJSON(jsonString) {
  try {
    const jsonObj = JSON.stringify(JSON.parse(jsonString), null, 4);
    return jsonObj
  }
  catch (error) {
    return "Invalid JSON to parse";
  }
}

// function typeWriter(text, i, element) {
//   let line = '';
//   while (i < text.length && text[i] !== '\n') {
//       line += text[i];
//       i++;
//   }
//   element.textContent += line + '\n'; // Append line
//   if (i < text.length) {
//       setTimeout(function() {
//           typeWriter(text, i + 1, element); // Move to next character after line break
//       }, 50); // Adjust typing speed as needed
//   }
// }

function call_to_beautify(data) {
  let beautifiedJson = beautifyJSON(data);
  let viewerElement = document.getElementById("object_viewer1");
  // viewerElement.textContent = ''; // Clear previous content
  // typeWriter(beautifiedJson, 0, viewerElement);  
  viewerElement.textContent = beautifiedJson;
  
}


// call_to_beautify();
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomLetter() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return alphabet[rand(0, alphabet.length - 1)]
}
function getRandomWord(word) {
  var text = word.innerHTML

  var finalWord = ''
  for (var i = 0; i < text.length; i++) {
    finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
  }

  return finalWord
}

var word = document.getElementById("try");
var interv = 'undefined'
var canChange = false
var globalCount = 0
var cnt = 0
var INITIAL_WORD = word.innerHTML;
var isGoing = false

function init() {
  if (isGoing) return;

  isGoing = true
  var randomWord = getRandomWord(word)
  word.innerHTML = randomWord

  interv = setInterval(function () {
    var finalWord = ''
    for (var x = 0; x < INITIAL_WORD.length; x++) {
      if (x <= cnt && canChange) {
        finalWord += INITIAL_WORD[x]
      } else {
        finalWord += getRandomLetter()
      }
    }
    word.innerHTML = finalWord
    if (canChange) {
      cnt++
    }
    if (globalCount >= 20) {
      canChange = true
    }
    if (cnt >= INITIAL_WORD.length) {
      clearInterval(interv)
      cnt = 0
      canChange = false
      globalCount = 0
      isGoing = false
    }
    globalCount++
  }, 20)

}



// word.addEventListener('mouseenter', init)

// const generating_timer = setInterval(()=>{
//   init();
// },1000);

function gene_time_call(){
  let c =0 ;
  setTimeout(()=>{
    init();
    c++
  },10);
  
    generating_timer = setInterval(()=>{
      init();
    },1000);
  
 
}

function gene_time_stop(){
  clearInterval(generating_timer);
}


function convertJSONToCSV(jsonData) {
  const flattenObject = (obj, parentKey = '') => {
      return Object.keys(obj).reduce((acc, key) => {
          const prefixedKey = parentKey ? `${parentKey}.${key}` : key;
          if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
              Object.assign(acc, flattenObject(obj[key], prefixedKey));
          } else if (Array.isArray(obj[key])) {
              acc[prefixedKey] = obj[key].join(';'); // You can use any delimiter here
          } else {
              acc[prefixedKey] = obj[key];
          }
          return acc;
      }, {});
  };

  const flattenData = jsonData.map(obj => flattenObject(obj));

  const headers = Array.from(new Set(flattenData.flatMap(obj => Object.keys(obj))));

  let csvContent = '';

  // Generate CSV content with equal spacing
  csvContent += headers.map(header => header.padEnd(15)).join(' | ') + '\n';

  flattenData.forEach(obj => {
      const values = headers.map(header => {
          let value = obj[header] !== undefined ? obj[header] : '';
          if (typeof value === 'string') {
              value = `"${value}"`;
          }
          return value.toString().padEnd(15); // Pad each value with spaces to make them of equal length
      });
      csvContent += values.join(' | ') + '\n';
  });

  return csvContent;
}

GET_DATA.addEventListener("input",()=>{
  if(GET_DATA.value.length>1){
    BITY.click();
  }
  else{
    SET_DATA.value = "";
  }
});

JSON_OR_CSV.addEventListener("input",()=>{
    if(GET_DATA.value){
      BITY.click();
    }
})

BITY.addEventListener("click",()=>{
  let v = JSON_OR_CSV.value;
  if(GET_DATA.value){
    if(v==0){
      let a = beautifyJSON(GET_DATA.value);
      SET_DATA.value = a;
    }
    else{
      let a = JSON.parse(GET_DATA.value);
      let arr = [];

      for(let i=0;i<Object.keys(a).length;i++){
        arr.push(a[i]);
      }
      
      let returned_val = convertJSONToCSV(arr);
      SET_DATA.value = returned_val;
    }
  }
  else{
    notify("No<span>JSON</span>specified to Beautify . . . ")
  }
})