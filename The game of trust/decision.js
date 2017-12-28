// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  return history.length == 0 ? true : (() => {
    const lastChild = history.length - 1;
    return history[lastChild].theirs;
  })()
}

// const copyCat = (history = []) => {
//   return history.length == 0 ? true : (() => {
//     const lastChild = history.length - 1;
//     return history[lastChild].theirs;
//   })()
// }

// const simpleTon = (history = []) => {
//   return history.length == 0 ? true : () => {
//     const lastChild = history.length - 1;
//     history[lastChild].theirs == true ? history[lastChild].yours : !history[lastChild].yours
//   }
// }

// const copyKitten = (history = []) => {
//   return history.length == 0 ? true : (() => {
//     const lastChild = history.length - 1;
//     const secondLastChild = history.length - 2;
//     if (history[lastChild].theirs == false && history[secondLastChild] == false){
//       return false
//     } else return history[lastChild].theirs;
//   })()
// }

module.exports = decide;