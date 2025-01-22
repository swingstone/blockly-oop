import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_this"] = function(block, generator) {
  const name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  
  const code = "this." + name;
  return [code, Order.ATOMIC];
}