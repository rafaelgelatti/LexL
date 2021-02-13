const id = 'XXXX-XXXX-XXXX-XXXX';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateId() {
  return id.split('')
  .map((e) => e.replace('X', characters.charAt((Math.floor(Math.random() * characters.length)))), id)
  .join('');
}

console.log(generateId());
