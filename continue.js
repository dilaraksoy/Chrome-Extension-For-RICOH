
document.addEventListener('DOMContentLoaded', function (){
var length=""
var day=""
var deskNo=""
var name=""
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
  };
  var obj={};
  async function getData() {
    length = await readLocalStorage('length');
    name= await readLocalStorage('name');
    
    surname=await readLocalStorage('surname');
    
    if(length===1){
        day=await readLocalStorage('day');
        deskNo=await readLocalStorage('deskNo');
      
    }
    else
        day=await readLocalStorage('days');
        
        deskNo=await readLocalStorage('deskNos');
        
       
        obj.name=name;
        obj.surname=surname;
        obj.day=day;
        obj.deskNo=deskNo;
        
}

  getData();
  
  
    var element=document.getElementById("button");
    
    element.addEventListener('click',function(e){
      e.preventDefault();

    const req=new XMLHttpRequest();
    const baseUrl="http://localhost:3000/user";
    const data=obj
    req.open("POST",baseUrl,true);
    req.setRequestHeader("Content-type","application/json");
    req.send(JSON.stringify(obj));
    
    
    
    })
    
    
  })
  









