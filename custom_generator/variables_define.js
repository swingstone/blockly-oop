import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock["variables_define"] = function(block, generator) {
  const name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const value = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
  
  return "var " + name + " = " + value + ";\n";
}