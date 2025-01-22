import * as Blockly from "blockly";

/**
 * JSON stub for creating oop_create.
 * @type {{message0: string, mutator: string}}
 */
const oop_create_createWithJson = {
  "message0": "",
  "mutator": "oop_create_mutator",
};

/**
 * Block for creating a new object.
 * @type {{init: Blockly.Blocks.oop_create.init}}
 */
Blockly.Blocks["oop_create"] = {
  /**
   * Block definition.
   */
  init: function() {
    this.jsonInit(oop_create_createWithJson);
    this.appendDummyInput()
        .appendField("create new")
        .appendField(new Blockly.FieldTextInput("Object"), 'NAME');
    this.setHelpUrl("");
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, null);
    this.setTooltip("Creates a new object of a class.");
    this.setColour(35);
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "oop_createconstructor",
    "message0": "constructor for: %1 %2",
    "message1": "%1",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "NAME",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
    ],
    "args1": [
      {
        "type": "input_statement",
        "name": "CONTENT"
      },
    ],
    "extensions": ["oop_get_class_name"],
    "mutator": "oop_create_mutator",
    "colour": 35,
    "tooltip": "The constructor of a class.",
    "helpUrl": ""
  }
])

/**
 * Functions for oop_create mutator.
 * @type {{saveExtraState: (function(): {itemCount: oop_create_mutator_mixin.itemCount_|number}), saveConnections: oop_create_mutator_mixin.saveConnections, updateShape_: oop_create_mutator_mixin.updateShape_, itemCount_: number, loadExtraState: oop_create_mutator_mixin.loadExtraState, compose: oop_create_mutator_mixin.compose, decompose: (function(*): Block | BlockSvg)}}
 */
const oop_create_mutator_mixin = {
  itemCount_: 1,
  
  /**
   * Returns the state of this block as a JSON serializable object.
   *
   * @returns {{itemCount: number}} The state of the block.
   */
  saveExtraState: function() {
    return {
      "itemCount": this.itemCount_,
    };
  },
  
  /**
   * Applies the given state to this block.
   *
   * @param state The state of the block.
   */
  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount'];
    this.updateShape_();
  },
  
  /**
   * Populate the mutator's dialog with this block's components.
   *
   * @param workspace Mutator's workspace.
   * @returns {Block | BlockSvg} Root block in mutator.
   */
  decompose: function(workspace) {
    // Special sub-block that only is created in the mutator UI. It acts as the "top-block".
    const containerBlock = workspace.newBlock('oop_create_container');
    containerBlock.initSvg();
    
    // Adding one sub-block for each parameter.
    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('oop_create_parameter');
      itemBlock.initSvg();
      if (!itemBlock.previousConnection) {
        throw new Error("itemBlock has no previous connection.");
      }
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    // Finally return the top-block.
    return containerBlock;
  },
  
  /**
   * Reconfigure this block on the mutator dialog's components.
   *
   * @param containerBlock Root block in mutator.
   */
  compose: function(containerBlock) {
    // Get the first sub-block.
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    
    // Collect all the connections of the main-block that are referenced by sub-blocks.
    const connections = [];
    while (itemBlock) {
      if (itemBlock.isInsertionMarker()) {
        itemBlock = itemBlock.getNextBlock();
        continue;
      }
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.getNextBlock();
    }
    // Disconnect any children where the sub-block associated with that child has been deleted.
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && !connections.includes(connection)) {
        connection.disconnect();
      }
    }
    // Update the shape of the block.
    this.itemCount_ = connections.length;
    this.updateShape_();
    
    // Finally reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      connections[i]?.reconnect(this, 'ADD' + i);
    }
  },
  
  /**
   * Store pointers to any connected child blocks.
   *
   * @param containerBlock Root block in mutator.
   */
  saveConnections: function(containerBlock) {
    // Get first sub-block.
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    
    // Assign references to connections on the main block.
    let i = 0;
    while (itemBlock) {
      if (itemBlock.isInsertionMarker()) {
        itemBlock = itemBlock.getNextBlock();
        continue;
      }
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input?.connection.targetConnection;
      itemBlock = itemBlock.getNextBlock();
      i++;
    }
  },
  
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   */
  updateShape_: function() {
    // Add new inputs.
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i).setAlign(Blockly.Input.Align.RIGHT);
        if (this.getInput('CONTENT')) {
          this.moveInputBefore('ADD' + i, 'CONTENT');
        }
        if (i === 0) {
          input.appendField("with:");
        }
      }
    }
    // Remove deleted inputs.
    for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
    }
  },
};

/**
 * Mutator block for input container.
 * @type {{init: oop_create_container.init}}
 */
const oop_create_container = {
  init: function() {
    this.appendDummyInput().appendField("inputs");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
    this.setColour(35);
  },
};
Blockly.Blocks["oop_create_container"] = oop_create_container;

/**
 * Mutator block for adding parameters.
 * @type {{init: oop_create_parameter.init}}
 */
const oop_create_parameter = {
  init: function() {
    this.appendDummyInput().appendField("parameter");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false;
    this.setColour(35);
  },
};
Blockly.Blocks["oop_create_parameter"] = oop_create_parameter;

// Register mutator
Blockly.Extensions.registerMutator("oop_create_mutator", oop_create_mutator_mixin, null, ["oop_create_parameter"]);

Blockly.Extensions.register("oop_get_class_name", function () {
  if (this.isInFlyout) {
    this.setFieldValue(
        this.workspace.targetWorkspace.injectionDiv.parentElement.id.replace("blockly", ""),
        "NAME",
    );
  }
});