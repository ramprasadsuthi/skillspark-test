import { type Question } from "../questions";

export const htmlQuestions: Record<string, Question[]> = {
 "HTML-Beginner": [
  { id: 1, question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "High Text Markup Language"], correctAnswer: 1, explanation: "HTML stands for Hyper Text Markup Language used to structure web pages.", type: "conceptual" },

  { id: 2, question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<hyper>"], correctAnswer: 1, explanation: "The <a> tag defines hyperlinks in HTML.", type: "mcq" },

  { id: 3, question: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correctAnswer: 2, explanation: "<h1> defines the largest heading.", type: "mcq" },

  { id: 4, question: "Which tag is used to insert an image?", options: ["<img>", "<image>", "<src>", "<pic>"], correctAnswer: 0, explanation: "<img> tag is used to embed images.", type: "mcq" },

  { id: 5, question: "HTML files have which extension?", options: [".htm or .html", ".xml", ".css", ".js"], correctAnswer: 0, explanation: "HTML files end with .html or .htm.", type: "conceptual" },

  { id: 6, question: "Which tag is used for line break?", options: ["<break>", "<br>", "<lb>", "<newline>"], correctAnswer: 1, explanation: "<br> inserts a line break.", type: "mcq" },

  { id: 7, question: "Which element is used to define a paragraph?", options: ["<p>", "<para>", "<text>", "<pg>"], correctAnswer: 0, explanation: "<p> defines a paragraph.", type: "mcq" },

  { id: 8, question: "Which tag is used to create a table?", options: ["<tab>", "<table>", "<tbl>", "<tr>"], correctAnswer: 1, explanation: "<table> is used to create tables.", type: "mcq" },

  { id: 9, question: "Which tag defines a table row?", options: ["<td>", "<tr>", "<th>", "<row>"], correctAnswer: 1, explanation: "<tr> defines a table row.", type: "mcq" },

  { id: 10, question: "Which tag defines a table cell?", options: ["<th>", "<td>", "<tr>", "<cell>"], correctAnswer: 1, explanation: "<td> defines table data cell.", type: "mcq" },

  { id: 11, question: "Which tag is used to create an unordered list?", options: ["<ol>", "<list>", "<ul>", "<li>"], correctAnswer: 2, explanation: "<ul> creates unordered list.", type: "mcq" },

  { id: 12, question: "Which tag is used for ordered list?", options: ["<ul>", "<li>", "<ol>", "<order>"], correctAnswer: 2, explanation: "<ol> creates ordered list.", type: "mcq" },

  { id: 13, question: "Which tag defines list items?", options: ["<item>", "<li>", "<list>", "<ul>"], correctAnswer: 1, explanation: "<li> defines list item.", type: "mcq" },

  { id: 14, question: "Which tag is used to define bold text?", options: ["<bold>", "<b>", "<strong>", "<bt>"], correctAnswer: 1, explanation: "<b> is used for bold text.", type: "mcq" },

  { id: 15, question: "Which tag is used for italic text?", options: ["<i>", "<italic>", "<it>", "<em>"], correctAnswer: 0, explanation: "<i> defines italic text.", type: "mcq" },

  { id: 16, question: "Which attribute is used for image source?", options: ["link", "src", "href", "path"], correctAnswer: 1, explanation: "src attribute defines image path.", type: "mcq" },

  { id: 17, question: "Which tag is used to create a form?", options: ["<input>", "<form>", "<label>", "<submit>"], correctAnswer: 1, explanation: "<form> defines HTML form.", type: "mcq" },

  { id: 18, question: "Which input type is used for password?", options: ["text", "password", "hidden", "pass"], correctAnswer: 1, explanation: "type='password' hides input.", type: "mcq" },

  { id: 19, question: "Which tag is used to create a button?", options: ["<btn>", "<button>", "<input>", "<click>"], correctAnswer: 1, explanation: "<button> creates clickable button.", type: "mcq" },

  { id: 20, question: "Which tag is used for page title?", options: ["<meta>", "<title>", "<head>", "<h1>"], correctAnswer: 1, explanation: "<title> defines page title.", type: "mcq" },

  { id: 21, question: "Which tag contains metadata?", options: ["<head>", "<meta>", "<body>", "<title>"], correctAnswer: 1, explanation: "<meta> provides metadata.", type: "mcq" },

  { id: 22, question: "Which tag is used to display content?", options: ["<head>", "<html>", "<body>", "<div>"], correctAnswer: 2, explanation: "<body> holds visible content.", type: "mcq" },

  { id: 23, question: "What is the root element of HTML?", options: ["<body>", "<head>", "<html>", "<root>"], correctAnswer: 2, explanation: "<html> is root element.", type: "conceptual" },

  { id: 24, question: "Which tag is used to insert comments?", options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"], correctAnswer: 1, explanation: "HTML comments use <!-- -->.", type: "mcq" },

  { id: 25, question: "Which tag is used for horizontal line?", options: ["<line>", "<hr>", "<br>", "<hl>"], correctAnswer: 1, explanation: "<hr> inserts horizontal line.", type: "mcq" },

  { id: 26, question: "Which attribute specifies link destination?", options: ["src", "href", "link", "url"], correctAnswer: 1, explanation: "href defines link URL.", type: "mcq" },

  { id: 27, question: "Which tag is used for division?", options: ["<section>", "<div>", "<span>", "<block>"], correctAnswer: 1, explanation: "<div> is block container.", type: "mcq" },

  { id: 28, question: "Which tag is inline element?", options: ["<div>", "<p>", "<span>", "<section>"], correctAnswer: 2, explanation: "<span> is inline element.", type: "mcq" },

  { id: 29, question: "Which tag is used for dropdown?", options: ["<select>", "<option>", "<input>", "<list>"], correctAnswer: 0, explanation: "<select> creates dropdown.", type: "mcq" },

  { id: 30, question: "Which tag defines option in dropdown?", options: ["<opt>", "<select>", "<option>", "<choice>"], correctAnswer: 2, explanation: "<option> defines dropdown item.", type: "mcq" },

  { id: 31, question: "Which attribute is used for unique element identification?", options: ["class", "id", "name", "key"], correctAnswer: 1, explanation: "id uniquely identifies element.", type: "mcq" },

  { id: 32, question: "Which tag is used to embed video?", options: ["<media>", "<video>", "<embed>", "<movie>"], correctAnswer: 1, explanation: "<video> embeds video.", type: "mcq" },

  { id: 33, question: "Which tag is used for audio?", options: ["<sound>", "<audio>", "<music>", "<media>"], correctAnswer: 1, explanation: "<audio> embeds audio.", type: "mcq" },

  { id: 34, question: "Which attribute opens link in new tab?", options: ["target='_self'", "target='_blank'", "newtab", "open"], correctAnswer: 1, explanation: "target='_blank' opens new tab.", type: "mcq" },

  { id: 35, question: "Which tag is used for label in form?", options: ["<label>", "<form>", "<input>", "<tag>"], correctAnswer: 0, explanation: "<label> defines form label.", type: "mcq" },

  { id: 36, question: "Which tag is semantic element?", options: ["<div>", "<span>", "<header>", "<b>"], correctAnswer: 2, explanation: "<header> is semantic.", type: "conceptual" },

  { id: 37, question: "Which tag is used for navigation?", options: ["<nav>", "<menu>", "<link>", "<header>"], correctAnswer: 0, explanation: "<nav> defines navigation.", type: "mcq" },

  { id: 38, question: "Which tag defines footer?", options: ["<bottom>", "<footer>", "<end>", "<section>"], correctAnswer: 1, explanation: "<footer> defines footer.", type: "mcq" },

  { id: 39, question: "Which tag defines section?", options: ["<div>", "<section>", "<span>", "<area>"], correctAnswer: 1, explanation: "<section> groups content.", type: "mcq" },

  { id: 40, question: "Which tag is used to group inline elements?", options: ["<div>", "<span>", "<group>", "<inline>"], correctAnswer: 1, explanation: "<span> groups inline.", type: "mcq" },

  { id: 41, question: "Which tag is used for text input?", options: ["<input type='text'>", "<textbox>", "<text>", "<field>"], correctAnswer: 0, explanation: "input type='text' creates text field.", type: "mcq" },

  { id: 42, question: "Which attribute provides alternative text for images?", options: ["title", "alt", "desc", "name"], correctAnswer: 1, explanation: "alt describes image.", type: "mcq" },

  { id: 43, question: "Which tag defines HTML document type?", options: ["<html>", "<doctype>", "<!DOCTYPE html>", "<type>"], correctAnswer: 2, explanation: "DOCTYPE defines HTML version.", type: "conceptual" },

  { id: 44, question: "Which tag is used for emphasis?", options: ["<em>", "<i>", "<b>", "<strong>"], correctAnswer: 0, explanation: "<em> emphasizes text.", type: "mcq" },

  { id: 45, question: "Which tag is used for strong importance?", options: ["<b>", "<strong>", "<em>", "<i>"], correctAnswer: 1, explanation: "<strong> shows importance.", type: "mcq" },

  { id: 46, question: "Which tag is used to embed another webpage?", options: ["<frame>", "<iframe>", "<embed>", "<object>"], correctAnswer: 1, explanation: "<iframe> embeds page.", type: "mcq" },

  { id: 47, question: "Which tag defines table header?", options: ["<td>", "<tr>", "<th>", "<head>"], correctAnswer: 2, explanation: "<th> defines header cell.", type: "mcq" },

  { id: 48, question: "Which attribute is used to specify form submission URL?", options: ["method", "action", "submit", "url"], correctAnswer: 1, explanation: "action defines form destination.", type: "mcq" },

  { id: 49, question: "Which method is default for form submission?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: 0, explanation: "GET is default method.", type: "mcq" },

  { id: 50, question: "Which tag is used for creating checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<tick>"], correctAnswer: 0, explanation: "input type='checkbox' creates checkbox.", type: "mcq" }
],
  "HTML-Intermediate": [
  { id: 1, question: "What is the purpose of the <meta> viewport tag?", options: ["To define SEO keywords", "To control layout on mobile browsers", "To add metadata for search engines", "To define character encoding"], correctAnswer: 1, explanation: "The viewport meta tag ensures proper rendering and scaling on mobile devices.", type: "conceptual" },

  { id: 2, question: "Which HTML element is used for responsive images?", options: ["<imgset>", "<picture>", "<responsive>", "<media>"], correctAnswer: 1, explanation: "<picture> allows different images for different screen sizes.", type: "mcq" },

  { id: 3, question: "Which attribute is used in <img> for responsive images?", options: ["srcset", "responsive", "sizeset", "srcgroup"], correctAnswer: 0, explanation: "srcset defines multiple image sources.", type: "mcq" },

  { id: 4, question: "What is semantic HTML?", options: ["HTML with styles", "HTML that uses meaningful tags", "HTML with scripts", "HTML for animations"], correctAnswer: 1, explanation: "Semantic HTML improves accessibility and SEO.", type: "conceptual" },

  { id: 5, question: "Which tag is used to define independent content?", options: ["<section>", "<article>", "<div>", "<aside>"], correctAnswer: 1, explanation: "<article> defines independent self-contained content.", type: "mcq" },

  { id: 6, question: "Which tag is used for sidebar content?", options: ["<aside>", "<section>", "<nav>", "<div>"], correctAnswer: 0, explanation: "<aside> is used for side content.", type: "mcq" },

  { id: 7, question: "Which attribute is used to make input mandatory?", options: ["validate", "required", "must", "compulsory"], correctAnswer: 1, explanation: "required ensures input must be filled.", type: "mcq" },

  { id: 8, question: "Which input type validates email format?", options: ["text", "email", "mail", "validate"], correctAnswer: 1, explanation: "type='email' validates email input.", type: "mcq" },

  { id: 9, question: "Which attribute is used for form validation pattern?", options: ["regex", "pattern", "validate", "match"], correctAnswer: 1, explanation: "pattern attribute uses regex validation.", type: "mcq" },

  { id: 10, question: "Which tag is used to group form elements?", options: ["<fieldset>", "<group>", "<formgroup>", "<section>"], correctAnswer: 0, explanation: "<fieldset> groups related inputs.", type: "mcq" },

  { id: 11, question: "Which tag defines caption for fieldset?", options: ["<caption>", "<label>", "<legend>", "<title>"], correctAnswer: 2, explanation: "<legend> provides caption.", type: "mcq" },

  { id: 12, question: "Which attribute is used for auto-completion?", options: ["autocomplete", "autosuggest", "autofill", "complete"], correctAnswer: 0, explanation: "autocomplete enables suggestions.", type: "mcq" },

  { id: 13, question: "Which tag embeds external content?", options: ["<iframe>", "<embed>", "<object>", "All of the above"], correctAnswer: 3, explanation: "All these tags embed external resources.", type: "mcq" },

  { id: 14, question: "Which tag defines navigation links?", options: ["<nav>", "<menu>", "<header>", "<aside>"], correctAnswer: 0, explanation: "<nav> defines navigation.", type: "mcq" },

  { id: 15, question: "Which tag defines footer section?", options: ["<end>", "<footer>", "<bottom>", "<section>"], correctAnswer: 1, explanation: "<footer> defines bottom content.", type: "mcq" },

  { id: 16, question: "Which tag is used for figure with caption?", options: ["<figure>", "<figcaption>", "Both", "<image>"], correctAnswer: 2, explanation: "<figure> with <figcaption>.", type: "mcq" },

  { id: 17, question: "Which attribute disables an input field?", options: ["readonly", "disable", "disabled", "inactive"], correctAnswer: 2, explanation: "disabled prevents interaction.", type: "mcq" },

  { id: 18, question: "Difference between id and class?", options: ["Both same", "id unique, class reusable", "class unique", "id reusable"], correctAnswer: 1, explanation: "id is unique, class can repeat.", type: "conceptual" },

  { id: 19, question: "Which attribute defines tooltip text?", options: ["alt", "title", "tooltip", "hover"], correctAnswer: 1, explanation: "title shows tooltip.", type: "mcq" },

  { id: 20, question: "Which tag is used for progress bar?", options: ["<progress>", "<bar>", "<meter>", "<range>"], correctAnswer: 0, explanation: "<progress> shows task progress.", type: "mcq" },

  { id: 21, question: "Which tag shows measurement within range?", options: ["<meter>", "<progress>", "<range>", "<value>"], correctAnswer: 0, explanation: "<meter> represents scalar value.", type: "mcq" },

  { id: 22, question: "Which tag defines details with summary?", options: ["<details>", "<summary>", "Both", "<info>"], correctAnswer: 2, explanation: "details + summary create expandable section.", type: "mcq" },

  { id: 23, question: "Which attribute specifies minimum value?", options: ["low", "min", "start", "range"], correctAnswer: 1, explanation: "min defines minimum value.", type: "mcq" },

  { id: 24, question: "Which attribute defines maximum value?", options: ["high", "max", "end", "limit"], correctAnswer: 1, explanation: "max defines maximum.", type: "mcq" },

  { id: 25, question: "Which attribute defines placeholder text?", options: ["hint", "text", "placeholder", "label"], correctAnswer: 2, explanation: "placeholder shows hint.", type: "mcq" },

  { id: 26, question: "Which tag defines canvas for drawing?", options: ["<canvas>", "<draw>", "<svg>", "<graphic>"], correctAnswer: 0, explanation: "<canvas> used with JS.", type: "mcq" },

  { id: 27, question: "Which tag defines scalable vector graphics?", options: ["<canvas>", "<svg>", "<vector>", "<graphic>"], correctAnswer: 1, explanation: "<svg> defines vector graphics.", type: "mcq" },

  { id: 28, question: "Which attribute specifies input range step?", options: ["step", "interval", "jump", "gap"], correctAnswer: 0, explanation: "step controls increments.", type: "mcq" },

  { id: 29, question: "Which tag defines mark/highlight text?", options: ["<highlight>", "<mark>", "<b>", "<strong>"], correctAnswer: 1, explanation: "<mark> highlights text.", type: "mcq" },

  { id: 30, question: "Which tag defines time/date?", options: ["<time>", "<date>", "<datetime>", "<clock>"], correctAnswer: 0, explanation: "<time> represents date/time.", type: "mcq" },

  { id: 31, question: "Which attribute defines input default value?", options: ["default", "value", "set", "init"], correctAnswer: 1, explanation: "value sets default.", type: "mcq" },

  { id: 32, question: "Which tag defines abbreviation?", options: ["<abbr>", "<short>", "<acronym>", "<abbrv>"], correctAnswer: 0, explanation: "<abbr> defines abbreviation.", type: "mcq" },

  { id: 33, question: "Which tag defines keyboard input?", options: ["<kbd>", "<input>", "<key>", "<code>"], correctAnswer: 0, explanation: "<kbd> shows keyboard input.", type: "mcq" },

  { id: 34, question: "Which tag defines code snippet?", options: ["<code>", "<pre>", "<script>", "<var>"], correctAnswer: 0, explanation: "<code> defines inline code.", type: "mcq" },

  { id: 35, question: "Which tag preserves formatting?", options: ["<pre>", "<code>", "<format>", "<text>"], correctAnswer: 0, explanation: "<pre> preserves whitespace.", type: "mcq" },

  { id: 36, question: "Which attribute specifies multiple file selection?", options: ["multi", "multiple", "files", "select"], correctAnswer: 1, explanation: "multiple allows multi-selection.", type: "mcq" },

  { id: 37, question: "Which input type selects date?", options: ["text", "date", "calendar", "time"], correctAnswer: 1, explanation: "type='date' selects date.", type: "mcq" },

  { id: 38, question: "Which input type selects color?", options: ["color", "rgb", "picker", "paint"], correctAnswer: 0, explanation: "type='color' shows color picker.", type: "mcq" },

  { id: 39, question: "Which tag defines data list suggestions?", options: ["<list>", "<datalist>", "<options>", "<suggest>"], correctAnswer: 1, explanation: "<datalist> provides suggestions.", type: "mcq" },

  { id: 40, question: "Which tag defines output result?", options: ["<result>", "<output>", "<display>", "<value>"], correctAnswer: 1, explanation: "<output> displays calculation result.", type: "mcq" },

  { id: 41, question: "Which attribute defines element editability?", options: ["editable", "contenteditable", "edit", "modify"], correctAnswer: 1, explanation: "contenteditable allows editing.", type: "mcq" },

  { id: 42, question: "Which attribute is used to hide element?", options: ["hidden", "display", "invisible", "none"], correctAnswer: 0, explanation: "hidden hides element.", type: "mcq" },

  { id: 43, question: "Which attribute specifies language?", options: ["lang", "language", "type", "locale"], correctAnswer: 0, explanation: "lang defines language.", type: "mcq" },

  { id: 44, question: "Which tag defines main content?", options: ["<main>", "<body>", "<section>", "<content>"], correctAnswer: 0, explanation: "<main> holds primary content.", type: "mcq" },

  { id: 45, question: "Which tag defines header section?", options: ["<head>", "<header>", "<top>", "<section>"], correctAnswer: 1, explanation: "<header> defines top section.", type: "mcq" },

  { id: 46, question: "Which attribute is used for drag functionality?", options: ["drag", "draggable", "move", "drop"], correctAnswer: 1, explanation: "draggable enables drag.", type: "mcq" },

  { id: 47, question: "Which tag defines inline quotation?", options: ["<quote>", "<q>", "<blockquote>", "<cite>"], correctAnswer: 1, explanation: "<q> defines inline quote.", type: "mcq" },

  { id: 48, question: "Which tag defines block quotation?", options: ["<blockquote>", "<q>", "<quote>", "<cite>"], correctAnswer: 0, explanation: "<blockquote> defines block quote.", type: "mcq" },

  { id: 49, question: "Which tag defines contact information?", options: ["<address>", "<contact>", "<info>", "<details>"], correctAnswer: 0, explanation: "<address> defines contact info.", type: "mcq" },

  { id: 50, question: "Which attribute is used for spell checking?", options: ["spell", "spellcheck", "check", "validate"], correctAnswer: 1, explanation: "spellcheck enables spelling check.", type: "mcq" }
],
  "HTML-Advanced": [
  { id: 1, question: "What is the purpose of the 'defer' attribute in script tag?", options: ["Executes script immediately", "Executes after HTML parsing", "Blocks rendering", "Executes before DOM"], correctAnswer: 1, explanation: "defer ensures script runs after HTML parsing.", type: "conceptual" },

  { id: 2, question: "What does the 'async' attribute do in script?", options: ["Delays execution", "Executes after parsing", "Executes asynchronously without blocking", "Executes sequentially"], correctAnswer: 2, explanation: "async loads and executes script independently.", type: "conceptual" },

  { id: 3, question: "Difference between async and defer?", options: ["Both same", "async waits, defer doesn't", "defer preserves order, async doesn't", "async is slower"], correctAnswer: 2, explanation: "defer maintains order, async does not.", type: "conceptual" },

  { id: 4, question: "Which tag is used for web components container?", options: ["<component>", "<shadow-root>", "<template>", "<slot>"], correctAnswer: 2, explanation: "<template> defines reusable content.", type: "mcq" },

  { id: 5, question: "Which tag is used to project content in web components?", options: ["<slot>", "<insert>", "<content>", "<place>"], correctAnswer: 0, explanation: "<slot> distributes nodes.", type: "mcq" },

  { id: 6, question: "What is Shadow DOM?", options: ["External DOM", "Hidden DOM tree", "CSS feature", "JavaScript library"], correctAnswer: 1, explanation: "Shadow DOM encapsulates DOM and styles.", type: "conceptual" },

  { id: 7, question: "Which attribute is used for lazy loading images?", options: ["lazy", "load", "loading", "defer"], correctAnswer: 2, explanation: "loading='lazy' defers image loading.", type: "mcq" },

  { id: 8, question: "Which element defines dialog box?", options: ["<popup>", "<dialog>", "<modal>", "<box>"], correctAnswer: 1, explanation: "<dialog> creates modal dialogs.", type: "mcq" },

  { id: 9, question: "Which API enables offline web apps?", options: ["Web Storage", "Service Workers", "IndexedDB", "LocalStorage"], correctAnswer: 1, explanation: "Service Workers enable offline capabilities.", type: "conceptual" },

  { id: 10, question: "Which attribute is used to preload resources?", options: ["prefetch", "preload", "load", "async"], correctAnswer: 1, explanation: "preload loads resources early.", type: "mcq" },

  { id: 11, question: "Which tag defines client-side template?", options: ["<template>", "<script>", "<fragment>", "<block>"], correctAnswer: 0, explanation: "<template> stores HTML without rendering.", type: "mcq" },

  { id: 12, question: "Which tag is used for accessibility landmark navigation?", options: ["<nav>", "<header>", "<main>", "All of the above"], correctAnswer: 3, explanation: "All are landmark roles.", type: "conceptual" },

  { id: 13, question: "Which attribute improves accessibility for screen readers?", options: ["alt", "aria-label", "title", "role"], correctAnswer: 1, explanation: "aria-label enhances accessibility.", type: "mcq" },

  { id: 14, question: "What is ARIA?", options: ["HTML version", "Accessibility specification", "CSS framework", "JS library"], correctAnswer: 1, explanation: "ARIA improves accessibility.", type: "conceptual" },

  { id: 15, question: "Which tag defines machine-readable date/time?", options: ["<time>", "<date>", "<meta>", "<data>"], correctAnswer: 0, explanation: "<time> represents date/time.", type: "mcq" },

  { id: 16, question: "Which attribute is used for custom data?", options: ["data-*", "custom", "attr", "dataset"], correctAnswer: 0, explanation: "data-* stores custom data.", type: "mcq" },

  { id: 17, question: "Which API stores structured data in browser?", options: ["LocalStorage", "SessionStorage", "IndexedDB", "Cookies"], correctAnswer: 2, explanation: "IndexedDB stores structured data.", type: "conceptual" },

  { id: 18, question: "Which tag embeds scalable vector graphics inline?", options: ["<canvas>", "<svg>", "<img>", "<graphic>"], correctAnswer: 1, explanation: "<svg> embeds vector graphics.", type: "mcq" },

  { id: 19, question: "Difference between canvas and SVG?", options: ["Same", "Canvas raster, SVG vector", "SVG raster", "Canvas vector"], correctAnswer: 1, explanation: "Canvas = bitmap, SVG = vector.", type: "conceptual" },

  { id: 20, question: "Which attribute is used for crossorigin requests?", options: ["origin", "crossorigin", "cors", "access"], correctAnswer: 1, explanation: "crossorigin handles CORS.", type: "mcq" },

  { id: 21, question: "Which attribute specifies referrer policy?", options: ["ref", "policy", "referrerpolicy", "origin"], correctAnswer: 2, explanation: "referrerpolicy controls referrer info.", type: "mcq" },

  { id: 22, question: "Which tag is used for fallback content?", options: ["<fallback>", "<noscript>", "<alt>", "<backup>"], correctAnswer: 1, explanation: "<noscript> runs when JS disabled.", type: "mcq" },

  { id: 23, question: "Which attribute enables content editing?", options: ["editable", "contenteditable", "edit", "modify"], correctAnswer: 1, explanation: "contenteditable allows editing.", type: "mcq" },

  { id: 24, question: "Which tag defines progress indicator?", options: ["<progress>", "<meter>", "<bar>", "<range>"], correctAnswer: 0, explanation: "<progress> shows task completion.", type: "mcq" },

  { id: 25, question: "Which tag defines scalar measurement?", options: ["<progress>", "<meter>", "<value>", "<measure>"], correctAnswer: 1, explanation: "<meter> shows measurement.", type: "mcq" },

  { id: 26, question: "Which attribute allows drag functionality?", options: ["drag", "move", "draggable", "drop"], correctAnswer: 2, explanation: "draggable enables drag.", type: "mcq" },

  { id: 27, question: "Which attribute is used for spell checking?", options: ["spell", "check", "spellcheck", "validate"], correctAnswer: 2, explanation: "spellcheck enables spell checking.", type: "mcq" },

  { id: 28, question: "Which tag defines embedded object?", options: ["<object>", "<embed>", "<iframe>", "All of the above"], correctAnswer: 3, explanation: "All embed external content.", type: "mcq" },

  { id: 29, question: "Which attribute is used for sandboxing iframe?", options: ["secure", "sandbox", "protect", "safe"], correctAnswer: 1, explanation: "sandbox restricts iframe.", type: "mcq" },

  { id: 30, question: "Which tag defines responsive images?", options: ["<img>", "<picture>", "<media>", "<srcset>"], correctAnswer: 1, explanation: "<picture> supports responsive images.", type: "mcq" },

  { id: 31, question: "Which attribute defines image density?", options: ["density", "dpi", "srcset", "size"], correctAnswer: 2, explanation: "srcset supports pixel density.", type: "mcq" },

  { id: 32, question: "Which attribute sets image sizes?", options: ["size", "sizes", "dimension", "width"], correctAnswer: 1, explanation: "sizes defines display size.", type: "mcq" },

  { id: 33, question: "Which attribute specifies form encoding?", options: ["encode", "enctype", "type", "method"], correctAnswer: 1, explanation: "enctype defines encoding.", type: "mcq" },

  { id: 34, question: "Which method sends data securely?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: 1, explanation: "POST hides data in body.", type: "conceptual" },

  { id: 35, question: "Which attribute prevents form validation?", options: ["novalidate", "skip", "disable", "ignore"], correctAnswer: 0, explanation: "novalidate disables validation.", type: "mcq" },

  { id: 36, question: "Which tag defines interactive details?", options: ["<details>", "<info>", "<expand>", "<show>"], correctAnswer: 0, explanation: "<details> creates expandable content.", type: "mcq" },

  { id: 37, question: "Which tag defines summary for details?", options: ["<summary>", "<title>", "<caption>", "<head>"], correctAnswer: 0, explanation: "<summary> labels details.", type: "mcq" },

  { id: 38, question: "Which attribute auto-focuses input?", options: ["focus", "autofocus", "auto", "active"], correctAnswer: 1, explanation: "autofocus focuses input.", type: "mcq" },

  { id: 39, question: "Which attribute restricts input length?", options: ["limit", "maxlength", "size", "length"], correctAnswer: 1, explanation: "maxlength limits characters.", type: "mcq" },

  { id: 40, question: "Which attribute defines input pattern?", options: ["pattern", "regex", "match", "validate"], correctAnswer: 0, explanation: "pattern defines regex.", type: "mcq" },

  { id: 41, question: "Which tag defines main content?", options: ["<main>", "<body>", "<section>", "<article>"], correctAnswer: 0, explanation: "<main> defines primary content.", type: "mcq" },

  { id: 42, question: "Which tag defines navigation section?", options: ["<nav>", "<menu>", "<header>", "<section>"], correctAnswer: 0, explanation: "<nav> defines navigation.", type: "mcq" },

  { id: 43, question: "Which tag defines header section?", options: ["<head>", "<header>", "<top>", "<section>"], correctAnswer: 1, explanation: "<header> defines page header.", type: "mcq" },

  { id: 44, question: "Which tag defines footer section?", options: ["<footer>", "<bottom>", "<end>", "<section>"], correctAnswer: 0, explanation: "<footer> defines footer.", type: "mcq" },

  { id: 45, question: "Which attribute is used for language declaration?", options: ["lang", "locale", "type", "region"], correctAnswer: 0, explanation: "lang specifies language.", type: "mcq" },

  { id: 46, question: "Which tag defines inline quotation?", options: ["<q>", "<quote>", "<blockquote>", "<cite>"], correctAnswer: 0, explanation: "<q> defines inline quote.", type: "mcq" },

  { id: 47, question: "Which tag defines block quote?", options: ["<blockquote>", "<q>", "<quote>", "<cite>"], correctAnswer: 0, explanation: "<blockquote> defines block quote.", type: "mcq" },

  { id: 48, question: "Which tag defines machine-readable data?", options: ["<data>", "<meta>", "<time>", "<value>"], correctAnswer: 0, explanation: "<data> links content with machine value.", type: "mcq" },

  { id: 49, question: "Which attribute defines base URL for links?", options: ["href", "base", "src", "link"], correctAnswer: 1, explanation: "<base> sets base URL.", type: "mcq" },

  { id: 50, question: "Which tag defines base URL?", options: ["<base>", "<link>", "<meta>", "<head>"], correctAnswer: 0, explanation: "<base> defines base URL.", type: "mcq" }
],
};
