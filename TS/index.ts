const enum Tristate {
  False,
  True,
  Unknown
}

// console.log(Tristate[0]); // 'False'
console.log(Tristate['False']); // 0
const x = Tristate.Unknown
// console.log(Tristate[Tristate.False]); // 'False' because `Tristate.False == 0`