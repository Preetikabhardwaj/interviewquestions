function countofnpz() {
  let input = parseInt(document.getElementById("input").value);
  let output = document.getElementById("output");
  let i;
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  for (i = 1; i <= input; i++) {
    let div = document.createElement("div");
    div.innerHTML = `${i}`;
    output.appendChild(div);
    console.log(i);
  }
  if (input < 0) {
    negative = negative + input;
    let div = document.createElement("div");
    div.innerHTML = `${negative} is negative number`;
    output.appendChild(div);
  } else if (input <= 0) {
    zeros = zeros + input;
    let div = document.createElement("div");
    div.innerHTML = `${zeros} is  zero`;
    output.appendChild(div);
  } else {
    positive = positive + input;
    let div = document.createElement("div");
    div.innerHTML = ` ${input} is positive ${positive} is  positive`;
    output.appendChild(div);
  }
}
