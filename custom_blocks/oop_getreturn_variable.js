import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  // Get an attribute from a variable.
  {
    "type": "oop_getreturn_variable",
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
    "output": null,
    "colour": 45,
    "tooltip": "Call a method that provides a return value.",
    "helpUrl": ""
  }
]);