/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.querySelector("#btn").addEventListener("click", (e) => {
  /*const zinute = document.getElementById("message");
  if (zinute !== null) {
    zinute.remove();
  }*/
  const output = document.querySelector("#output");
  output.innerHTML = null;
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        output.innerHTML += `
        <div>
        <h3>Login: ${element.login}</h3>
        <h3>Avatar URL: <a href="${element.avatar_url}">Click me</a></h3>
        </div>
        `;
      });
    });
});
