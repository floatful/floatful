# Floatful Changelog

Here is where you can see all of the changes to Floatful by the developers, categorized by day, by developer. This is not a list of changes for each commit, but rather an overview for all the commit changes over the course of the day by the developer. It also allows us to see our current goals and tasks that have not been accomplished, so it's easier to get back on track the next day/week.
These updates are stored in reverse-chronological order- so the latest updates appear first.

## [2023.03.25] - Hunter Ball

### Update Notes:

-   Added ColorSelector and RGBAPicker components, which attempt to create a more streamlined approach to choosing and editing color-based properties like background-color and color.
    -   The RGBAPicker component is almost complete, but needs further testing once ColorSelector has been implemented. It actually uses hex values, but RGBA values are easier for html ranges
    -   The ColorSelector component has not been implemented, and will likely require an entire rewrite to the way that properties are displayed, including an abstraction of Property.js into different types for different types of values like colors, lengths, and predefined values. Colors are the hardest and require the possibity of hexadecimal, rgb, rgba, hsl, and predefined values. However, Floatful will currently only support HEX/rgb/rgba and predefined css values like "black", "seafoam", etc.
-   Added exporting folder and the CSSExporter class. This class is blank as I don't want to focus on exporting styles until the app can accurately create and edit styles. However, I wanted to add the file into the program as a placeholder for later.

## [2023.03.23] - Hunter Ball

### Update Notes:

-   Added validateColorRGBA function
-   Added property deletion functionality

### NEXT TODOS:

-   Look into StreamSaver.js or whatwg/fs for file exporting

## [2023.03.13] - Hunter Ball

### Update Notes:

-   Added color values JSON file in data folder
-   Added functionality to isValidColorName function in validateCSSProperty.js
    -   currently not implemented or tested
-   Added changelog for overviews of updates and near-future goals/tasks

### NEXT TODOS:

-   Start adding "validations" to css properties that can take in non-predefined values
-   Implement validation with css properties based on property validation functions and values
-   Add delete property functionality.
