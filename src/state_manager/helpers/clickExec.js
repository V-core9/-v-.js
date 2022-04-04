const clickExec = ( selector, callback ) => {
  document.querySelector( selector ).addEventListener("click", callback );
};

module.exports = clickExec;
