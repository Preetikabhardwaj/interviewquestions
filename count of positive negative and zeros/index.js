function countofnpz() {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let output = document.getElementById("output");
  let number = [12, 15, 0, 98, 57, -2, -11, -21, 0, -29];
  let div = document.createElement("div");
  div.innerHTML = `${number}`;
  output.appendChild(div);
  console.log(number);
  for (let i = 0; i <= number; i++) {
    if (i < 0) {
      let div = document.createElement("div");
      negative = negative + i;
      div.innerHTML = `${negative} is negative number`;
      output.appendChild(div);
      console.log(negative);
    }
  }
}
