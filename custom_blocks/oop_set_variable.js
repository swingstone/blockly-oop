import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  // Block to set a variable to a new value.
  {
    "type": "oop_set_variable",
    "message0": "set %1 to %2",
    "args0": [
      {
        "type": "input_value",
        "name": "VARIABLE",
        "check": "variable",
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "Set a new value for the given variable.",
    "helpUrl": ""
  }
]);