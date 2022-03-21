class ShiftCipher {
  constructor(shift){
    this.shift = shift,
    this.alphaUpper = [...Array(26).keys()].map((int, index) => index + 65).map((int) => String.fromCharCode(int)),
    this.alphaLower = this.alphaUpper.join('').toLowerCase().split('')
  }
  encrypt(string){
    return string.toUpperCase().split('').map(char => this.alphaUpper.includes(char) ? this.alphaUpper[(this.alphaUpper.findIndex(letter => char === letter) + this.shift) % 26] : char ).join('');
  }
  decrypt(string){
    return string.toLowerCase().split('').map(char => this.alphaLower.includes(char) ? this.alphaLower[(this.alphaLower.findIndex(letter => char === letter) - this.shift + 26) % 26] : char ).join('');
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.encrypt('I live in Zanzibar!')); // returns 'K NKXG KP BCPBKDCT!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'