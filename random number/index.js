function findnumber() {
  let tries = 0;
  let input = parseInt(document.getElementById("input").value);
  let output = document.getElementById("output");
  let number = Math.floor(Math.random() * 2);
  console.log(number);

  for (let i = 0; i < 1; i++) {
    if (input > number) {
      let div = document.createElement("div");
      div.innerHTML = "oops too  high please try again";

      output.appendChild(div);
      document.getElementById("input").value = "";
    } else if (input < number) {
      let div = document.createElement("div");
      div.innerHTML = " oops too low please try again";
      output.appendChild(div);
      document.getElementById("input").value = "";
    } else {
      let div = document.createElement("div");
      div.innerHTML = " your guess is absolutely right";
      output.appendChild(div);
      document.getElementById("input").value = "";
    }
  }
}
