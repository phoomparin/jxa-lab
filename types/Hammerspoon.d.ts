
export namespace Hammerspoon {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The application's top-level scripting object.
  */
 export interface Application {
   /**
    * The name of the application.
    */
   name(): string;
   /**
    * Is this the active application?
    */
   frontmost(): boolean;
   /**
    * The version number of the application.
    */
   version(): string;
 }
    
    // CLass Extension
    
    // Records

    // Function options


}
export interface Hammerspoon extends Hammerspoon.Application {
    // Functions

     /**
      * Quit the application.

      * 
      */
     quit(): void;

     /**
      * Execute Lua Code.
      * @param directParameter The string to execute
      * @return Returns the Lua Code Execution Result.
      */
     executeLuaCode(directParameter: {}, ): string;
}
