function getfibbonacci() {
  let temp;
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  for (let i = 0; i <= 10; i++) {
    temp = input1 + input2;
    input1 = input2;
    input2 = temp;
  }
  let div = document.createElement("div");
  div.innerHTML = parseInt(`${temp}`);
  let output = document.getElementById("output").appendChild(div);
}
// var a = 0;
// var b = 1;
// for (let i = 0; i <= 10; i++) {
// var temp = a + b;
//   a = b;
//   b = temp;

//   console.log(temp);
// }
