import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_getreturn_variable"] = function(block, generator) {
  const value_method = generator.valueToCode(block, 'NAME', Order.FUNCTION_CALL);
  let value_of = generator.valueToCode(block, 'VALUE', Order.NONE);
  
  if (value_of.charAt(value_of.length - 1) === ".") {
    value_of = value_of.slice(0, -1);
  }
  const code = value_of + "." + value_method;
  return [code, Order.ATOMIC];
}