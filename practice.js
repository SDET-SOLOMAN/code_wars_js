let alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

let re = "Hello Everyone";
let temp = ""; // encrypted

// encrypt: +10
for (let i = 0; i < re.length; i++) {
  const ch = re[i];
  const low = ch.toLowerCase();
  const idx = alpha.indexOf(low); // ищем в нижнем регистре

  if (idx === -1) {
    temp += ch; // не буква — оставляем как есть
  } else {
    const coded = alpha[idx + 20]; // сдвиг вперёд
    temp += ch === low ? coded : coded.toUpperCase(); // вернуть регистр
  }
}
console.log(temp);

let temp2 = ""; // decrypted

// decrypt: -10
for (let i = 0; i < temp.length; i++) {
  const ch = temp[i];
  const low = ch.toLowerCase();
  // берём последний индекс (во 2-й половине удвоенного алфавита), чтобы не уйти в отрицательные
  const idx2 = alpha.lastIndexOf(low);

  if (idx2 === -1) {
    temp2 += ch;
  } else {
    const plain = alpha[idx2 - 20];
    temp2 += ch === low ? plain : plain.toUpperCase();
  }
}

console.log(temp2);
