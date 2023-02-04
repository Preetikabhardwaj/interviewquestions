function getnumbers() {
  let number = [3, 11, 22, 34, 65, 88, 92];
  let large = number[0];
  let small = number[0];
  let input = (document.getElementById("input").innerText = `${number}`);
  for (let i = 0; i < number.length; i++) {
    if (number[i] > large) {
      large = number[i];
      let div = document.createElement("div");
      div.innerHTML = `${large} is largest number`;
      document.getElementById("output").appendChild(div);
    } else {
      small = number[i];
      let div = document.createElement("div");
      div.innerHTML = `${small} is smallest number`;
      document.getElementById("output").appendChild(div);
    }
  }
}
