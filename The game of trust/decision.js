// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  history.length == 0 ? true : (() => {
    const lastChild = history.length() - 1;
    return history[lastChild].theirs;
  })()
}

module.exports = decide;