
document.addEventListener('click', firstGraph)




function firstGraph(){

    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    console.log(ctx)

    ctx.beginPath()
    ctx.lineTo(500,300)
    ctx.stroke()
    ctx.closePath();



}




// arr der abajo izq

/*
for(let i=0;i<10;i++){

    let str=""
    let x1 = str.slice(2)
    let x2= x1.replace(/x/gi, `1*${i}`)
    
    console.log(`f(${i})= ${eval(x2)}`)
}
*/