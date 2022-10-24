function sum(fromN, toN) {
  if (fromN === toN) return toN;
  if (fromN < toN )
  return fromN + sum(fromN + 1, toN);
}
console.log(sum(1,4));

module.exports = sum;
