function finalbil(...a){
   var sum=a.reduce((a,b)=>{return a+b},0)
   console.log(sum)
}
var lazyperson=setTimeout(()=>{return 1000},2000)
finalbil(100,200,300,400,500,lazyperson)