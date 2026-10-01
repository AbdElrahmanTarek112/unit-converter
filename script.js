const unitOptions = {
  length: ["Meters", "Feet", "Inches", "Kilometers", "Miles"],
  weight: ["Kilograms", "Pounds", "Ounces", "Grams"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
};
function length(element) {
  document.getElementById("unit").textContent = "Enter the length to convert";
  const navLinks = document.querySelectorAll("nav div");
  for (let e of navLinks) {
    e.classList.remove("active-link");
  }
  element.classList.add("active-link");
  fromlist = document.getElementById("from-list");
  tolist = document.getElementById("to-list");
  fromlist.innerHTML = "";
  tolist.innerHTML = "";
  unitOptions.length.forEach((e) => {
    const tooption = document.createElement("option");
    tooption.value = e.toLowerCase();
    tooption.textContent = e;
    tolist.appendChild(tooption);
    const fromoption = document.createElement("option");
    fromoption.value = e.toLowerCase();
    fromoption.textContent = e;
    fromlist.appendChild(fromoption);
  });
  const input = document.querySelector(".unit");
  input.min = 0;
}
function Weight(element) {
  document.getElementById("unit").textContent = "Enter the Weight to convert";
  const navLinks = document.querySelectorAll("nav div");
  for (let e of navLinks) {
    e.classList.remove("active-link");
  }
  element.classList.add("active-link");
  fromlist = document.getElementById("from-list");
  tolist = document.getElementById("to-list");
  fromlist.innerHTML = "";
  tolist.innerHTML = "";
  unitOptions.weight.forEach((e) => {
    const tooption = document.createElement("option");
    tooption.value = e.toLowerCase();
    tooption.textContent = e;
    tolist.appendChild(tooption);
    const fromoption = document.createElement("option");
    fromoption.value = e.toLowerCase();
    fromoption.textContent = e;
    fromlist.appendChild(fromoption);
  });
  const input = document.querySelector(".unit");
  input.min = 0;
}
function Temperature(element) {
  document.getElementById("unit").textContent =
    "Enter the Temperature to convert";
  const navLinks = document.querySelectorAll("nav div");
  for (let e of navLinks) {
    e.classList.remove("active-link");
  }
  element.classList.add("active-link");
  fromlist = document.getElementById("from-list");
  tolist = document.getElementById("to-list");
  fromlist.innerHTML = "";
  tolist.innerHTML = "";
  unitOptions.temperature.forEach((e) => {
    const tooption = document.createElement("option");
    tooption.value = e.toLowerCase();
    tooption.textContent = e;
    tolist.appendChild(tooption);
    const fromoption = document.createElement("option");
    fromoption.value = e.toLowerCase();
    fromoption.textContent = e;
    fromlist.appendChild(fromoption);
  });
  const input = document.querySelector(".unit");
  const unit = fromlist.value;
  if (unit == "celsius") input.min = -273.15;
  else if (unit == "fahrenheit") input.min = -459.67;
  else input.min = 0;
}
window.onload = function () {
  length(document.getElementById("length"));
};
const lengthFactors = {
  meters: 1,
  feet: 0.3048,
  inches: 0.0254,
  kilometers: 1000,
  miles: 1609.344,
};

const weightFactors = {
  kilograms: 1,
  pounds: 0.45359237,
  ounces: 0.028349523125,
  grams: 0.001,
};
function convert() {
  unitfrom = document.getElementById("from-list").value;
  unitto = document.getElementById("to-list").value;
  num = parseFloat(document.getElementById("number").value);
  if (Number.isNaN(num)) return;
  let result;
  if (unitfrom in lengthFactors) {
    result = num * (lengthFactors[unitfrom] / lengthFactors[unitto]);
  } else if (unitfrom in weightFactors) {
    result = num * (weightFactors[unitfrom] / weightFactors[unitto]);
  } else {
    let celsius;
    if (unitfrom === "celsius") celsius = num;
    else if (unitfrom === "fahrenheit") celsius = ((num - 32) * 5) / 9;
    else celsius = num - 273.15; // kelvin

    // ── Step 2: convert Celsius to target ──
    if (unitfrom === "celsius") result = celsius;
    else if (unitfrom === "fahrenheit") result = (celsius * 9) / 5 + 32;
    else result = celsius + 273.15; // kelvin
  }
  document.getElementById("result").textContent =
    `${num} ${unitfrom} = ${result} ${unitto}`;
  document.querySelector(".result-section").classList.remove("d-none");
  document.querySelector(".form-section").classList.add("d-none");
}
function resetForm() {
  document.querySelector(".result-section").classList.add("d-none");
  document.querySelector(".form-section").classList.remove("d-none");
  document.getElementById("number").value = "";
}
