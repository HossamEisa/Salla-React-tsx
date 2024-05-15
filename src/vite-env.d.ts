/// <reference types="vite/client" />
// Declare a custom type or interface
interface MyCustomType {
    // Define properties and methods
    prop1: string;
    prop2: number;
    method(): void;
  }
  
  // Augment the global TypeScript namespace
  declare global {
    // Add the custom type or interface to the global namespace
    namespace NodeJS {
      interface Global {
        myCustomVariable: MyCustomType;
      }
    }
  }