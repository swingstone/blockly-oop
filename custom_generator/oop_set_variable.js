import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_set_variable"] = function(block, generator) {
  const variable = generator.valueToCode(block, 'VARIABLE', Order.ATOMIC);
  const value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);

  return variable + " = " + value + ";\n";
}