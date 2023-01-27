function primenumber() {
  let count = 0;
  let input = parseInt(prompt("please enter an integer value"));
  if (input < 2) {
    let div = document.createElement("div");
    div.innerHTML = `  ${input} is not a prime number`;
    let output = document.getElementById("output").appendChild(div);
  } else {
    for (let i = 2; i <= input; i++) {
      if (input % i == 0) {
        count++;
      }
    }

    let div = document.createElement("div");

    if (count == 1) {
      div.innerHTML = `  ${input} is prime number`;
    } else {
      div.innerHTML = `  ${input} is not a prime number`;
    }

    let output = document.getElementById("output").appendChild(div);
  }
}
