import { javascriptGenerator, Order } from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_method_return"] = function(block, generator) {
  const returnValue = generator.valueToCode(block, 'RETURN', Order.ATOMIC);
  if (!returnValue) return "return;\n";
  return "return " + returnValue + ";\n";
}