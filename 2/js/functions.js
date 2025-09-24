function checkStringLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
// Cтрока короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false


function isPalindrome(str) {
  const normalized = str.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }

  if (normalized === reversed) {
    return true;
  } else {
    return false;
  }
}
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true
