// console.log(Tristate[0]); // 'False'
console.log(0 /* Tristate['False'] */); // 0
var x = 2 /* Tristate.Unknown */;
// console.log(Tristate[Tristate.False]); // 'False' because `Tristate.False == 0`
