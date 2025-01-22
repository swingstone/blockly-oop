import {javascriptGenerator, Order} from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_create"] = function(block, generator) {
  const object = block.getFieldValue('NAME');
  const createBlock = block;
  const parameters = new Array(createBlock.itemCount_);
  for (let i = 0; i < createBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC) || 'null';
  }
  const code = "new " + object + "(" + parameters.join(", ") + ")";
  return [code, Order.ATOMIC];
}

javascriptGenerator.forBlock["oop_createconstructor"] = function (block, generator) {
  const constructorBlock = block;
  const name = block.getFieldValue('NAME');
  const parameters = new Array(constructorBlock.itemCount_);
  for (let i = 0; i < constructorBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC) || 'null';
  }
  const content = generator.statementToCode(block, 'CONTENT');

  return "function " + name + "(" + parameters.join(', ') + ") {\n" + content + "}\n";
}