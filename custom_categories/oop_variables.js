import * as Blockly from "blockly";

export let variables = [];

export function loadVariables(vars) {
  for (let i = 0; i < vars.length; i++) {
    if (variables.includes(vars[i])) {
      continue;
    }
    variables.push(vars[i]);
  }
}

export const oopVariablesFlyoutCallback = function(workspace) {
  const blockList = [
    {
      "kind": "button",
      "text": "Create variable...",
      "callbackKey": "createNewVariable",
    },
    {
      "kind": "block",
      "type": "oop_set_variable",
    },
  ];
  for (let i = 0; i < variables.length; i++) {
    blockList.push({
      "kind": "block",
      "type": "oop_variable",
      "fields": {
        "NAME": variables[i],
      },
    });
  }
  return blockList;
};

export const createNewVariable = function(workspace) {
  let name = "";
  let legalName = false;
  while (!legalName) {
    name = window.prompt("New variable name:\n\n");
    if (!name) {
      // No name was provided.
      return;
    }
    const nameRegEx = /^[a-zA-Z0-9]*$/;
    // Does the name only contain alphanumeric characters?
    if (!nameRegEx.test(name)) {
      window.alert("The provided name does not meet the criteria for a variable!\nThe can only contain alphanumeric characters.");
      continue;
    }
    const firstChar = name.charAt(0);
    const firstCharRegEx = /[a-z\s]+/;
    // Is the first character a lower case letter?
    if (!firstCharRegEx.test(firstChar)) {
      window.alert("The provided name does not meet the criteria for a variable!\nThe first character must be a lower case letter.");
      continue;
    }
    // Does this name already exist?
    if (variables.includes(name)) {
      window.alert("This variable already exists.");
      continue;
    }
    // At this point the name matches all the criteria for a name, so move on.
    legalName = true;
  }
  variables.push(name);
  variables.sort();
}