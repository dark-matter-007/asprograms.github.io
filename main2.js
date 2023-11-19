let divisionIsDark = true;

document.getElementById("changingButton").onclick = () => {
  if (divisionIsDark) {
    document
      .getElementById("divisionToChange")
      .setAttribute("style", " background-color: green;");
    divisionIsDark = false;
  } else {
    document
      .getElementById("divisionToChange")
      .setAttribute("style", " background-color: black;");
    divisionIsDark = true;
  }
};
