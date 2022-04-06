const { vStore } = require('../../../src/state_manager');

/*
 * Test Run / FlyTry
 */
(async () => {

  test("typeof vStore -> V_Components_Store", async () => {
    expect(typeof vStore).toBe("object");
  });

  test("vStore.type() -> V_Components_Store", async () => {
    expect(await vStore.type()).toBe("V_Components_Store");
  });

})();
