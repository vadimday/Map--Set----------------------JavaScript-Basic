const str = "ку";

function hasUniqueCharacters(string) {
  const charSet = new Set(string);
  return charSet.size === string.length;
}

console.log(hasUniqueCharacters(str));
