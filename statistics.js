'use strict' ;

let tableEL = document.getElementById('table')
// let submit = document.getElementById('submit')
// let form = document.getElementById('form')





function render(){
   
    let data=getData();
    for (let i =0;i<data.length;i++){
        
        let newRow=document.createElement('tr');
        tableEL.appendChild(newRow);
    
        let newId=document.createElement('td');
        newRow.appendChild(newId);
        newId.textContent=data[i].id;

       let newName=document.createElement('td');
       newRow.appendChild(newName);
       newName.textContent=data[i].name;
       

      let newType=document.createElement('td');
      newRow.appendChild(newType);
      newType.textContent=data[i].type;
      

      let newPrice=document.createElement('td');
      newRow.appendChild(newPrice);
      newPrice.textContent=data[i].price;
      
    }
}

// form.addEventListener("submit",handlesubmit);
// function handlesubmit(event){
//     event.preventDefault();
//     var newFname=event.target.foodname.value;
//     var foodList=event.target.foodTypes.value;
//     var newPrice=event.target.price.value;

//     console.log(newFname,foodList,newPrice);

//      let newFood= new Food(Id(),newFname,foodList,newPrice);
//     //  newFood.render();
//     render(newFood)
//     saveData(allFood);
     
// }

// function saveData(data) {
//     let stringObj = JSON.stringify(data);
//     localStorage.setItem('foods', stringObj);}

function getData() {
    let retrievedData = localStorage.getItem('foods');
    // console.log(retrievedData)
    let arrayData = JSON.parse(retrievedData);
    
   
    // }
    // return arrayData

    // for (let i=0 ; i<arrayData.length;i++){
    //     arrayData[i]
    // }
    
    return arrayData
}

getData();
render();

