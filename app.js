'use strict';
let tableEL = document.getElementById('table')
let submit = document.getElementById('submit')
let form = document.getElementById("form");


var allFood=[];
function Food(id,name,type,price){
    this.id=id;
    this.name=name;
    this.type=type;
    this.price=price

    allFood.push(this);
}



Food.prototype.render = function (arrayData) {
  
  
  let newRow=document.createElement('tr');
  tableEL.appendChild(newRow);

  let newId=document.createElement('td');
  newRow.appendChild(newId);
  newId.textContent=this.id;

  let newName=document.createElement('td');
  newRow.appendChild(newName);
  newName.textContent=this.name;

  let newType=document.createElement('td');
  newRow.appendChild(newType);
  newType.textContent=this.type;

  let newPrice=document.createElement('td');
  newRow.appendChild(newPrice);
  newPrice.textContent=this.price;

   
  }


// for(var i=0;i<allFood.length;i++){
//     Food[i].render();
// }

function Id(){
var val = Math.floor(1000 + Math.random() * 9000);
return val ;}

// let form = document.getElementById("form");
form.addEventListener("submit",handlesubmit);
function handlesubmit(event){
    event.preventDefault();
    var newFname=event.target.foodname.value;
    var foodList=event.target.foodTypes.value;
    var newPrice=event.target.price.value;

    console.log(newFname,foodList,newPrice);

     let newFood= new Food(Id(),newFname,foodList,newPrice);
     newFood.render();
    saveData(allFood);
     
}


function saveData(data) {
  let stringObj = JSON.stringify(data);
  localStorage.setItem('foods', stringObj);
}
// let arrayNew=[];
// getData();
function getData() {
  let retrievedData = localStorage.getItem('foods');
  

  let arrayData = JSON.parse(retrievedData);

  // console.log(arrayData);
  
  if (arrayData != null) {
    
    for (let i = 0; i < arrayData.length; i++) {
      new Food(
        arrayData[i].id,
        arrayData[i].name,
        arrayData[i].type,
        arrayData[i].price,
       
      );
      // arrayNew.push(arrayData);
    }}

   
    for(var j=0;j<allFood.length;j++){
      allFood[i].render()
      
    }
  }
  
getData();


