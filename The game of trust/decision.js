// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  return history.length == 0 ? true : (() => {
    const lastChild = history.length - 1;
    return history[lastChild].theirs == true ? history[lastChild].yours : !history[lastChild].yours
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

module.exports = decide;