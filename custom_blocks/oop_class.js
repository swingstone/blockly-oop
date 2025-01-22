import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  // Block for class definition.
  {
    "type": "oop_class",
    "message0": "class %1 %2 %3",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "NAME",
        "text": ""
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONTENT"
      }
    ],
    "inputsInline": false,
    "extensions": ["oop_get_class_name"],
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
  }
]);
