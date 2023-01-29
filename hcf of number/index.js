function gethcf() {
  let hcf;
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let output = document.getElementById("output");
  for (let count = 1; count < num1 && num2; count++) {
    if (num1 % count == 0 && num2 % count == 0) {
      hcf = `${count}`;
    }
    console.log(`the hcf of ${num1} and ${num2} is ${hcf}`);
  }

  let div = document.createElement("div");
  div.innerHTML = `the hcf of ${num1} and ${num2} is ${hcf}`;
  output.appendChild(div);
}
