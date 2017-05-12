module.exports = function (array, sum) {
  var map = {}
  for (var i = 0, length = array.length; i < length; i++) {
    if ((sum - array[i]) in map) {
      return [sum - array[i], array[i]];
    }
    map[array[i]] = true
  }
  return undefined;
};
