function verMas(id){
    let div = document.getElementById(id);
 if(div.style.display == "none"){
    div.style.display = "grid";
 }else{
    div.style.display = "none";
 }
}