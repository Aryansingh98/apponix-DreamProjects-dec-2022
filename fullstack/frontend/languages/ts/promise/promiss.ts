var sarnyasPromiss=new Promise((resol:Function,notresol:Function)=>{
 //resol('promiss fullfilled')
 notresol('not resolved')
})
sarnyasPromiss.then((a)=>{console.log(a)})
sarnyasPromiss.catch((a)=>{console.log(a)})
console.log(sarnyasPromiss)