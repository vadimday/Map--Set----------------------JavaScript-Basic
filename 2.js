const array1 = [2, 4, 6, 8, 10];
const array2 = [4, 8, 12, 16, 20];

const set1 = new Set(array1);
const set2 = new Set(array2);

const intersection = [...set1].filter((num) => set2.has(num));
console.log(intersection);
