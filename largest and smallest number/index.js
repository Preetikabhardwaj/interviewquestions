function getnumbers() {
  let input = parseInt(document.getElementById("input").value);
  let input2 = parseInt(document.getElementById("input2").value);
  let output = document.getElementById("output");
  for (let i = input; i <= input2; i++) {
    let div = document.createElement("div");
    div.innerHTML = `${i} `;
    output.appendChild(div);
  }
  let div = document.createElement("div");
  div.innerHTML = `${input} is smallest number ${input2} is largest number`;
  output.appendChild(div);
}
