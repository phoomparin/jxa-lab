
export namespace Fantastical2 {
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
  * Fantastical application object
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
       * Notes to add to the event or reminder
       */
      notes?: string;
      /**
       * Internal identifier of the calendar to add the event or reminder to. If you don't know what the identifier is you should use the calendarName parameter.
       */
      calendar?: string;
      /**
       * Calendar name to add the event or reminder to. This can be a partial name and Fantastical will search for the best match.
       */
      calendarName?: string;
      /**
       * If true the sentence is parsed and immediately added to the calendar.
       */
      addImmediately?: boolean;
      /**
       * If true the parsed attendees will be invited to the event.
       */
      addAttendees?: boolean;
    }

}
export interface Fantastical2 extends Fantastical2.Application {
    // Functions

     /**
      * parse sentence
      * @param directParameter sentence to parse
      * @param option
      * 
      */
     parseSentence(directParameter: string, option?: Fantastical2.ParseSentenceOptionalParameter): void;
}
