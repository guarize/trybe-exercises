const fs = require('fs');

const readTextFile = (file) => {
  try {
    const response = fs.readFileSync(file, 'utf8');
    return response;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

module.exports = readTextFile;
