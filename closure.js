//adding prefixes to name:
function yourName(name) {
  return function(yourTitle) {
   return `greetings ${yourTitle} ${name}`
  }
}

const heyThere = yourName("Alex");
heyThere("Sir");

//Use a closure to create multiple functions for making various animal noises.
// For example, it should be possible to do the following:
//const lionSound = soundMaker("roar");
//const mouseSound = soundMaker("squeak");

function makeASound(animal) {
  return function(animalSound){
    return `the ${animal} goes ${animalSound}`;
  }
}

const lionSound = makeASound("lion");
lionSound("ROAR");
const mouseSound = makeASound("mouse");
mouseSound("squeak")

