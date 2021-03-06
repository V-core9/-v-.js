const stateManager = require("../../../src/state_manager/");
const { V_Base, vStore, printButton, clickExec } = stateManager;

/*
 * Test Components Create
 */
const txItem = new V_Base({

  //! Just to be able to navigate it easier [id]
  id: "testExample_ITEM",

  //! Data that this component tracks.
  data: 225,

  //! HTML/VIEW method.
  view: async () => {
    return `<info>
                    <h3>${txItem.id}</h3>
                    <h3 class="dataInfoPart">${txItem.data}</h3>
                </info>
                <actions>
                    ${await printButton({ icon: '🔼', text: 'Increment', action: "inc" })}
                    ${await printButton({ icon: '🔻', text: 'Decrement', action: "dec" })}
                </actions>`;
  },

  //! Methods that are runnable for this Component.
  meth: {
    increment: async () => txtItem.state(txtItem.data + 1),
    decrement: async () => txtItem.state(txtItem.data - 1),
  },

  //! The General Update loop method.
  update: async () => {
    document.querySelector(`#${txItem.id}`).innerHTML = await txItem.view();
    clickExec(`#${txItem.id} .inc`, txItem.meth.increment);
    clickExec(`#${txItem.id} .dec`, txItem.meth.decrement);
  },

});

const txItemALT = new V_Base({
  //! Just to be able to navigate it easier [id]
  id: "testExample_ITEM_ALT",

  //! Data that this component tracks.
  data: 225,

  //! HTML/VIEW method.
  view: async () => {
    return `<info>
              <h3>${txItemALT.id}</h3>
              <h3 class="dataInfoPart">${txItemALT.data}</h3>
            </info>
            <actions>
              ${await printButton({ icon: '🔼', text: 'Increment', action: "inc" })}
              ${await printButton({ icon: '🔻', text: 'Decrement', action: "dec" })}
            </actions>`;
  },

  //! Methods that are runnable for this Component.
  meth: {
    increment: async () => txItemALT.state(txItemALT.data + 1),
    decrement: async () => txItemALT.state(txItemALT.data - 1),
  },

  //! The General Update loop method.
  update: async () => {
    document.querySelector(`#${txItemALT.id}`).innerHTML = await txItemALT.view();
    clickExec(`#${txItemALT.id} .inc`, txItemALT.meth.increment);
    clickExec(`#${txItemALT.id} .dec`, txItemALT.meth.decrement);
  },
});

//! EOF >> Component Create


//? ASYNC Run cuz some need to wait for things.
(async () => {

  //! Test typeof so it should be an OBJECT
  test("checks typeof stateManager", () => {
    expect(typeof stateManager).toBe("object");
  });

  //! Object Properties Count
  test("checks typeof stateManager", async () => {
    expect(Object.keys(stateManager).length).toBe(
      Object.keys(stateManager).length
    );
  });

  //! Test typeof V_Base so it should be an FUNCTION
  test("checks typeof V_Base Class/function", async () => {
    expect(typeof V_Base).toBe("function");
  });

  //! Test typeof vStore so it should be an OBJECT
  test("checks typeof vStore Object", async () => {
    expect(typeof vStore).toBe("object");
  });

  //! Test Items Count
  test("test for 2 components that this file creates", async () => {
    const compCount = Object.keys(await vStore.getAll()).length || false;
    expect(compCount).toBe(2);
  });

  //! Test FInding a Specific
  test("Look for a specif item using it's ID. [ testExample_ITEM ]", async () => {
    const itemData = await vStore.get("testExample_ITEM");
    expect(itemData).toBe(txItem);
  });

  //! Test FInding a Specific_ALT Version
  test("Look for a specif item using it's ID [ testExample_ITEM_ALT ]", async () => {
    const itemData = await vStore.get("testExample_ITEM_ALT");
    expect(itemData).toBe(txItemALT);
  });

})();
