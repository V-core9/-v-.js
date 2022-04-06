const vcsErrors = {

  type: () => {
    return { location: "V_Components_Store", status: "error", message: "[componentName] must be string type." };
  },

  notFound: (componentName) => {
    return { location: "V_Components_Store", status: "warn", message: "No Component Available using the provided name: " + componentName };
  },

  notInstance: () => {
    return { location: "V_Components_Store", status: "error", message: "[vComponent] must be instance of V_Component." };
  },

};

module.exports = vcsErrors;
