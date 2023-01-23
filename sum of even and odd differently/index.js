function evenodd() {
  let input = document.getElementById("input").value;
  let evensum = 0;
  let oddsum = 0;
  for (let i = 1; i <= input; i++) {
    if (i % 2 == 0) {
      evensum += i;
    } else {
      oddsum += i;
    }
  }
  let div = document.createElement("div");
  div.innerHTML = `sum of even number is ${evensum} and sum of odd number id ${oddsum}`;
  let output = document.getElementById("output").appendChild(div);
}
