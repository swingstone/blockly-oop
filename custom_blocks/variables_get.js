import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  {
    "type": "oop_variable",
    "message0": "%1",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "NAME",
        "text": ""
      }
    ],
    "output": ["variable", "Number", "Boolean", "Text", "Array"],
    "colour": 330,
    "tooltip": "Block for referring a variable.",
    "helpUrl": ""
  }
]);