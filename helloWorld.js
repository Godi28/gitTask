let body = document.getElementById("body");
let input = document.createElement("input");
let button = document.createElement("button");
body.appendChild(input);
body.appendChild(button);
button.innerHTML = "submit"
button.onclick = function () {
  body.innerHTML = input.value;
};
