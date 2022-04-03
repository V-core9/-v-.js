const printButton = async (textVal, className, callback ) => {
  return `<button class="${className}" ${(typeof callback === 'function') ? ' onclick="' + callback + '" ' : '' }>${textVal}</button>`;
};

module.exports = printButton;
