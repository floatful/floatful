# Floatful Changelog

Here is where you can see all of the changes to Floatful by the developers, categorized by day, by developer. This is not so much for official release logs, but more so for personal ease of remembering what I last was doing and what I next wanted to get done. If development reaches beyond myself I will likely remove this file and implement something more official to track development work across different contributors.

These updates are stored in reverse-chronological order- so the latest updates appear first.

This changelog was started on March 13th 2023, so all changes before this are not listed here.

## [2023.04.13]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   Switched from create-react-app to vite
    -   I did this partially because create-react-app was giving me errors for trying to add styled-components, and partly because I heard vite was easier to work with
    -   Much of the visual interface of the application is gone sadly, and I needed to switch it to typescript anyways so I'll just have to work to get back that stuff in the next couple of weeks.

## [2023.04.09]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   Separated PredefinedColors and NumericUnits into their own Typescript files, for more separation and just in case I need to use them in other files.
-   Converted rulesReducer to typescript
    -   The slow process of conversion continues. Reducers are still new to me, and I'm not sure if the version I created tonight will be final, because the Action type feels unneccessarily complicated. But this will help later on when the app becomes more complex. (even though it already feels so complex it's a bit hard to keep track of already.)

### Going Forward:

There's 13 more files as of today to convert, but many of these will be converted to .tsx files which contain a lot less logic, so hopefully they are a bit easier. I'm a bit scared to start working on the property editing components again. Now that I've abstracted the types and I know how I want the view to behave for each individual value, I realize there is a lot of work that needs to be done with viewing the property editing menu. That will be my main focus once I get the files converted.

## [2023.04.07-08]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   Started the move to Typescript
    -   The main reason I decided to start switching everything to Typescript is that I have an interview that requires basic knowledge of typescript and I've been wanting to try it out for a little while. I actually really like it, it makes JS feel a bit more like Java because of the explicit types. It took a bit to get used to since I haven't worked with Java in about a year, but it feels more intentional when it comes to designing methods and classes.
-   Completely abstracted Property types from the main Property class
    -   The implementation is a bit weird, I've only had a little bit to think on it so I might decide to refactor this as an interface, but as of right now, the Property class still stands, with the values it can hold being interfaced instead. I thought this might allow for more flexible requirements for values, since theres so many different combinations that exist with CSS. It's definitely going to be complicated getting some of the nuances to general properties like animations, background, and even margin and padding accounted for. Probably won't worry about it until May/June or later, once I have the barebones stuff done.
-   Created Archival folder
    -   Because I've significantly refactored the foundational code for data handling, I decided to save the old files in a new folder for archiving stuff that isn't in production but might be useful later. That way if everything goes to crap I can at least look at the old code in the same folder to see what's up.

### NEXT TO-DOs

-   Finish converting stuff to TypeScript/TSX
    -   This is gonna take a while, I'll slowly be going over everything over the next couple weeks.
-   Unabstract property types for components, create different components for each value type for input.
    -   Refactoring and abstracting has basically destroyed the actual app, so it won't show anything until I get this fixed.

## [2023.04.05]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   RGBAPicker's sliders now work as intended
    -   Opacity slider was changed from a 0-1 scale to a 0-255 scale to match hex color specs

## [2023.03.25]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   Added ColorSelector and RGBAPicker components, which attempt to create a more streamlined approach to choosing and editing color-based properties like background-color and color.
    -   The RGBAPicker component is almost complete, but needs further testing once ColorSelector has been implemented. It actually uses hex values, but RGBA values are easier for html ranges
    -   The ColorSelector component has not been implemented, and will likely require an entire rewrite to the way that properties are displayed, including an abstraction of Property.js into different types for different types of values like colors, lengths, and predefined values. Colors are the hardest and require the possibity of hexadecimal, rgb, rgba, hsl, and predefined values. However, Floatful will currently only support HEX/rgb/rgba and predefined css values like "black", "seafoam", etc.
-   Added exporting folder and the CSSExporter class. This class is blank as I don't want to focus on exporting styles until the app can accurately create and edit styles. However, I wanted to add the file into the program as a placeholder for later.

## [2023.03.23]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   Added validateColorRGBA function
-   Added property deletion functionality

### NEXT TODOS:

-   Look into StreamSaver.js or whatwg/fs for file exporting

## [2023.03.13]

Author: [Hunter Ball](https://github.com/hunterball)

### Update Notes:

-   Added color values JSON file in data folder
-   Added functionality to isValidColorName function in validateCSSProperty.js
    -   currently not implemented or tested
-   Added changelog for overviews of updates and near-future goals/tasks

### NEXT TODOS:

-   Start adding "validations" to css properties that can take in non-predefined values
-   Implement validation with css properties based on property validation functions and values
-   Add delete property functionality.
