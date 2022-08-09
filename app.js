
const body = document.getElementById('body')
const foodName=[];
function food(fooId,foodName,type,price){
    this.fooId=fooId;
    this.foodName=foodName;
    this.type=type;
    this.price=price

    foodName.push(this);
}



food.prototype.render = function () {
    
  const divEl=document.createElement('div');
  body.appendchild(divEl);

  const tableEl=document.createElement('table');
  divEl.appendchild(tableEl);

  const tr1El=document.createElement('tr');
  tableEl.appendChild(tr1El);

  const ID=document.createElement('th');
  tr1El.appendChild(ID);
  const Name=document.createElement('th');
  tr1El.appendChild(Name);
  const Type=document.createElement('th');
  tr1El.appendChild(Type);
  const PriceJD=document.createElement('th');
  tr1El.appendChild(PriceJD);

  
  for(const i = 0 ;i>foodName.length;i++){
    const tr=document.createElement('tr');
    tableEl.appendChild('tr');
    for(const j=0;j<4;j++){
        const td1=document.createElement('td')
        tr2.appendChild(td1)
        td.textContent=this.fooId;

        const td2=document.createElement('td')
        tr2.appendChild(td2)
        td.textContent=this.foodName;

        const td3=document.createElement('td')
        tr2.appendChild(td3)
        td.textContent=this.type;

        const td4=document.createElement('td')
        tr2.appendChild(td4)
        td.textContent=this.price;
    }
   
   
  }

  


}

for(var i=0;i<foodName.length;i++){
    foodName[i].render();
}

function Id(){
var val = Math.floor(1000 + Math.random() * 9000);
return val ;}

let form = document.getElementById("form");
form.addEventListener("submit",handlesubmit);
function handlesubmit(event){
    event.preventDefault();
    var Fname=event.target.foodname.value;
    var foodList=event.target.foodTypes.value;
    var Price=event.target.price.value;

    console.log(Fname,foodList,Price);

     const newFood= new food(Id(),Fname,foodList,Price);
    //  newFood.render();
    

}



