var number = [];
function getnumbers() {
  let input = parseInt(document.getElementById("input").value);
  number.push(input);
  document.getElementById("input").value = "";
}
function smallandlargenumber() {
  let output = document.getElementById("output");
  let largenumber = number[0];
  let smallnumber = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] > largenumber) {
      largenumber = number[i];
    } else if (number[i] < smallnumber) {
      smallnumber = number[i];
    }
  }
  let div = document.createElement("div");
  div.innerHTML = ` entered numbers are ${number}smallest number is ${smallnumber}  and largest number is ${largenumber} `;
  output.appendChild(div);
}
