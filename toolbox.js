export const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Logic",
        "colour": 210,
        "contents": [
          {
            "kind": "block",
            "type": "controls_if",
          },
          {
            "kind": "block",
            "type": "logic_compare",
          },
          {
            "kind": "block",
            "type": "logic_operation",
          },
          {
            "kind": "block",
            "type": "logic_negate",
          },
          {
            "kind": "block",
            "type": "logic_null",
          },
        ],
      },
      {
        "kind": "category",
        "name": "Loops",
        "colour": 120,
        "contents": [
          {
            "kind": "block",
            "type": "controls_repeat_ext",
          },
          {
            "kind": "block",
            "type": "controls_whileUntil",
          },
          {
            "kind": "block",
            "type": "controls_for",
          },
          {
            "kind": "block",
            "type": "controls_forEach",
          },
          {
            "kind": "block",
            "type": "controls_flow_statements",
          },
        ],
      },
      {
        "kind": "category",
        "name": "Math",
        "colour": 225,
        "contents": [
          {
            "kind": "block",
            "type": "math_number",
          },
          {
            "kind": "block",
            "type": "math_arithmetic",
          },
          {
            "kind": "block",
            "type": "math_single",
          },
          {
            "kind": "block",
            "type": "math_trig",
          },
          {
            "kind": "block",
            "type": "math_constant",
          },
          {
            "kind": "block",
            "type": "math_number_property",
          },
          {
            "kind": "block",
            "type": "math_round",
          },
          {
            "kind": "block",
            "type": "math_on_list",
          },
          {
            "kind": "block",
            "type": "math_modulo",
          },
          {
            "kind": "block",
            "type": "math_constrain",
          },
          {
            "kind": "block",
            "type": "math_random_int",
          },
          {
            "kind": "block",
            "type": "math_random_float",
          },
        ],
      },
      {
        "kind": "category",
        "name": "Text",
        "colour": 165,
        "contents": [
          {
            "kind": "block",
            "type": "text",
          },
          {
            "kind": "block",
            "type": "text_join",
          },
          {
            "kind": "block",
            "type": "text_append",
          },
          {
            "kind": "block",
            "type": "text_length",
          },
          {
            "kind": "block",
            "type": "text_isEmpty",
          },
          {
            "kind": "block",
            "type": "text_indexOf",
          },
          {
            "kind": "block",
            "type": "text_charAt",
          },
          {
            "kind": "block",
            "type": "text_getSubstring",
          },
          {
            "kind": "block",
            "type": "text_changeCase",
          },
          {
            "kind": "block",
            "type": "text_trim",
          },
          {
            "kind": "block",
            "type": "text_print",
          },
          {
            "kind": "block",
            "type": "text_prompt_ext",
          },
        ],
      },
      {
        "kind": "category",
        "name": "Lists",
        "colour": 260,
        "contents": [
          {
            "kind": "block",
            "type": "lists_create_with",
          },
          {
            "kind": "block",
            "type": "lists_repeat",
          },
          {
            "kind": "block",
            "type": "lists_push",
          },
          {
            "kind": "block",
            "type": "lists_length",
          },
          {
            "kind": "block",
            "type": "lists_isEmpty",
          },
          {
            "kind": "block",
            "type": "lists_indexOf",
          },
          {
            "kind": "block",
            "type": "lists_getIndex",
          },
          {
            "kind": "block",
            "type": "lists_setIndex",
          },
          {
            "kind": "block",
            "type": "lists_getSublist",
          },
          {
            "kind": "block",
            "type": "lists_split",
          },
          {
            "kind": "block",
            "type": "lists_sort",
          },
        ],
      },
      {
        "kind": "sep",
      },
      {
        "kind": "category",
        "name": "Variables",
        "custom": "OOP_VARIABLES",
        "colour": 330,
      },
      {
        "kind": "category",
        "name": "OOP",
        "colour": 45,
        "contents": [
          {
            "kind": "block",
            "type": "oop_this",
          },
          {
            "kind": "block",
            "type": "oop_createconstructor",
          },
          {
            "kind": "block",
            "type": "oop_create",
          },
        ],
      },
      {
        "kind": "category",
        "name": "Methods",
        "colour": 290,
        "contents": [
          {
            "kind": "block",
            "type": "oop_method_def",
          },
          {
            "kind": "block",
            "type": "oop_method_def_return",
          },
          {
            "kind": "block",
            "type": "oop_method_return",
          },
          {
            "kind": "block",
            "type": "oop_method_callreturn",
          },
          {
            "kind": "block",
            "type": "oop_method_callnoreturn",
          },
        ],
      }
    ],
};

export const options = {
  toolbox: toolbox,
  collapse: true,
  comments: true,
  disable: false,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: 'start',
  css: true,
  rtl: false,
  scrollbar: true,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 1,
    colour: '#888',
    snap: false,
  },
};