
var sheds = [
  {
    name: "Shed A",
    cows: 5,
    litresPerCow: 30
  },

  {
    name: "Shed B",
    cows: 10,
    litresPerCow: 70
  },

  {
    name: "Shed C",
    cows: 10,
    litresPerCow: 50
  },

  {
    name: "Shed D",
    cows: 5,
    litresPerCow: 100
  },





];

//production per shed.;

function productionPerShed() {
  for (var i = 0; i < sheds.length; i++) {
    var perShed;
    perShed = sheds[i].cows * sheds[i].litresPerCow;
    console.log("The total production for " + sheds[i].name + " is " + perShed + " per day.");
    perShed = sheds[i].litres;



  }


}

productionPerShed();

function total(a,b,c,d){
  var e =a+b+c+d;
  return e;
}
total(700,500,500,700);
console.log("The total production for all the sheds is " + total(700,700,500,500));





function reset() {
  location.reload();

}