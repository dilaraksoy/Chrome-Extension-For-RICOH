document.addEventListener("DOMContentLoaded", function (e) {
  var element = document.getElementById("button");
  
  element.addEventListener("click", function () {
    var surname = document.getElementById("surname").value;
    var length = "";
    var day = "";
    var deskNo = "";
    var name = "";
    async function readLocalStorage(key) {
      return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], function (result) {
          if (result[key] === undefined) {
            reject();
          } else {
            resolve(result[key]);
          }
        });
      });
    }
    var obj = {};
    var days = [];
    var desks = [];
    async function getData() {
      length = await readLocalStorage("length");
      
      name = await readLocalStorage("name");
      if(length===0){
        alert("There is no bookings")
        chrome.runtime.reload()
      }
      if (length === 1) {
        day = await readLocalStorage("days");
        deskNo = await readLocalStorage("deskno");
        
          obj.Name = name;
          obj.Surname = surname;
          obj.Day = day;
          obj.DeskNo = deskNo;
          console.log(JSON.stringify(obj));
          e.preventDefault();
  
          const req = new XMLHttpRequest();
          const baseUrl = "http://localhost:3000/user";
          const data = obj;
          req.open("POST", baseUrl, true);
          req.setRequestHeader("Content-type", "application/json");
          req.send(JSON.stringify(obj));
          chrome.runtime.reload()
        
      } else day = await readLocalStorage("days");
      var newDay = "";
      var newDesk = "";

      deskNo = await readLocalStorage("deskNos");
      for (let i = 0; i < day.length; i++) {
        if (day.charAt(i) === ",") {
          days.push(newDay);
          newDay = "";
          i = i + 1;
        }
        if (i === day.length - 1) {
          newDay = newDay + day.charAt(i);
          days.push(newDay);
        }
        newDay = newDay + day.charAt(i);
      }
      for (let i = 0; i < deskNo.length; i++) {
        if (deskNo.charAt(i) === ",") {
          desks.push(newDesk);
          newDesk = "";
          i = i + 1;
        }
        if (i === deskNo.length - 1) {
          newDesk = newDesk + deskNo.charAt(i);
          desks.push(newDesk);
        }
        newDesk = newDesk + deskNo.charAt(i);
      }

      for (let f = 0; f < days.length; f++) {
        obj.Name = name;
        obj.Surname = surname;
        obj.Day = days[f];
        obj.DeskNo = desks[f];
        console.log(JSON.stringify(obj));
        e.preventDefault();

        const req = new XMLHttpRequest();
        const baseUrl = "http://localhost:3000/user";
        const data = obj;
        req.open("POST", baseUrl, true);
        req.setRequestHeader("Content-type", "application/json");
        req.send(JSON.stringify(obj));
        chrome.runtime.reload()
      }
    }

    getData();
    
  });
  
});
