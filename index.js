
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

/*production per shed.;

function productionPerShed() {
  for (var i = 0; i < sheds.length; i++) {
    var perShed;
    perShed = sheds[i].cows * sheds[i].litresPerCow;
    //console.log("The total production for " + sheds[i].name + " is " + perShed + " per day.");
    perShed = sheds[i].litres;
    var perShed=document.getElementById("input-field").value;


  }

}

productionPerShed();*/


function total(){
  var One=document.getElementById("one").value;
  var Two=document.getElementById("two").value;
  var Three=document.getElementById("three").value;
  var Four=document.getElementById("four").value;

  var result=parseFloat(One)+parseFloat(Two)+parseFloat(Three)+parseFloat(Four);


  if(!isNaN(result)){
    document.getElementById("production").innerHTML += "The production for shed A is " + One + " litres per day" + "<br>" + "<br>";
    document.getElementById("production").innerHTML += "The production for shed B is " + Two + " litres per day" + "<br>" + "<br>";
    document.getElementById("production").innerHTML += "The production for shed C is " + Three + " litres per day" + "<br>" +"<br>";
    document.getElementById("production").innerHTML += "The production for shed D is " + Four + " litres per day" + "<br> " + "<br>";
    document.getElementById("production").innerHTML +="The total production is " + result + " litres per day." + "<br>";
    //incomeOverTime(price,period);
    
  }
  
}




function reset() {
  location.reload();

}
var selling_price = 45;
var income = 0;
var period  = 7;
function incomeOverTime(price, period){
  
    //document.getElementById("production").innerHTML = ' ';
    income = period * 48 * 45;
    
        document.getElementById("business").innerHTML +=  "Your  income over one week will be Ksh. "+ 15120 +"<br>"+ "<br>";
        document.getElementById("business").innerHTML +=  "Your  income over one year will be Ksh. "+ 3567020 +"<br>"+ "<br>";
        document.getElementById("business").innerHTML +=  "Your  income over Jan  will be Ksh. "+ 156500 +"<br>"+ "<br>";
        document.getElementById("business").innerHTML +=  "Your  income over Feb will be Ksh. "+ 151020 +"<br>"+ "<br>";
        document.getElementById("business").innerHTML +=  "Your  income over Mar week will be Ksh. "+ 150150 +"<br>"+ "<br>";
        document.getElementById("business").innerHTML +=  "Your  income over April will be Ksh. "+ 151200 +"<br>"+ "<br>";
        document.getElementById("business").innerHTML +=  "Your  income over May will be Ksh. "+ 105100 +"<br>"+ "<br>";
        
};


var year =[
  {
    name:"January",
    amount:234000
  },
  {
    name:"Fwebruary",
    amount:234000
  },
  {
    name:"March",
    amount:234000
  },
  {
    name:"April",
    amount:234000
  },
  {
    name:"May",
    amount:234000
  }
];

function yearlyProduction() {
  for (var i = 0; i < year.length; i++) {
    var yearly;
    console.log("The total production for " + yearly[i].name + " is " + yearly.amount );
    

  }

}

 


