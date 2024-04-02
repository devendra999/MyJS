6) Difference between pseudo class and psuedo elements
  Pseudo-classes enable you to target an element when it's in a particular state, as if you had added a class for that state to the DOM. Pseudo-elements act as if you had added a whole new element to the DOM, and enable you to style that.
  Pseudo class: hover, visited, link, focus, first-child, last-child, , checked
  Pseudo elements: before, after, first-line, 



7) What is Doctype
	- All HTML documents must start with a <!DOCTYPE html> declaration.
	- The declaration is not an HTML tag. It is an "information" to the about  what document type to expect.


 
8) What is HTML?
  HTML stands for Hyper Text Markup Language
  HTML is the standard markup language for creating Web pages
  HTML describes the structure of a Web page



9) HTML5 tag
Header, footer, address, area, article, article, audio, video,  city, details, figure, picture, nav, 



10) What is semantic HTML?
Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML tag is header, nav, aside, main, section, article, p,  figure, footer.



11) What is an image map?
	Image map facilitates you to link many different web pages using a single image. It is represented by <map> tag. You can define shapes in images that you want to make part of an image mapping.


 
13) How to create a nested webpage in HTML?
The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage. The HTML <iframe> tag defines an inline frame. For example:



23) What are empty elements?
	HTML elements with no content are called empty elements. For example:  <br>, <hr> etc.


 
23) What are void tags or self closing tags?
	<br/>, <hr/>, input, meta, link



29) What is the canvas element in HTML5?
The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript. It allows for dynamic and scriptable rendering of 2D shapes and bitmap images. There are several methods in canvas to draw paths, boxes, circles, text and add images. For Example:



31) What is formatting tag in html?
  b, strong, I tags



30) What is SVG?
  HTML SVG is used to describe the two-dimensional vector and vector/raster graphics.



36) 34. What is the difference between <figure> tag and <img> tag?
  <figure> tag is used to semantically organize the contents of an image like image, image caption, etc., whereas the <img> tag is used to embed the picture in the HTML5 document



5) What are HTML Entities?
	In HTML some characters are reserved like ‘<’, ‘>’, ‘/’, etc. To use these characters in our webpage we need to use the character entities called HTML Entities.



11) How to optimize website assets loading?
  Using Lazy loading, minify scfripts, remove unnecessary code, cdn hoisting, file concatination it is reduced the file.

  

42) Difference between SVG and Canvas HTML5 element?
  SVG is a vector based, 
  SVG can be modified using CSS and scripts., SVG is highly scalable
  It is Raster based , 
  Canvas can only be modified using scripts., 
  It is less scalable.






================================================================================================================
CSS
================================================================================================================


1. What is CSS?
    CSS stands for Cascading Style Sheets
    CSS describes how HTML elements are to be displayed on screen, paper, or in other media



What is em and rem ?
    Em is depend on it parents size
    Rem is depend on html size


2.CSS 3
    Border-radius, box-shadow, text-shadow, text-stroke, text-overflow, display flex,transition, transform, border-radius, animation, column-count, direction, flex, fealter, drop-shadow



3.CSS Selectors
    Simple selectors (select elements based on name, id, class)
    Combinator selectors (select elements based on a specific relationship between them)
    Pseudo-class selectors (select elements based on a certain state)
    Pseudo-elements selectors (select and style a part of an element)
    Attribute selectors (select elements based on an attribute or attribute value)



4. Use CSS
    External CSS
    Internal CSS
    Inline CSS



5. What is The Viewport?
    The viewport is the user's visible area of a web page.



36. Difference between CSS grid vs flexbox?0
    CSS Grid Layout is a two-dimensional system along with rows and columns.
    Flexbox is a Grid layout with a one-dimensional system either within a row or a column.



What is Grid Layout?
    The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.


    
Display gird explanation
.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px; - define manual width using this
  grid-template-rows: 80px 200px; - define manual height using this
  row-gap: 50px; - space 50 between row
  column-gap: 50px; - space 50 between column
  grid-template-columns: auto auto auto; - How much div show here 3 divs are show
}

.gird-item {
	grid-column-start: 1; - place a grid item at column line1, and let it end on column line 3
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;
grid-column: 1 / 5; -  start on column 1 and end before column 5:
grid-row: 1 / 4; - start on row 1 and end before column 4
grid-column: 1 / span 3; - Item1 will start on column-line 1 and span 3 columns:
grid-row: 1 / span 2; - item1 start on row 1 and span 2 rows:
grid-area: 1 / 2 / 5 / 6; - start on row-line 1 and column-line 2, and end on row-line 5 column-line 6 - it’s shorthand property of grid-row and grid-column

}


2. What do you understand by the universal sector? 
    A universal selector is a selector that matches any element type's name instead of selecting elements of a particular type. 
    <style>    * {  color: blue;       font-size: 10px;    }     </style>
    

4. What are the elements of the CSS Box Model?
    The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

17. What is the difference between inline, inline-block, and block?
    Block Elements are <div> and <p>. They usually start on a new line and can take space for an entire row or width.
    Inline elements are <a>, <span>, <strong>, and <img> tags. They don't start on a new line. However, they appear on the same line as the content and tags beside them.
    Inline block elements have padding and margins and set height and width values. Though, they are similar to inline elements. 


19. What are Pseudo classes?
    the anchor tags are link, visited, hover, active, focus, visited, target, focus-whithin



20. How do you specify units in the CSS? What are the different ways to do it?
    There are mainly four different units in the CSS that are px, em, pt, and percentage (%).

    Px (Pixel) is used for fine-grained control and alignment and not cascade. To get it sharp, we can use 1px or multiple of px.
    Em is used to maintain relative size and responsive fonts. 1em = 16px having also the same font size. It is advisable to set the font size to 10px in common practice.
    Pt (point) is a fixed-size unit that is used in print. 1pt = 1/72 inch.
    Percentage (%) is used to set the font size with respect to the font size of the body. Thus, it is necessary to set the reasonable font size of the body.



25. How is the border-box different from the content box?
    Border-box consists of properties such as content, padding, and the border with respect to height and width. However, Content-box is a default value property used for the box-sizing as well as it helps to add border and padding to give proper height and width to the box without having a border and padding properties.



4. How can you optimize the webpage for prints?
	Optimize page: image optimize and take width and height, remove unnecsoy code,  Reduce the number of plugins, css and js files used to be minfied, Database optimization in CMS, Use website caching



The CSS mask-image Property
    The CSS mask-image property specifies a mask layer image.
    The mask layer image can be a PNG image, an SVG image, a CSS gradient, or an SVG <mask> element.



5. What is WWW or what is Web
    World Wide Web, which is also known as a Web, is a collection of websites or web pages stored in web servers and connected to local computers through the internet. 


.container {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* give three columns width 200 each*/
    grid-template-rows: 200px 200px 200px; /* give three columns height 200 each */
    grid-template-columns: repeat(3, 200px); /* give three columns width 200 each */
    grid-template-columns: repeat(3, 200px); /* give three columns height 200 each */
    grid-template-columns: 200px repeat(1, 300px) 200px; /* give three columns width 200 for first and third and second div give width 300px */
    grid-template-columns: 1fr 1fr 1fr; /* one fractunal unit cover all extra space */
    grid-column-gap: 30px; /* gap between columns */
    grid-row-gap: 30px; /* gap between rows */
    grid-gap: 30px; /* gap between rows and columns */
}


/* Change Position:  change grid item-1 to item-3  and item-3 to item-1
======================================================================*/
.item-1 {
    grid-column-start: 3;
    grid-column-end: 4;
}


.item-2 {
    grid-row: 1/2; /* grid-row is sort of grid-row-start / grid-row-end */
    grid-column: 2/3; /* grid-column is sort of grid-column-start / grid-column-end */
}


.item-3 {
    grid-row: 1/2;
    grid-column: 1/2;
}




/* Grid Area: grid area is a shorthand property of grid-row-start, grid-column-start, grid-row-end, grid-column-end
======================================================================*/


.item-3 {
    /* grid-row: 1/2;
    grid-column: 1/2; */


    grid-area: 1/1/2/2;
}




/* Span Area: item-5 cover all row area  
======================================================================*/
.item-5 {
    /* 1st way
    grid-area: 2/1/3/4  */


    /* 2nd way
    grid-row: 2/3;
    grid-column: 1 / span 3 */  /* here span used to column start with 1 and column end with 3 */


    /* 3rd way
    grid-row: 2/3;
    grid-column: 1 / -1 */
}


/* explicit and implicit
======================================================================*/
.container {
    grid-auto-rows: 200px; /* if we don't know how many rows are there we can define height so use grid-auto-rows  */
    grid-auto-flow: row; /* grid flow row or column wise */
    grid-auto-columns: 200px; /* if we don't know how many columns are there we can define height so use grid-auto-columns  */
}


/* Justify Content
======================================================================*/
/* justify self is a justify item different it justify self override the property of justify item */

The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items. // shrink means kam
The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container. // grow means jyada
The flex-basis property specifies the initial length of a flex item.
The flex-flow property is a shorthand property for setting both the flex-direction and flex-wrap properties.
The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.






================================================================================================================
sass
================================================================================================================


-What is Sass?
    Sass stands for Syntactically Awesome Stylesheet
    Sass is a CSS pre-processor
    Sass is completely compatible with all versions of CSS
    Sass reduces repetition of CSS and therefore saves time
    Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
    Sass is free to download and use



-Why Use Sass?
    Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.



-variable
    create variable : $primary-color: #333;


-Sass Importing Files
    @import "variables";
    @import "colors";



-Sass Partials
    The following example shows a partial Sass file named "_colors.scss". (This file will not be transpiled directly to "colors.css"):


-Mixins
    @mixin title {
      color: red;
      font-size: 25px;
      font-weight: bold;
      border: 1px solid blue;
    }
    // Using Mixin
    .danger {
      @include title;
      background-color: green;
    }



-Sass extend 
    .button-basic  {
      border: none;
      padding: 15px 30px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
    //using extend
    .button-report  {
      @extend .button-basic;
      background-color: red;
    }

Breakpoints
----------------------------------------
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }


bootstrap
----------------------------------------------------
Bootstrap 3 -  has 4 tier grid system that includes xs, sm, md, and lg.,  CSS unit in Bootstrap 3 is px.,  The font size is 14 px in Bootstrap 3.,  dropdown structure is created using <ul> and <li>.
		
Bootstrap 4 - has 5 tier grid system that includes xs, sm, md, lg, and xl.  CSS unit in Bootstrap 4 is rem.,  The font size is 16 px in Bootstrap 3.,  dropdown structure is created using <ul> and <li>.,   It has jquery and all related plugins.,  Bootstrap 4 doesn’t have its own SVG icon
	

Bootstrap 5 - It has 6 tier (xs, sm, md, lg, xl, xxl).,    Jquery is removed and switched to vanilla JS with some working plugins,  Bootstrap 5 have its own SVG icons

Jquery
----------------------------------------------
- What is jquery
jQuery is a JavaScript Library.
jQuery greatly simplifies JavaScript programming.

-Mouse Events	
click, dbclick, mouseenter, mouseleae

-Keyboard Events	
keypress, keydown, keyup

-Form Events	
submit, change, focus, blur

-Document/Window Events
load, resize, unload, scroll



- jquery callback
    --Example with Callback
    $("button").click(function(){
      $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });



--Example without Callback
    $("button").click(function(){
      $("p").hide(1000);
      alert("The paragraph is now hidden");
    });



-jQuery Method Chaining
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);



-jQuery Dimension Methods
    width(elm), height(elm), innerWidth(elm with padding), innerHeight(elm with padding), outerWidth(elm with border), outerHeight(elm with border), outerHeight(true) take with margin, outerwidth(true) take with margin



-The jQuery noConflict() Method
    var jq = $.noConflict();
    jq(document).ready(function(){
      jq("button").click(function(){
        jq("p").text("jQuery is still working!");
      });
    });

-Q8. Differentiate among .empty() vs .remove() vs .detach() in jQuery.
    • empty() – This method is used to remove all the child elements from matched elements.
    • remove() – This method is used to remove all the matched element. It will remove all the jQuery data associated with the matched element.
    • detach() – This method is same as .remove() method except that the .detach() method doesn’t remove jQuery data associated with the matched elements.



-Q20. What is the difference between $(window).load and $(document).ready function in jQuery?
    $(window).load is an event that fires when the DOM and other contents on the page is fully loaded. This event is fired after the ready event.
    In most cases, the script can be executed as soon as the DOM is fully loaded. The ready() is usually the best place to write your JavaScript code. But there could be some scenario where you might need to write scripts in the load() function. For example, to get the actual width and height of an image.



-Q21. What is a CDN? What are the advantages of using CDN?
    Content delivery network like google, yahoo, microsoft



-Q25. What is jQuery UI?
    jQuery UI is a set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. jQuery UI works well for highly interactive web applications with different controls or simple pages with a date picker control.



-Q28. What is the use of html() method in JQuery?
    The jQuery html() method is used to change the entire content of the selected elements. It replaces the selected element content with new contents.



-Q32. What is slice() method in jQuery?
    The slice() method selects a subset of the matched elements by giving a range of indices. It gives the set of DOM elements on the basis of a parameter.



-Q42. What is the difference between prop and attr?
    jQuery.attr()- It gets the value of an attribute for the first element in the set of matched elements.
    jQuery. prop()– It gets the value of a property for the first element in the set of matched elements.



-What is the $() function in the jQuery library?
    he $() function is used to access the properties of elements in the DOM (Document Object Model).


React Tutorial
-----------------------------------------
-What is React?
    React is a JavaScript library for building user interfaces.
    React is used to build single-page applications.
    React allows us to create reusable UI components.

-Inline Styling
<h1 style={{color: "red"}}>Hello Style!</h1>



-Object styleing
    const Header = () => {
      const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
      return (
        <>
          <h1 style={myStyle}>Hello Style!</h1>
          <p>Add a little style!</p>
        </>
      );
    }



-CSS Modules
    css name : my-style.module.css



- using scss
    run command: npm i sass
    create sass file and use it simple like css 













