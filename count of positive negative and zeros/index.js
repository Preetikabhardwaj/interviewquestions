number = [];
function getnumber() {
  let input = parseInt(document.getElementById("input").value);
  number.push(input);
  document.getElementById("input").value = "";
}
function getcount() {
  let output = document.getElementById("output");
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      positive++;
    } else if (number[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  let div = document.createElement("div");
  div.innerHTML = `total numbers are ${number} out of which are ${positive} positive, nd   ${negative}  are negative and  ${zero} are zeros`;
  output.appendChild(div);
}
