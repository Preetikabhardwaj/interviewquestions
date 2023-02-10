function getarmstrongnumber() {
  let input = parseInt(document.getElementById("input").value);
  let output = document.getElementById("output");
  for (let i = input; i <= 500; i++) {
    let div = document.createElement("div");
    if (i * i * i == i) {
      div.innerHTML = `${i} is an armstrong number`;
      output.appendChild(div);
    } else {
      let div = document.createElement("div");
      div.innerHTML = `${i}`;
      output.appendChild(div);
    }
  }
}
G