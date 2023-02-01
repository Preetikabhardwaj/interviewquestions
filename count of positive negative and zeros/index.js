function countofnpz() {
  let input = parseInt(document.getElementById("input").value);
  let output = document.getElementById("output");
  let i;
  let positive;
  let negative;
  let zeros;
  for (i = 0; i <= input; i++) {
    let div = document.createElement("div");
    div.innerHTML = `${i}`;
    output.appendChild(div);
    console.log(i);
  }
  if (input < 0) {
    console.log("negative number");
  } else if ((input = i)) {
    console.log("zeros number");
  } else {
    console.log("positive number");
  }
}
