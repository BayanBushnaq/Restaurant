
let tableEL = document.getElementById('table')
let submit = document.getElementById('submit')
var allFood=[];
function Food(id,name,type,price){
    this.id=id;
    this.name=name;
    this.type=type;
    this.price=price

    allFood.push(this);
}



Food.prototype.render = function () {
  
  
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


for(var i=0;i<allFood.length;i++){
    Food[i].render();
}

function Id(){
var val = Math.floor(1000 + Math.random() * 9000);
return val ;}

let form = document.getElementById("form");
form.addEventListener("submit",handlesubmit);
function handlesubmit(event){
    event.preventDefault();
    var newFname=event.target.foodname.value;
    var foodList=event.target.foodTypes.value;
    var newPrice=event.target.price.value;

    console.log(newFname,foodList,newPrice);

     const newFood= new Food(Id(),newFname,foodList,newPrice);
     newFood.render();
    

}



