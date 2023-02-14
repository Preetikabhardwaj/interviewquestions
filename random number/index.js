function findnumber() {
  let number = 5;
  let input = parseInt(document.getElementById("input").value);
  let output = document.getElementById("output");
  for (let i = 0; i < 1; i++) {
    if (input > number) {
      let div = document.createElement("div");
      div.innerHTML = "your number is so high please try again";
      document.getElementById("input").value = "";
      output.appendChild(div);
    } else if (input < number) {
      let div = document.createElement("div");
      div.innerHTML = " your number is too small please try again";
      output.appendChild(div);
    } else {
      let div = document.createElement("div");
      div.innerHTML = " your guess is absolutely right";
      output.appendChild(div);
    }
  }
}
