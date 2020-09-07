const metric = document.querySelector("#metric");
const standard = document.querySelector("#standard");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const info = document.querySelector("#displayinfo");
const reset = document.querySelector("#rest");
const cal = document.querySelector("#cal");
const shResult = document.querySelector(" h4");


function standardPholder(){
  weight.setAttribute("placeholder", "ibs");
  height.setAttribute("placeholder", "in");
  info.innerHTML = "input weight in pounds(ibs) and Height in inches(in). "

}

function metricPholder(){
    weight.setAttribute("placeholder", "kg");
  height.setAttribute("placeholder", "m");
  info.innerHTML = "input weight in kilogram(kg) and Height in meters(m).  "
}
//reset function
function resetFun(){
  weight.setAttribute("placeholder", "");
  height.setAttribute("placeholder", "");
  info.innerHTML ="";
  standard.checked = false;
  metric.checked = false;
  Result.innerHTML = "";
  shResult.innerHTML = "";
  weigh.value = "";
  height.setAttribute("value"," ");
}
function calFun(event){
  
      if (standard.checked==true){
        
        let wValue= weight.value;
        let hValue = height.value;

        let result = (703*wValue)/(hValue**2);
        shResult.innerHTML = result +" Kg/m<sup>2</sup";
        
        }

    else if (metric.checked==true) {
        
        let wValue= weight.value;
        let hValue = height.value;

        let result = (wValue)/(hValue**2);
        shResult.innerHTML = result +" Kg/m<sup>2</sup" ;
    }

    else {
        alert("Select measurement unit")
    } 
    
}



standard.addEventListener("click", standardPholder);
metric.addEventListener("click", metricPholder);
reset.addEventListener("click", resetFun);
cal.addEventListener("click", function(e){ calFun(); e.preventDefault()});
