function validate(){
  var valEle = document.body.querySelector(".valMess");
  var username =document.body.querySelector(".username").value;
  var password =document.body.querySelector(".password").value;
  if(username=="cool" && password=="password"){
    
  var nav = document.body.querySelector(".nav");
  var display =document.body.querySelector(".display");
  var ele = document.createElement("div");
  valEle.innerHTML=""

var pages = [
  {
    title:"Grade View",
    content:"Grades"
  },
  {
    title:"Add Grade",
    content:"Submit Grade"
  },
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
  writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg=="Grade View"){
    writePage3();
  }else{
    writePage();
  }
}
  
function writePage(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  var Counter = document.createElement("div");
  heading.innerHTML="Submit Grade";
  display.appendChild(heading);
  display.appendChild(Counter);
  for (let el of document.querySelectorAll('.username')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.password')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.validate')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.submit')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.itemText')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.number')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.list')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.itmMess')) el.style.visibility = 'visible';
}
  
function writePage3(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  heading.innerHTML="Grades";
  display.appendChild(heading);
  for (let el of document.querySelectorAll('.username')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.password')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.validate')) el.style.visibility = 'hidden';  
  for (let el of document.querySelectorAll('.submit')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.itemText')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.number')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.list')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.itmMess')) el.style.visibility = 'hidden';
} 
 
    
var list = [];
 var listN =[];
    
function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML=("Name: "+list[i] +" | "+ "Grade: "+listN[i])
    listEle.appendChild(element);
    writeStuff(pages[0].content, "Grade View");
  }
}

function submit(){
  var text =document.body.querySelector(".itemText").value;
   var numb =document.body.querySelector(".number").value;
 if ((text.length>0 && numb.length>0) && (numb<=100 && numb>=0)){
    listN.push(numb);
    list.push(text);
    document.body.querySelector(".itmMess").innerHTML=""
    renderList()
}else{
  document.body.querySelector(".itmMess").innerHTML="Not enough Characters/Numbers or grade is not (1-100)"
}
  
}

document.body.querySelector(".submit").addEventListener("click", function(){ submit();
})

writeStuff(pages[0].content, "Grade View");
    
  
  
  
  }else if (username!="cool" && password!="password"){
    valEle.innerHTML="Username & Password Incorrect"
  }else if (password!="password"){
    valEle.innerHTML="Password Incorrect"
  }else{
    valEle.innerHTML="Username Incorrect"
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){ validate();
})