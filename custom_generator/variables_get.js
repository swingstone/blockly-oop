import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_variable"] = function(block, generator) {
  const name = block.getFieldValue('NAME');
  return [name, Order.ATOMIC];
}