module.exports = function (array) {
  var arrthree = [0, 3, 6, 7, 8, 5, 2, 1, 4];
  var arrfour = [0, 4, 8, 12, 13, 14, 15, 11, 7, 3, 2, 1, 5, 9, 10, 6];
  var arrfive = [0, 5, 10, 15, 20, 21, 22, 23, 24, 19, 14, 9, 4, 3, 2, 1, 6, 11, 16, 17, 18, 13, 8, 7, 12]
  var arr;

  switch (array.length) {
    case 3 * 3:
      arr = arrthree;
      break;
    case 4 * 4:
      arr = arrfour;
      break;
    case 5 * 5:
      arr = arrfive;
      break;
  }

  var returnarr = [];
  for (var i = 0; i < array.length; i++) {
    returnarr.push(array[arr[i]]);
  }

  return returnarr;

};
