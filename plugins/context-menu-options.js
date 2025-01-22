import * as Blockly from "blockly";

/**
 * Adds context menu option to all blocks to copy the block to local storage.
 */
function blockCopyToStorage() {
  const copyToStorageOption = {
    displayText: function() {
      return "Copy to stash";
    },
    
    preconditionFn: function(scope) {
      return "enabled";
    },
    
    callback: function(scope) {
      const state = Blockly.serialization.blocks.save(scope.block);
      localStorage.setItem("blocklyStash", JSON.stringify(state));
    },
    
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: "blockCopyToStorage",
    weight: 0,
  };
  Blockly.ContextMenuRegistry.registry.register(copyToStorageOption);
}

/**
 * Adds context menu option to paste a block from local storage.
 */
function blockPasteFromStorage() {
  const pasteFromStorageOption = {
    displayText: function() {
      return "Paste from stash";
    },
    
    preconditionFn: function(scope) {
      if (localStorage.getItem("blocklyStash")) {
        return "enabled";
      } else {
        return "disabled";
      }
    },
    
    callback: function(scope) {
      const state = JSON.parse(localStorage.getItem("blocklyStash"));
      Blockly.serialization.blocks.append(state, scope.workspace);
    },
    
    scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
    id: "blockPasteFromStorage",
    weight: 0,
  };
  Blockly.ContextMenuRegistry.registry.register(pasteFromStorageOption);
}

/**
 * Adds context menu option to debug selected Block
 */
function blockDebugToConsole() {
  const debugBlockToConsole = {
    displayText: function() {
      return "Debug this Block";
    },

    preconditionFn: function(scope) {
      return "enabled";
    },

    callback: function(scope) {
      const state = Blockly.serialization.blocks.save(scope.block);
      console.log(state)
    },

    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: "debugBlockToConsole",
    weight: 0,
  };
  Blockly.ContextMenuRegistry.registry.register(debugBlockToConsole);
}

// Register the menus.
blockCopyToStorage();
blockPasteFromStorage();
blockDebugToConsole()