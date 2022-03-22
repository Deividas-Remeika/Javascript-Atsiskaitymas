/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch("cars.json")
  .then((res) => res.json())
  .then((data) => data.cars)
  .then((cars) => {
    let output = document.querySelector("#output");
    cars.forEach((element) => {
      output.innerHTML += `
      <div>
      <h3>Brand: ${element.brand}</h3>
      <h3>Models: ${element.models.map((modelis) => modelis)}</h3>
      </div>
      `;
    });
  });
