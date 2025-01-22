import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  {
    "type": "lists_push",
    "message0": "push list %1 with %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_value",
        "name": "PUSH"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Add a new element to the list.",
    "helpUrl": "",
  },
]);