let txtInput = document.getElementById("inputValue");
let btnInput = document.getElementById("btnInput");
let list = document.getElementById("list");
let itemAddToList = [];
let currentItem = list.getElementsByTagName("li");
//addEvenListener here
btnInput.addEventListener("click", render);
list.addEventListener("click", doSomething);

//get current data by tag <li>
for(let i = 0; i< currentItem.length; i++)
    itemAddToList.push(currentItem[i].textContent);


//call function
render();

//add to list
function render() {
  let tempArray = [];
  let newItem = txtInput.value;
  if (newItem != "") 
    itemAddToList.push(newItem);
  tempArray = itemAddToList.map((x, index)  => {
    return `<li> ${x} <button data-attribute ="${index}">X</button></li> `;
  });
  txtInput.value = "";
  list.innerHTML = tempArray.join("");
}

function doSomething(event){
    let btnClose = event.target;
    let index = btnClose.dataset.attribute;
    if( index != undefined ){
        itemAddToList.splice(index, 1);
        render();
    }
     

}