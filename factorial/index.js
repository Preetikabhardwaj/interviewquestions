function factorial() {
  let fact = 1;
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  for (let i = input; i >= 1; i--) {
    fact = fact * i;
    
  }
  console.log(fact);
}
