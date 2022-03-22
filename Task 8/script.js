/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  sum = (pirmasSkaicius, antrasSkaicius) => {
    let answer1 = pirmasSkaicius + antrasSkaicius;
    return answer1;
  };
  subtraction = (pirmasSkaicius, antrasSkaicius) => {
    let answer2 = pirmasSkaicius - antrasSkaicius;
    return answer2;
  };
  multiplication = (pirmasSkaicius, antrasSkaicius) => {
    let answer3 = pirmasSkaicius * antrasSkaicius;
    return answer3;
  };
  division = (pirmasSkaicius, antrasSkaicius) => {
    let answer4 = pirmasSkaicius / antrasSkaicius;
    return answer4;
  };
}

let testCalculator = new Calculator();
console.log("Sudėties veiksmo atsakymas: " + testCalculator.sum(100, 150));
console.log(
  "Atimties veiksmo atsakymas: " + testCalculator.subtraction(250, 150)
);
console.log(
  "Daugybos veiksmo atsakymas: " + testCalculator.multiplication(150, 2)
);
console.log("Dalybos veiksmo atsakymas: " + testCalculator.division(300, 3));
