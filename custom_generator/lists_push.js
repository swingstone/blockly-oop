import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock['lists_push'] = function(block, generator) {
  const name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const push = generator.valueToCode(block, 'PUSH', Order.ATOMIC);

  return name + ".push(" + push + ");\n";
};