import * as Blockly from "blockly";
import {workspaces} from "../plugins/block-shareable-procedures.js";
import {variables} from "../custom_categories/oop_variables.js";

/**
 * Gets called by Event BLOCK_CHANGE
 *
 * @param eventJson JsonData of the event
 * @param workspace the workspace in which the event occurred
 */
export function blockChanged(eventJson, workspace) {
    let type = workspace.getBlockById(eventJson.blockId).type;
    if (type === "oop_method_def" || type === "oop_method_def_return") {
        let allBlocks = [];
        let blocksToChange = [];

        workspaces.forEach(workspace => {
            const blocksInWorkspace = workspace.getAllBlocks(false);
            allBlocks = allBlocks.concat(blocksInWorkspace);
        });

        allBlocks.forEach(block => {
            if ((block.type === "oop_method_callreturn" || block.type === "oop_method_callnoreturn") &&
                getExtraStateElement(block, "declarationBlockID") === eventJson.blockId) {
                blocksToChange.push(block);
            }
        });

        blocksToChange.forEach(block => {
            if (eventJson.element === "field") {
                block.setFieldValue(eventJson.newValue, "NAME");
            } else if (eventJson.element === "mutation") {
                const jsonObject = JSON.parse(eventJson.newValue);
                block.itemCount_ = jsonObject.itemCount
                block.updateShape_()
            }
        })
    }
}

function createMethodBlockData(block, type) {
    const itemCount = getExtraStateElement(block, "itemCount")
    return {
        "kind": "block",
        "type": type,
        "fields": {
            "NAME": block.getFieldValue("NAME")
        },
        "extraState": {
            "itemCount": itemCount,
            "declarationBlockID": block.id
        }
    };
}

function getExtraStateElement(Block, field) {
    return Blockly.serialization.blocks.save(Block).extraState[field];
}

/**
 * This is the callback function which will be called each time the custom category is opened.
 * It creates the custom blocks and adds them to the category
 */

export const oopDynMethodsFlyoutCallback = function (workspace, wsId) {
    const blockList = [];
    let allBlocks = [];
    let names = [];

    workspaces.forEach(workspace => {
        const blocksInWorkspace = workspace.getAllBlocks(false);
        allBlocks = allBlocks.concat(blocksInWorkspace);
    });

    // Iterate through all blocks to find relevant ones for the specified workspace
    allBlocks.forEach(block => {
        // Check if the block belongs to the current workspace
        if (block.workspace.id === wsId) {
            // Handle method definition blocks
            if (block.type === "oop_method_def") {
                blockList.push(createMethodBlockData(block, "oop_method_callnoreturn"));
            }
            // Handle method definition return blocks
            else if (block.type === "oop_method_def_return") {
                blockList.push(createMethodBlockData(block, "oop_method_callreturn"));
            }
            // Handle method constructor blocks
            else if (block.type === "oop_createconstructor") {
                blockList.push(createMethodBlockData(block, "oop_create"));
            }
            // Handle 'this' blocks
            else if (block.type === "oop_this") {
                // Get the connected block from the 'this' block
                const inputs =  Blockly.serialization.blocks.save(block).inputs;

                if (inputs) {
                    const connectedBlock = inputs.NAME.block
                    // Check if the connected block is a variable and not already included
                    if (connectedBlock.type === "oop_variable" && !names.includes(connectedBlock.fields.NAME)) {
                        // Add the variable name to the names array
                        names.push(connectedBlock.fields.NAME);

                        // Push the variable block to the block list
                        blockList.push({
                            "kind": "block",
                            "type": "oop_this",
                            "inputs": {
                                "NAME": {
                                    "block": connectedBlock,
                                }
                            }
                        });
                    }
                }

            }
        }
    });

    return blockList;
};