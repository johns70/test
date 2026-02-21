const { v4: uuidv4 } = require('uuid'); // Forma ruda de CommonJS

export const getUUID = () => {
  return uuidv4();
}