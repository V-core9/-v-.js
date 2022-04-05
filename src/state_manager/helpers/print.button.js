const printButton = async (values = {}) => {

  const { icon, text, action } = values;

  return `<button ${(action != undefined) ? "action='" + action + "'" : ''}>
            ${(icon != undefined) ? "<i>" + icon + "</i>" : ''}
            ${(text != undefined) ? "<p>" + text + "</p>" : ''}
          </button>`;
};

module.exports = printButton;
