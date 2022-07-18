function getName(){
    return document.querySelector('div.intro-title').lastChild.textContent
}
function getTable(){
    return document.querySelector('section.main-content').firstChild.nextElementSibling.textContent
}
function setName(){
    let a=getName();
    let b='';
    for(let i=0;i<a.length;i++){
        b=b+a.charAt(2+i);
    }
    return b;
}
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
alert(setName());
alert(getTable());
alert(day+' '+d.getDate());