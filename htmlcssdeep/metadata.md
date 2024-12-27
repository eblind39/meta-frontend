# Metadata cheat sheet

## HTML \<meta\> tags 
Earlier in the course, you learned about meta tags and how you can leverage them to convey information to search engines to better categorize your pages. We recommend that you keep this cheat sheet handy when building your web applications. The structure of a meta tag is as follows.

|Attribute|Description|
|---|---|
|*Name*|The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be _\<meta name="author" content="name"\>_ to state the author of the page|
|*Content*|The content field specifies the property's value. For example, you can use _\<meta name="language" content="english"\>_, to specify the language of the webpage to search engines|
|*Charset*|The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: _\<meta charset="UTF-8"\>_|
|*HTTP-equiv*|This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: _\<meta http-equiv="refresh" content="30"\>_|
 

  ## Basic meta tags (meta tags For SEO)

|Meta tag|Description|
|---|---|
|_\<meta name="description"/\>_|provides a brief description of the web page|
|_\<meta name=”title”/\>_|specifies the title of the web page|
|_\<meta name="author" content="name"\>_|specifies the author of the web page|
|_\<meta name="language" content="english"\>_|specifies the language of the web page|
|_\<meta name="robots" content="index,follow" /\>_|tells search engines how to crawl or index a certain page|
|_\<meta name="google"/\>_|tells Google not to show the sitelinks search box for your page when showing search results|
|_\<meta name="googlebot" content=”notranslate” /\>_|tells Google you don’t want to provide an automatic translation for your page if the user uses a different language|
|_\<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" /\>_|specifies the last modified date and time on which you have made certain changes|
|_\<meta name="rating" content="safe for kids"\>_|specifies the expected audience for your page|
|_\<meta name="copyright" content="Copyright 2022"\>_|specifies a Copyright|


## _\<meta http-equiv="..."/\>_ tags

|Meta tag|Description|
|---|---|
|_\<meta http-equiv="content-type" content="text/html"\>_|specifies the format of the document returned by the server|
|_\<meta http-equiv="default-style"/\>_|specifies the format of the styling document|
|_\<meta http-equiv="refresh"/\>_|specifies the duration of the page before it’s considered stale|
|_\<meta http-equiv=”Content-language”/\>_|specifies the language of the page|
|_\<meta http-equiv="Cache-Control" content="no-cache"\>_|instructs the browser how to cache your page|


## Responsive design/mobile meta tags 

|Meta tag|Description|
|---|---|
|_\<meta name="format-detection" content="telephone=yes"/\>_|indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call|
|_\<meta name="HandheldFriendly" content="true"/\>_|specifies that the page can be properly visualized on mobile devices|
|_\<meta name="viewport" content="width=device-width, initial-scale=1.0"/\>_|specifies the area of the window in which web content can be seen|