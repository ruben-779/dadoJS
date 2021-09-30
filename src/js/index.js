let randomNumber;
let dado;
let tirarDado = document.getElementById("tirarDado");
const random = () => {
  randomNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      dado = "⚀";
      break;
    case 2:
      dado = "⚁";
      break;
    case 3:
      dado = "⚂";
      break;
    case 4:
      dado = "⚃";
      break;
    case 5:
      dado = "⚄";
      break;
    case 6:
      dado = "⚅";
      break;
  }
  document.getElementById("dado").innerHTML = dado;
  console.log(dado);
};
console.log("holaa");
tirarDado.addEventListener("click", random);
