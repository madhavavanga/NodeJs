var Hero = require("./common-modules/Hero.js")
console.log(Hero.Hero);
console.log(Hero.power());
var fhero = Hero.heroes.firstHero();
var shero = Hero.heroes.secondHero();
console.log(fhero.fName);