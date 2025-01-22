import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  {
    "type": "oop_test",
    "message0": "%1%2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "CLASS_NAME",
        "text": "",
      },
      {
        "type": "field_input",
        "name": "NAME",
        "text": "default",
      },
    ],
    "extensions": ["get_class_name_extension"],
    "colour": 230,
    "tooltip": "",
    "helpUrl": "",
  },
]);

/**
 * Gets the name of the workspace the block is used in, and writes it into the field CLASS_NAME.
 */
Blockly.Extensions.register(
    "get_class_name_extension",
    function () {
      if (this.isInFlyout) {
        this.setFieldValue(
            this.workspace.targetWorkspace.injectionDiv.parentElement.id.replace(
                "blockly",
                "",
            ) + "::",
            "CLASS_NAME",
        );
      }
    }
);