function getarmstrongnumber() {
  let arr = [];
  let digit1;
  let digit2;
  let digit3;

  for (let number = 1; number <= 500; number++) {
    let digit = number;
    digit1 = digit % 10;
    digit = parseInt(digit / 10);
    digit2 = digit % 10;
    digit = parseInt(digit / 10);
    digit3 = digit % 10;
    if (
      digit1 * digit1 * digit1 +
        digit2 * digit2 * digit2 +
        digit3 * digit3 * digit3 ==
      number
    ) {
      arr.push(number);
      console.log(arr);
    }
  }
  let div = document.createElement("div");
  div.innerHTML = ` armstrong numbers are ${arr}`;
  let output = document.getElementById("output").appendChild(div);
}
