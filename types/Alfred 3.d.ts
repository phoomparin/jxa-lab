
export namespace Alfred3 {
    // Default Application
 export interface Application {}
    // Class
    
    // CLass Extension
    
    // Records

    // Function options



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RunTriggerOptionalParameter {
      /**
       * The workflow bundle identifer
       */
      inWorkflow: string;
      /**
       * An optional argument
       */
      withArgument?: string;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SetConfigurationOptionalParameter {
      /**
       * The value to set
       */
      toValue: string;
      /**
       * The workflow bundle identifer
       */
      inWorkflow: string;
      /**
       * If this variable is fine for export, i.e. the Don't Export box is left unchecked (Defaults to Don't Export)
       */
      exportable?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RemoveConfigurationOptionalParameter {
      /**
       * The workflow bundle identifer
       */
      inWorkflow: string;
    }


}
export interface Alfred3 extends Alfred3.Application {
    // Functions

     /**
      * Show Alfred with the given text
      * @param directParameter The search string to populate Alfred with
      * 
      */
     search(directParameter?: string, ): void;

     /**
      * Show Alfred actions for the given file
      * @param directParameter The path to the file to show actions for
      * 
      */
     action(directParameter: any, ): void;

     /**
      * Show Alfred file system navigation for given path
      * @param directParameter The path or search string to browse
      * 
      */
     browse(directParameter: string, ): void;

     /**
      * Run Alfred workflow trigger
      * @param directParameter 
      * @param option
      * 
      */
     runTrigger(directParameter: string, option?: Alfred3.RunTriggerOptionalParameter): void;

     /**
      * Set workflow configuration variable with given name
      * @param directParameter 
      * @param option
      * 
      */
     setConfiguration(directParameter: string, option?: Alfred3.SetConfigurationOptionalParameter): void;

     /**
      * Remove workflow configuration variable with given name
      * @param directParameter 
      * @param option
      * 
      */
     removeConfiguration(directParameter: string, option?: Alfred3.RemoveConfigurationOptionalParameter): void;

     /**
      * Change theme in Alfred
      * @param directParameter The name of the theme to switch to
      * 
      */
     setTheme(directParameter: string, ): void;
}
