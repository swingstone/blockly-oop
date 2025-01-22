import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  {
    "type": "variables_define",
    "message0": "define %1 with value %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
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
    "tooltip": "Define a new variable with a certain value.",
    "helpUrl": ""
  }
])