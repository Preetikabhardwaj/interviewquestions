function getfibbonacci() {
  let temp;
  let firstnumber = 0;
  let secondnumber = 1;
  let numbers = [];
  numbers.push(firstnumber);
  numbers.push(secondnumber);
  let input1 = parseInt(document.getElementById("input1").value);
  for (let i = 2; i <= input1; i++) {
    temp = firstnumber + secondnumber;
    numbers.push(temp);
    firstnumber = secondnumber;
    secondnumber = temp;
  }
  let div = document.createElement("div");
  div.innerHTML = numbers;
  let output = document.getElementById("output").appendChild(div);
}

