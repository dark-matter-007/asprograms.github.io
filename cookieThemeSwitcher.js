function setBlue() {
  const elementsToChange = document.querySelectorAll(".changes_with_theme");
  elementsToChange.forEach((element) => {
    element.className = element.className.replace("#ffffff", "#566d8f");
  });
}
function setBrown() {
  const elementsToChange = document.querySelectorAll(".changes_with_theme");
  document.getElementById("lowerRightSection").className +=
    " bg-gradient-to-br from-[#b46969] to-[#613838]";
  elementsToChange.forEach((element) => {
    element.className = element.className.replace("#ffffff", "#b46969");
  });
}
function setCharcoal() {
  const elementsToChange = document.querySelectorAll(".changes_with_theme");
  elementsToChange.forEach((element) => {
    element.className = element.className.replace("#ffffff", "#222222");
  });
}
function setGreen() {
  const elementsToChange = document.querySelectorAll(".changes_with_theme");
  elementsToChange.forEach((element) => {
    element.className = element.className.replace("#ffffff", "#587a45");
  });
}

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue; // here, accentColor i.e. the theme color selected by user
    }
  }
  return "brown"; // Default color for my theme
}

function intervalGayaBhaadMe() {
  clearInterval(myInterval);
}

// setTimeout(myInterval, 2200);

const nameee = "AS _ Programs";
let counter = 0;
const myInterval = setInterval(() => {
  document.getElementById("asprogramsText").innerText += nameee[counter];
  counter++;
  if (counter === nameee.length) {
    intervalGayaBhaadMe();
  }
}, 100);

const accentColor = getCookie("accentColor");

if (accentColor == "blue") {
  setBlue();
} else if (accentColor == "brown") {
  setBrown();
} else if (accentColor == "charcoal") {
  setCharcoal();
} else if (accentColor == "green") {
  setGreen();
} else {
  setBrown();
}

try {
  document.getElementById("brownSwitch").onclick = () => {
    document.cookie = "accentColor=brown";
    window.location.reload();
  };
  document.getElementById("blueSwitch").onclick = () => {
    document.cookie = "accentColor=blue";
    window.location.reload();
  };
  document.getElementById("charcoalSwitch").onclick = () => {
    document.cookie = "accentColor=charcoal";
    window.location.reload();
  };
  document.getElementById("greenSwitch").onclick = () => {
    document.cookie = "accentColor=green";
    window.location.reload();
  };
} catch {
  console.log("did not find theme switcher buttons");
}
