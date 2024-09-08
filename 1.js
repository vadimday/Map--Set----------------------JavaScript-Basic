const dictionary = new Map();
let input;

while (true) {
  input = prompt("Введите слово на английском");
  if (dictionary.has(input)) {
    alert(`Перевод: ${dictionary.get(input)}`);
  } else {
    const translation = prompt("Слово не найдено. Введите перевод на РУССКОМ:");
    dictionary.set(input, translation);
    alert("Слово добавлено ");
  }
}
