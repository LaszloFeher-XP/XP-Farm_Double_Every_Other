class Kata {

  doubleEveryOther(a) {
    let result = [...a];
    for (let i = 1; i < a.length; i += 2) {
      result[i] = a[i] * 2;
    }
    return result;
  }
}

module.exports = {
  Kata,
};