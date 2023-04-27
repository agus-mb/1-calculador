const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((boton) => {
  boton.onclick = () => {
    if (boton.id == "clear") {
      display.innerText = "";

    } else if (boton.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);

    } else if (display.innerText != "" && boton.id =="equal") {
      display.innerText = eval(display.innerText);

    } else if ((display.innerText == "" && boton.id == "equal")) {
      display.innerText = "null";

    } else {
      display.innerText += boton.id;
    }
  };
});
