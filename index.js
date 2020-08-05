window.onload = function () {
  const buttonShowDiv = document.getElementById("button1");
  const buttonGoBack = document.getElementById("button2");
  const body = document.getElementById("body");

  buttonShowDiv.addEventListener("click", function () {
    if (body.style.backgroundColor === "black") {
      body.style = "color: black; background-color: white;";
      buttonShowDiv.style.backgroundColor = "black";
      buttonGoBack.style.backgroundColor = "black";
      buttonShowDiv.style.color = "white";
      buttonGoBack.style.color = "white";
      buttonShowDiv.innerHTML = "Dark Mode";
    } else {
      body.style = "color: white; background-color: black";
      buttonShowDiv.style.backgroundColor = "white";
      buttonGoBack.style.backgroundColor = "white";
      buttonShowDiv.style.color = "black";
      buttonGoBack.style.color = "black";
      buttonShowDiv.innerHTML = "Light Mode";
    }
  });

  buttonGoBack.addEventListener("click", function () {
    location.reload();
  });

  const input = document.querySelector("input");
  const output = document.getElementById("namefield");
  const pinkField = document.getElementById("start");

  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      output.textContent = `Welcome, ${e.target.value}!`;
      output.style.backgroundColor = "#2e8500";
      output.style.color = "white";
      output.style.width = "300px";
      output.style.margin = "5vw auto";
      output.style.textAlign = "center";
      output.style.verticalAlign = "middle";
      output.style.boxShadow = "20px 20px grey";
      output.style.padding = "118px 35px";
      output.style.borderRadius = "999px";
      output.style.fontSize = "3rem";
      pinkField.remove();
    }
  });
};
