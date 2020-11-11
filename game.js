function display(values) {
  document.getElementById("result").value += values;
}
function remove(){
   var delet = document.getElementById("result").value;
   console.log(typeof delet);
  document.getElementById("result").value = delet.substring(0, delet.length - 1);
}
function cleardsiplay() {
  document.getElementById("result").value = "";
}

function equal(){
  var reslt = document.getElementById("result").value;
   
    var x = eval(reslt)
   
   document.getElementById("result").value = x;

}



