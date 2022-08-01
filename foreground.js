/*
function getTable(){
    return document.querySelector('section.main-content').firstChild.nextElementSibling.textContent
}

*/

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

let day = "";
let deskNo = "";
chrome.storage.local.set({ name: setName() });
const collectionOfDays = document.getElementsByClassName(
  "desk-bookings__desk ng-star-inserted"
);
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
    chrome.storage.local.set({
      day: collectionOfDays[0].parentElement.firstChild.textContent,
    });
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
    if (month < 10) {
      day = addStr(day, 2, ".0" + month + "." + year);
      day = addStr(day, 14, ".0" + month + "." + year);
    } else if (month >= 10) {
      for (let i = 0; i < length; i++) {
        var counter = 2;
        day = addStr(day, counter, "." + month + "." + year);
        counter = counter + 12;
      }
    }
    chrome.storage.local.set({ days: day });
    chrome.storage.local.set({ deskNos: deskNo });
  }
}

getUser();
