const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const encoding = (str) => {
  let toEncode = str;
  let encoded = '';

  for (let i = 0; i < toEncode.length; i += 1) {
    if (Object.keys(code).includes(toEncode[i])) {
      encoded += code[toEncode[i]];
    } else {
      encoded += toEncode[i];
    }
  }
  return encoded;
};

const decoding = (str) => {
  let toDecode = str;
  let decoded = '';

  for (let i = 0; i < toDecode.length; i += 1) {
    if (Object.values(code).includes(Number(toDecode[i]))) {
      decoded += Object.keys(code).find((key) => code[key] === Number(toDecode[i]));
    } else {
      decoded += toDecode[i];
    }
  }
  return decoded;
};

console.log(encoding('Test').length);

module.exports = { encoding, decoding };
