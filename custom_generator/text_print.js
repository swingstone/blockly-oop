import { javascriptGenerator, Order } from "blockly/javascript.js";

delete javascriptGenerator.forBlock["text_print"];

javascriptGenerator.forBlock["text_print"] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
  return "alert(" + text + ");\n";
}