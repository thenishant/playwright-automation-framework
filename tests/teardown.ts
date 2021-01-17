const fs = require('fs');

//delete cookies.json after all suits are run and close the browser session
const path = 'cookies.json'
module.exports = async () => {
  try {
    fs.unlinkSync(path);
    (global as any).__BROWSER__.close();
  }
  catch (err) {
    console.error(err);
  }
}
