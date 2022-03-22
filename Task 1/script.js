/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("#forma").addEventListener("submit", (e) => {
  e.preventDefault();
  let svorisKg = e.target.elements.search.value;
  let lb = svorisKg * 2.2046;
  let g = svorisKg / 0.001;
  let oz = svorisKg * 35.274;
  let output = document.querySelector("#output");
  output.innerHTML = `
  <h1>Results</h1>
  <div>Svoris kilogramais(kg) = ${svorisKg}</div>
  <div>Svoris svarais(lb) = ${lb}</div>
  <div>Svoris gramais(g) = ${g}</div>
  <div>Svoris uncijomis(oz) = ${oz}</div>
  `;
  output.style.textAlign = "center";
  output.style.fontSize = "1.3em";
  e.target.elements.search.value = null;
});
