import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  // Block to reference an attribute the own class.
  {
    "type": "oop_this",
    "message0": "this %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": ["variable", "method_call"],
      }
    ],
    "output": ["variable", "Number", "Boolean", "Text", "Array"],
    "colour": 45,
    "tooltip": "In an object method, 'this' refers to the object.",
    "helpUrl": ""
  }
]);