async function myapi(){
    var apiData=fetch('https://fakestoreapi.com/products')
    var data=await(await apiData).json()
    console.log(data)
}
myapi()