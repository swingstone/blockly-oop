import { javascriptGenerator, Order } from "blockly/javascript.js";

javascriptGenerator.forBlock["oop_method_call"] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const callBlock = block;
  const parameters = new Array(callBlock.itemCount_);
  for (let i = 0; i < callBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC) || "null";
  }
  const code = name + "(" + parameters.join(', ') + ")";
  return [code, Order.ATOMIC];
};

javascriptGenerator.forBlock["oop_method_callreturn"] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  let caller = generator.valueToCode(block, 'OBJECT', Order.ATOMIC);
  if (caller.charAt(caller.length - 1) === ".") caller = caller.slice(0, -1);
  const callBlock = block;
  const parameters = new Array(callBlock.itemCount_);
  for (let i = 0; i < callBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC) || "null";
  }
  const code = caller + "." + name + "(" + parameters.join(', ') + ")";
  return [code, Order.ATOMIC];
}

javascriptGenerator.forBlock["oop_method_callnoreturn"] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  let caller = generator.valueToCode(block, 'OBJECT', Order.ATOMIC);
  if (caller.charAt(caller.length - 1) === ".") caller = caller.slice(0, -1);
  const callBlock = block;
  const parameters = new Array(callBlock.itemCount_);
  for (let i = 0; i < callBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC) || "null";
  }
  return caller + "." + name + "(" + parameters.join(', ') + ");";
}

javascriptGenerator.forBlock["oop_method_def_return"] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const className = block.workspace.injectionDiv.parentElement.id.replace("blockly", "");
  const methodBlock = block;
  const parameters = new Array(methodBlock.itemCount_);
  for (let i = 0; i < methodBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
  }
  const content = generator.statementToCode(block, 'CONTENT');

  return className + ".prototype." + name + " = function(" + parameters.join(', ') + ") {\n" + content + "}\n";
}

javascriptGenerator.forBlock["oop_method_def"] = function (block, generator) {
  const name = block.getFieldValue('NAME');
  const className = block.workspace.injectionDiv.parentElement.id.replace("blockly", "");
  const methodBlock = block;
  const parameters = new Array(methodBlock.itemCount_);
  for (let i = 0; i < methodBlock.itemCount_; i++) {
    parameters[i] = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
  }
  const content = generator.statementToCode(block, 'CONTENT');
  
  return className + ".prototype." + name + " = function(" + parameters.join(', ') + ") {\n" + content + "}\n";
};