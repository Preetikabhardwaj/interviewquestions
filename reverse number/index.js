function revresenum() {
  let input = prompt(parseInt("please enter any number"));
  for (let i = 1; input >= 1; input--) {
    // console.log(input);
    let div = document.createElement("div");
    div.innerHTML = `${input}`;
    let output = document.getElementById("output").appendChild(div);
  }
}
