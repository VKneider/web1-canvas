
//PREDETERMINADO
document.addEventListener("DOMContentLoaded", firstGraph);


//ELEMENTOS HTML
let btn =  document.getElementById("btn");
let c = document.getElementById("myCanva");
let ctx = c.getContext("2d");
let inRange = document.getElementById("inRange");
let valRange = document.getElementById("valRange");
let valColor = document.getElementById("valColor");
let delTable = document.getElementById("delTable");
let valWidth = document.getElementById("inWidth");
let valLine = document.getElementById("valLine");
let fn = document.getElementById("function");

//PROPIEDADES CANVAS
let size;
size=500;
c.width = 500;
c.height = 500;
valRange.innerHTML=inRange.value;
let line;

let lastSize;

//EVENTOS
btn.addEventListener("click", changeSize);

inRange.addEventListener('change', function(){
    this.setAttribute('value', this.value)
    size=inRange.value;
    valRange.value=this.value;
    valRange.innerHTML=inRange.value;


})

valWidth.addEventListener('change', function(){

    this.setAttribute('value', this.value)
    line=valWidth.value;
    valLine.value=this.value;
    valLine.innerHTML=valWidth.value;

})


delTable.addEventListener('click', function(){

    ctx.clearRect(0, 0, size, size);
    secGraph();


})



//FUNCIONES

function graphFn() {
    
if(fn.value==''){alert('Debes Ingresar una función para poder realizar la gráfica')}  
  let idx = fn.value.indexOf("=");
  let str = fn.value.slice(idx + 1);
  let x=-size/2;
  let res;
  let salto=0.3;
  ctx.beginPath();
  ctx.strokeStyle=valColor.value;
  ctx.lineWidth = line;


  for (; x < size; x+=salto) {
    res=eval(str);

    if(res==Infinity){
      x+=salto;
      ctx.moveTo(x+size/2, (size/2-eval(str)))
    } else {

      ctx.lineTo(x+size/2, (size/2-res));
      ctx.stroke();

    }
      }       
    
    ctx.closePath();

    lastSize=size;
}




function firstGraph() {

  ctx.beginPath();
  ctx.lineWidth = 1;

  ctx.moveTo(250, 0);
  ctx.lineTo(250, 501);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineTo(501, 250);
  ctx.stroke();
  ctx.closePath();

}


function changeSize(){

if(lastSize==size){

  graphFn()

} else {

  c.width = size;
  c.height = size;
  secGraph()
  graphFn()

}

}


function secGraph() {
  
    ctx.strokeStyle="#000000"
    ctx.beginPath();
    ctx.lineWidth = 1;
  
    ctx.moveTo(size/2, 0);
    ctx.lineTo(size/2, size+1);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(0, size/2);
    ctx.lineTo(size+1, size/2);
    ctx.stroke();
    ctx.closePath();
  
  
  }
