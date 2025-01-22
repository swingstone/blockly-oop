import { javascriptGenerator } from "blockly/javascript.js";

javascriptGenerator.forBlock['oop_class'] = function(block, generator) {
  const name = block.getFieldValue('NAME');
  const content = generator.statementToCode(block, 'CONTENT');
  
  return 'class ' + name + ' {\n' + content + '}\n';
};