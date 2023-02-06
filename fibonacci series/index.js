function fibonacciseries() {
  let number = [1, 2, 3, 4, 5];
  let input = (document.getElementById("input").innerHTML = number);
  let output = document.getElementById("output");
  for (let i = 0; i > number; i++) {
    let div = document.createElement("div");
    div.innerHTML = `${i} + ${i++}`;
    output.appendChild(div);
  }
}
