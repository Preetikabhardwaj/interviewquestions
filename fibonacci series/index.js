function fibonacciseries() {
  let sum;
  let number = [1, 2, 3, 4, 5];
  let input = (document.getElementById("input").innerHTML = number);
  let output = document.getElementById("output");
  for (let i = 0; i > number; i++) {
    sum = `${number[0]} ${number[1]}`;
    let div = document.createElement("div");
    div.innerHTML = sum;
    console.log(sum);
    output.appendChild(div);
  }
}
