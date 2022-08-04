

function getName() {
  return document.querySelector("div.intro-title").lastChild.textContent;
}
function setName() {
  let a = getName();
  let b = "";
  for (let i = 0; i < a.length; i++) {
    b = b + a.charAt(2 + i);
  }
  return b;
}
function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}
function setDay(day){
  
  for (let i = 0; i < day.length; i++) {
    if (day.charAt(i) === " ") {
      day = day.replace(" ", "");
    }
  }
 
  if (day.includes("Today")) {
    day = day.replace(/Today/g, "");
  }
  
  for (let i = 0; i < daysInWeek.length; i++) {
    if (day.includes(daysInWeek[i])) {
      day = day.replace(daysInWeek[i], "");
    }
  }
  
  const monthof = new Date();
  var month = monthof.getMonth() + 1;
  var year = monthof.getFullYear();
  let counter = 2;
  if (month < 10) {
    for(let i = 0; i < length; i++){
      
      day = addStr(day, counter, ".0" + month + "." + year);
      counter = counter + 11;
      
      chrome.storage.local.set({ days: day });
      
    }
   
  } else if (month >= 10) {
    for (let i = 0; i < length; i++) {
      day = addStr(day, counter, "." + month + "." + year);
      counter = counter + 11;
      chrome.storage.local.set({ days: day });
    }
  }
}
let day = "";
let deskNo = "";
chrome.storage.local.set({ name: setName() });
const collectionOfDays = document.getElementsByClassName(
  "desk-bookings__desk ng-star-inserted"
);

alert("Please click again to enter your surname!");
var length = collectionOfDays.length;
chrome.storage.local.set({ length: length });
var daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getUser() {
  if (collectionOfDays.length === 1) {
    day=collectionOfDays[0].parentElement.firstChild.textContent;
    setDay(day)
    
    chrome.storage.local.set({
      deskno:
        collectionOfDays[0].firstChild.firstChild.firstChild.nextElementSibling
          .firstChild.nextElementSibling.textContent,
    });
  } else {
    for (let i = 0; i < collectionOfDays.length; i++) {
      if (i != collectionOfDays.length - 1) {
        day =
          day + collectionOfDays[i].parentElement.firstChild.textContent + ",";
        deskNo =
          deskNo +
          collectionOfDays[i].firstChild.firstChild.firstChild
            .nextElementSibling.firstChild.nextElementSibling.textContent +
          ",";
      } else {
        day = day + collectionOfDays[i].parentElement.firstChild.textContent;
        deskNo =
          deskNo +
          collectionOfDays[i].firstChild.firstChild.firstChild
            .nextElementSibling.firstChild.nextElementSibling.textContent;
      }
    }
    setDay(day);
    chrome.storage.local.set({ deskNos: deskNo });
  }
}

getUser();
