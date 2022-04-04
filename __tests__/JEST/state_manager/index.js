const stateManager = require("../../../src/state_manager/");
const { V_Base, vComponents, printButton, clickExec } = stateManager;

/*
 * txItem :: testExample_ITEM
 */
const txItem = new V_Base({
  // Just to be able to navigate it easier [id]
  id: "testExample_ITEM",

  data: 225,

  view: async () => {
    return `<info>
                    <h3>${txItem.id}</h3>
                    <h3 class="dataInfoPart">${txItem.data}</h3>
                </info>
                <actions>
                    ${await printButton("🔼 Increment", "inc")}
                    ${await printButton("🔻 Decrement", "dec")}
                </actions>`;
  },

  update: async () => {
    document.querySelector(`#${txItem.id}`).innerHTML = await txItem.view();
    clickExec(`#${txItem.id} .inc`, () => txItem.state(txItem.data + 1));
    clickExec(`#${txItem.id} .dec`, () => txItem.state(txItem.data - 1));
  },
});

/*
 * txItemALT :: testExample_ITEM_ALT
 */
const txItemALT = new V_Base({
  // Just to be able to navigate it easier [id]
  id: "testExample_ITEM_ALT",

  data: 225,

  view: async () => {
    return `<info>
                    <h3>${txItemALT.id}</h3>
                    <h3 class="dataInfoPart">${txItemALT.data}</h3>
                    </info>
                    <actions>
                    ${await printButton("🔼 Increment", "inc")}
                    ${await printButton("🔻 Decrement", "dec")}
                    </actions>`;
  },

  update: async () => {
    document.querySelector(`#${txItemALT.id}`).innerHTML =
      await txItemALT.view();
    clickExec(`#${txItemALT.id} .inc`, () =>
      txItemALT.state(txItemALT.data + 1)
    );
    clickExec(`#${txItemALT.id} .dec`, () =>
      txItemALT.state(txItemALT.data - 1)
    );
  },
});

(async () => {
  //! Test typeof so it should be an OBJECT
  test("checks typeof stateManager", () => {
    expect(typeof stateManager).toBe("object");
  });

  //! Object Properties Count
  test("checks typeof stateManager", async () => {
    expect(Object.keys(stateManager).length).toBe(
      Object.keys(require("../../../src/state_manager")).length
    );
  });

  //! Test typeof V_Base so it should be an FUNCTION
  test("checks typeof V_Base Class/function", async () => {
    expect(typeof V_Base).toBe("function");
  });

  //! Test typeof vComponents so it should be an OBJECT
  test("checks typeof vComponents Object", async () => {
    expect(typeof vComponents).toBe("object");
  });

  //! Test Items Count
  test("test for 2 components that this file creates", async () => {
    const compCount = Object.keys(await vComponents.getAll()).length || false;
    expect(compCount).toBe(2);
  });

  //! Test FInding a Specific
  test("Look for a specif item using it's ID. [ testExample_ITEM ]", async () => {
    const itemData = await vComponents.get("testExample_ITEM");
    expect(itemData).toBe(txItem);
  });

  //! Test FInding a Specific_ALT Version
  test("Look for a specif item using it's ID [ testExample_ITEM_ALT ]", async () => {
    const itemData = await vComponents.get("testExample_ITEM_ALT");
    expect(itemData).toBe(txItemALT);
  });
  
})();
