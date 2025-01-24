import {ModuleDeclartion,FunctionDeclartion} from '../helpers/declare.js';

const CoreIO = new ModuleDeclartion("Core.IO");

// Hàm print
CoreIO.addFunction("print", new FunctionDeclartion({
  name: "print",
  args: [
    {
      type: "STRING",
      name: "message",
      defaultValue: "your message"
    },
    {
      type: "BLOCK",
      name: "message",
      defaultValue: "your message"
    }
  ]
}));

CoreIO.addFunction("input", new FunctionDeclartion({
  name: "input",
  args: [
    {
      type: "STRING",
      name: "prompt",
      defaultValue: "Enter something:"
    }
  ],
  returnType: "STRING"
}));

// Hàm writeFile (ghi dữ liệu vào file)
CoreIO.addFunction("writeFile", new FunctionDeclartion({
  name: "writeFile",
  nodeType:"function",
  args: [
    {
      type: "STRING",
      name: "filename",
      defaultValue: "output.txt"
    },
    {
      type: "STRING",
      name: "content",
      defaultValue: "file content"
    }
  ],
  returnType: "BOOLEAN"
}));

// Hàm readFile (đọc dữ liệu từ file)
CoreIO.addFunction("readFile", new FunctionDeclartion({
  name: "readFile",
  args: [
    {
      type: "STRING",
      name: "filename",
      defaultValue: "input.txt"
    }
  ],
  returnType: "STRING"
}));

// Hàm clearConsole (xóa màn hình console)
CoreIO.addFunction("clearConsole", new FunctionDeclartion({
  name: "clearConsole",
  args: [],
  returnType: "VOID"
}));
export const EditorContext = Turtle.createContext("editor",{
  name:"03030",
  modules:{
    "Core.IO":CoreIO
  }
})