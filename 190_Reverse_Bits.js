/**
 *
 * Reverse Bits
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  return Number.parseInt(
    n.toString(2).split("").reverse().join("").padEnd(32, "0"),
    2
  );
}

console.log(
  reverseBits(0000001010010100000111101001110000000010100101000001111010011100)
);
