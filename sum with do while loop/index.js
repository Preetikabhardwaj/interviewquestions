function sum() {
  let sum;
  let i = 0;
  let output = document.getElementById("output");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  do {
    sum = num1 + num2;
    i++;
    let div = document.createElement("div");
    div.innerHTML = `${sum}`;
    output.appendChild(div);
  } while (i <= num1 && num2);
}
