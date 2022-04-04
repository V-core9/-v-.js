const clickExec = async (selector, callback) => {
  try {
    return document.querySelector(selector).addEventListener("click", callback);
  } catch (error) {
    console.log(error);
  }
};

module.exports = clickExec;
