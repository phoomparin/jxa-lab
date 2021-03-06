
export namespace Cardhop {
    // Default Application
 export interface Application {}
    // Class
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Cardhop application object
  */
 export interface Application {}
    
    // Records

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ParseSentenceOptionalParameter {
      /**
       * If true the sentence is parsed and immediately saved.
       */
      addImmediately?: boolean;
    }

}
export interface Cardhop extends Cardhop.Application {
    // Functions

     /**
      * parse sentence
      * @param directParameter sentence to parse
      * @param option
      * 
      */
     parseSentence(directParameter: string, option?: Cardhop.ParseSentenceOptionalParameter): void;
}
