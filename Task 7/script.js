/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(objektas) {
  let keys = Object.keys(objektas);
  console.log(keys);
}

showObjectKeys(audi);
