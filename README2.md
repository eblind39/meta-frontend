## React Basics - Additional Resources

|Topic|URL|
|---|---|
|nodejs.org|https://nodejs.org/en/|
|npmjs.com|https://www.npmjs.com/|
|reactjs.org|https://reactjs.org/|
|Basic Concepts of Flexbox|https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox|
|Importing a Component|https://create-react-app.dev/docs/importing-a-component/|
|Babeljs.io|https://babeljs.io/|
|NPM docs: package.json|https://docs.npmjs.com/cli/v7/configuring-npm/package-json|
|git docs: gitignore|https://git-scm.com/docs/gitignore|
|NPM docs: node modules folder|https://docs.npmjs.com/cli/v8/configuring-npm/folders#node-modules|
|webpack docs: DevServer|https://webpack.js.org/configuration/dev-server/|
|webpack/webpack-dev-server on GitHub|https://github.com/webpack/webpack-dev-server|
|Visual Studio Code keyboard shortcuts (Windows)|https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf|
|Visual Studio Code keyboard shortcuts (macOS)|https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf|
|Components and props|https://reactjs.org/docs/components-and-props.html|
|Intoducing JSX|https://reactjs.org/docs/introducing-jsx.html|
|Styling and CSS in React|https://reactjs.org/docs/faq-styling.html|
|Introducing expressions in JSX|https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx|

### Create React App and many more...
```sh
bun create vite
```

The _React.createElement_ function receives three arguments:

1. The wrapping element to render. 
2. A null value (which is there to show an absence of an expected JavaScript object value). 
3. The inner content that will go inside the wrapping element.

```javascript
    function Heading(props) {
        return React.createElement("h1", null, props.title);
    }

    function App() {
        return React.createElement(
                "div", 
                null, 
                "\xA0", 
                React.createElement(Heading, { salute: "Hello " }));
    }

    /* syntax */
    React.createElement(
        type,
        [props],
        [...children]
    )
```