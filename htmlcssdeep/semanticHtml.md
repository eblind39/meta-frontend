# Semantic HTML cheat sheet
There are hundreds of semantic tags available to help describe the meaning of your HTML documents. Below is a cheat sheet with some of the most common ones you’ll use in this course and in your development career.

## Sectioning tags

Use the following tags to organize your HTML document into structured sections. 

```html
<header>
```
The header of a content section or the web page. The web page header often contains the website branding or logo.

```html
<nav>
```
The navigation links of a section or the web page.

```html
<footer>
```
The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links.

```html
<main>
```
Specifies the main content of a section or the web page.

```html
<aside>
```
A secondary set of content that is not required to understand the main content.

```html
<article>
```
An independent, self-contained block of content such as a blog post or product.

```html
<section>
```
A standalone section of the document that is often used within the body and article elements.

```html
<details>
```
A collapsed section of content that can be expanded if the user wishes to view it.

```html
<summary>
```
Specifies the summary or caption of a \<details\> element.

```html
<h1><h2><h3><h4><h5><h6>
```
Headings on the web page. \<h1\> indicates the most important heading whereas \<h6\> indicates the least important. 

## Content tags

```html
<blockquote>
```
Used to describe a quotation.

```html
<dd>
```
Used to define a description for the preceding \<dt\> element.

```html
<dl>
```
Used to define a description list.

```html
<dt>
```
Used to describe terms inside \<dl\> elements.

```html
<figcaption>
```
Defines a caption for a photo image.

```html
<figure>
```
Applies markup to a photo image.

```html
<hr>
```
Adds a horizontal line to the parent element.

```html
<li>
```
Used to define an item within a list.

```html
<menu>
```
A semantic alternative to \<ul\> tag.

```html
<ol>
```
Defines an ordered list.

```html
<p>
```
Defines a paragraph.

```html
<pre>
```
Used to represent preformatted text. Typically rendered in the web browser using a monospace font.

```html
<ul>
```
Unordered list

## Inline tags

```html
<a>
```
An anchor link to another HTML document.

```html
<abbr>
```
Specifies that the containing text is an abbreviation or acronym.

```html
<b>
```
Bolds the containing text. When used to indicate importance use \<strong\> instead.

```html
<br>
```
A line break. Moves the subsequent text to a new line.

```html
<cite>
```
Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the \<cite\> element is usually rendered in italics.

```html
<code>
```
Indicates that the containing text is a block of computer code.

```html
<data>
```
Indicates machine-readable data.

```html
<em>
```
Emphasizes the containing text.

```html
<i>
```
The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.

```html
<mark>
```
The containing text should be marked or highlighted.

```html
<q>
```
The containing text is a short quotation.

```html
<s>
```
Displays the containing text with a strikethrough or line through it.

```html
<samp>
```
The containing text represents a sample.

```html
<small>
```
Used to represent small text, such as copyright and legal text.

```html
<span>
```
A generic element for grouping content for CSS styling.

```html
<strong>
```
Displays the containing text in bold. Used to indicate importance.

```html
<sub>
```
The containing text is subscript text, displayed with a lowered baseline.

```html
<sup>
```
The containing text is superscript text, displayed with a raised baseline.

```html
<time>
```
A semantic tag used to display both dates and times.

```html
<u>
```
Displays the containing text with a solid underline.

```html
<var>
```
The containing text is a variable in a mathematical expression.

## Embedded content and media tags

```html
<audio>
```
Used to embed audio in web pages.

```html
<canvas>
```
Used to render 2D and 3D graphics on web pages.

```html
<embed>
```
Used as a containing element for external content provided by an external application such as a media player or plug-in application. 

```html
<iframe>
```
Used to embed a nested web page. 

```html
<img>
```
Embeds an image on a web page.

```html
<object>
```
Similar to \<embed\> but the content is provided by a web browser plug-in.

```html
<picture>
```
An element that contains one \<img\> element and one or more \<source\> elements to offer alternative images for different displays/devices.

```html
<video>
```
Embeds a video on a web page.

```html
<source>
```
Specifies media resources for \<picture\>, \<audio\> and \<video\> elements.

```html
<svg>
```
Used to define Scalable Vector Graphics within a web page.

## Table tags

```html
<table>
```
Defines a table element to display table data within a web page.

```html
<thead>
```
Represents the header content of a table. Typically contains one \<tr\> element.

```html
<tbody>
```
Represents the main content of a table. Contains one or more \<tr\>elements.

```html
<tfoot>
```
Represents the footer content of a table. Typically contains one \<tr\> element.

```html
<tr>
```
Represents a row in a table. Contains one or more \<td\> elements when used within \<tbody\> or \<tfoot\>. When used within \<thead\>, contains one or more \<th\> elements.

```html
<td>
```
Represents a cell in a table. Contains the text content of the cell.

```html
<th>
```
Defines a header cell of a table. Contains the text content of the header.

```html
<caption>
```
Defines the caption of a table element.

```html
<colgroup>
```
Defines a semantic group of one or more columns in a table for formatting.

```html
<col>
```
Defines a semantic column in a table.