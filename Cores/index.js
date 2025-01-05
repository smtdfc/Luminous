import {LuminousFunctionDeclaration} from "./declarations.js"
import {LuminousTypes} from './types.js';

export const GLOBAL_FUNCTIONS = {
  "print": new LuminousFunctionDeclaration({
    name: "print",
    displayName: "Print into console",
    args: [
      {
        name: "message",
        type: LuminousTypes.Int
      },
      {
        name: "a",
        type: LuminousTypes.Int
      },
      {
        name: "b",
        type: LuminousTypes.Int
      },
      {
        name: "d",
        type: LuminousTypes.Int
      },
      {
        name: "c",
        type: LuminousTypes.Int
      },
    ]
  }),
  "call": new LuminousFunctionDeclaration({
    name: "call",
    displayName: "Call pap",
    args: [
      {
        name: "message",
        type: LuminousTypes.Int
      },
      {
        name: "a",
        type: LuminousTypes.Int
      },
      {
        name: "b",
        type: LuminousTypes.Int
      },
      {
        name: "d",
        type: LuminousTypes.Int
      },
      {
        name: "c",
        type: LuminousTypes.Int
      },
    ]
  }),
}
