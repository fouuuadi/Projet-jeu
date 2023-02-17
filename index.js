let table = ["carle","bastien","seb","sam"];
fetch(table)
.then(reponse => reponse.json())
.then(data =>{
console.log(data)
})

