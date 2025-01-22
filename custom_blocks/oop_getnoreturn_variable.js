import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  // Call a method of a variable.
  {
    "type": "oop_getnoreturn_variable",
    "message0": "of %2 method %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "align": "RIGHT",
        "check": "method_call"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "Call a method with no return value.",
    "helpUrl": ""
  }
])