function factorial() {
  let fact = 1;
  let input = document.getElementById("input").value;
  for (let i = input; i >= 1; i--) {
    fact = fact * i;
  }
  let div = document.createElement("div");
  div.innerHTML = `${fact}`;
  let output = document.getElementById("output").appendChild(div);
}
