// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var generateMatrix = function (n) {
//   const arr = new Array(n).fill(null).map(() => new Array(n).fill(null));
//   const endNum = n * n;
//   let x = 0,
//     y = 0,
//     num = 0,
//     xp = 0,
//     yp = 1,
//     rn = 0;
//   while (++num <= endNum) {
//     arr[x][y] = num;
//     if (arr[x + xp]?.[y + yp] !== null) {
//       switch (++rn % 4) {
//         case 0:
//           xp = 0;
//           yp = 1;
//           break;
//         case 1:
//           xp = 1;
//           yp = 0;
//           break;
//         case 2:
//           xp = 0;
//           yp = -1;
//           break;
//         case 3:
//           xp = -1;
//           yp = 0;
//           break;
//       }
//     }
//     x += xp;
//     y += yp;
//   }
//   return arr;
// };

// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var generateMatrix = function (n) {
//   const arr = new Array(n).fill(null).map(() => new Array(n).fill(null));
//   const endNumber = n * n;
//   let top = 0,
//     bottom = n - 1,
//     left = 0,
//     right = n - 1,
//     num = 0;
//   while (num <= endNumber) {
//     for (let i = left; i <= right; ++i) arr[top][i] = ++num;
//     if (++top > bottom) break;
//     for (let i = top; i <= bottom; ++i) arr[i][right] = ++num;
//     if (--right < left) break;
//     for (let i = right; i >= left; --i) arr[bottom][i] = ++num;
//     if (--bottom < top) break;
//     for (let i = bottom; i >= top; --i) arr[i][left] = ++num;
//     if (++left > right) break;
//   }
//   return arr;
// };

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const arr = new Array(n).fill(null).map(() => new Array(n).fill(null));
  let tl = 0,
    br = n - 1,
    num = 0;
  while (tl < br) {
    for (let i = tl; i < br; ++i) arr[tl][i] = ++num;
    for (let i = tl; i < br; ++i) arr[i][br] = ++num;
    for (let i = br; i > tl; --i) arr[br][i] = ++num;
    for (let i = br; i > tl; --i) arr[i][tl] = ++num;
    ++tl;
    --br;
  }
  if (tl === br) arr[tl][br] = ++num;
  return arr;
};
