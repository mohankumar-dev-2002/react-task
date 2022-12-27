
let btnA = document.getElementById("btnA");
let btnB = document.getElementById("btnB");
let output = document.getElementById("output");

btnA.addEventListener("click", () => {
    output.innerHTML = "loading";
  setTimeout(() => {
    output.innerHTML = "53";
   
  }, 2000);
});

btnB.addEventListener("click", () => {
    output.innerHTML = "loading";
  setTimeout(() => {
    output.innerHTML = "332";
   
  }, 2000);
});
