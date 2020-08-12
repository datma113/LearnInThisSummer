// declare variable
let btn = document.getElementById("btn");
let textDoc = document.getElementById("loadDoc");
let btnAdd = document.getElementById("btnAdd");
let table = document.getElementById("table");
let test = document.getElementById("check");
let countFileJSON = 1;
// addEventListener
btn.addEventListener("click", loadDocument);
btnAdd.addEventListener("click", loadJSON);
//load file
function loadDocument(){
  
    let request = new XMLHttpRequest();
    let url =`http://127.0.0.1:5500/myJSON_${countFileJSON}.JSON`;
    request.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200 ){
            textDoc.innerHTML =  this.responseText;
        }
    };  
    request.open("GET",url, true);
    request.send();
}

function loadJSON(){
    if( countFileJSON < 4 ){
        if( countFileJSON == 3 ) {
            btnAdd.disabled = true;
            btnAdd.setAttribute("class","btn btn-danger");
            console.log("failed");
        }
        let request = new XMLHttpRequest();
        let textRes = "";
        let url = `http://127.0.0.1:5500/myJSON_${countFileJSON}.JSON`;
        request.open("GET", url, true);
        request.send();
        request.onreadystatechange = function(){
            if( this.readyState === 4 && this.status === 200 ){     
                renderHTML(this.responseText);
                countFileJSON++;
            }
        }
    } 
   
  
}
// render html
function renderHTML(doc){
    let dataFromAJAX = Array.from(JSON.parse(doc));
  
    for(let i in dataFromAJAX){
        table.innerHTML +=` <tr class="text-center">
        <td>${dataFromAJAX[i].name}</td>
        <td>${dataFromAJAX[i].age}</td>
        <td>${dataFromAJAX[i].faculty}</td>
        <td>${dataFromAJAX[i].field}</td>
        <td>${dataFromAJAX[i].class}</td>   
        <td>${dataFromAJAX[i].graduated ? `tot nghiep` : `chua tot nghiep`}</td>
        </tr>
        `
     
    }
 
   
}

