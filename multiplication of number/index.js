function getmultiple() {
  let number = parseInt(prompt("Enter one positive number"));
  for (let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    let result = number * i;
    div.innerHTML = `${number} * ${i} = ${result}`;
    document.getElementById("output").appendChild(div);
  }
}
