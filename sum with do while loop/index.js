function sum() {
  var sum;
  let i = 0;

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let newdiv = (document.getElementById("newdiv").style.display = "block");
  do {
    sum = num1 + num2;
    i++;
    let div = document.createElement("div");
    div.innerHTML = `${sum}`;
    let output = document.getElementById("output").appendChild(div);
  } while (i < 1);
}
function repeatsum() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  num1.value = "";
  num2.value = "";
  document.getElementById("newdiv").style.display = "none";
  document.getElementById("output").removeChild(output.firstElementChild);
}
function dontrepeat(){
   document.getElementById("newdiv").style.display = "none";

}
