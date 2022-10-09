const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope","anna","Anan"];
 

function searchName(subString, limit, callback){
    let newName =   name.filter( string => string.toLowerCase().includes(subString.toLowerCase()))
                    .filter((string,index) => index < limit); 
    callback(newName);
}

searchName("an",3, data => {
    console.log(data);
})