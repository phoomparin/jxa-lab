
export namespace SystemPreferences {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * a preference pane
  */
 export interface Pane {
   /**
    * locale independent name of the preference pane; can refer to a pane using the expression: pane id "<name>"
    */
   id(): string;
   /**
    * localized name of the preference pane
    */
   localizedName(): string;
   /**
    * name of the preference pane as it appears in the title bar; can refer to a pane using the expression: pane "<name>"
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * an anchor within a preference pane
  */
 export interface Anchor {
   /**
    * name of the anchor within a preference pane
    */
   name(): string;
 }
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * System Preferences top level scripting object
  */
 export interface Application {
   /**
    * the currently selected pane
    */
   currentPane(): any;
   /**
    * the main preferences window
    */
   preferencesWindow(): any;
   /**
    * Is SystemPrefs in show all view. (Setting to false will do nothing)
    */
   showAll(): boolean;
 }
    
    // Records

    // Function options



}
export interface SystemPreferences extends SystemPreferences.Application {
    // Functions

     /**
      * Reveals an anchor within a preference pane or preference pane itself
      * @param directParameter undefined
      * @return undefined
      */
     reveal(directParameter: {}, ): void;

     /**
      * Prompt authorization for given preference pane
      * @param directParameter undefined
      * @return undefined
      */
     authorize(directParameter: SystemPreferences.Pane, ): void;

     /**
      * Times and loads given preference pane and returns load time.
      * @param directParameter undefined
      * @return undefined
      */
     timedLoad(directParameter: SystemPreferences.Pane, ): any;
}
