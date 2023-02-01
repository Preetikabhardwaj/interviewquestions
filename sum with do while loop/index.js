function sum() {
  var sum;
  let i = 0;
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let output = document.getElementById("output");
  let newdiv = (document.getElementById("newdiv").style.display = "block");

  do {
    sum = num1 + num2;
    i++;
    let div = document.createElement("div");
    div.innerHTML = `${sum}`;
    output.appendChild(div);
  } while (i < 1);
}
function repeatsum() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("newdiv").style.display = "none";
  document.getElementById("output").removeChild(output.firstElementChild);
}
function dontrepeat() {
  document.getElementById("newdiv").style.display = "none";
}
