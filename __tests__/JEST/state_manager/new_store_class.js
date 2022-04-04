const { v_components } = require('../../../src/state_manager');

/*
 * Test Run / FlyTry
 */
(async () => {

  test("typeof v_components -> V_Components_Store", async () => {
    expect(typeof v_components).toBe("object");
  });

  test("v_components.type() -> V_Components_Store", async () => {
    expect(await v_components.type()).toBe("V_Components_Store");
  });

})();
