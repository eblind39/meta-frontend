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
|Handling Events|https://reactjs.org/docs/handling-events.html#gatsby-focus-wrapper|
|Supported Events|https://reactjs.org/docs/events.html#supported-events|
|SyntheticEvent|https://reactjs.org/docs/events.html#gatsby-focus-wrapper|
|How do I pass an event handler (like onClick) to a component?|https://reactjs.org/docs/faq-functions.html#how-do-i-pass-an-event-handler-like-onclick-to-a-component|
|JavaScript Expressions as Props|https://reactjs.org/docs/faq-functions.html#how-do-i-pass-an-event-handler-like-onclick-to-a-component|
|JavaScript Expressions as Children|https://reactjs.org/docs/jsx-in-depth.html#javascript-expressions-as-children|
|React docs website URL which discusses the issue in depth|https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html|
|Data flows down|https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down|
|The Power Of Not Mutating Data|https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data|
|Add Inverse Data Flow|https://reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow|
|Component state|https://reactjs.org/docs/faq-state.html|
|State: A Component's Memory|https://beta.reactjs.org/learn/state-a-components-memory|
|Sharing State Between Components|https://beta.reactjs.org/learn/sharing-state-between-components|
|State as a Snapshot|https://beta.reactjs.org/learn/state-as-a-snapshot|
|Basic useState examples|https://beta.reactjs.org/apis/usestate#examples-basic|
|Synchronizing with effects - putting it all together|https://beta.reactjs.org/learn/synchronizing-with-effects#putting-it-all-together|
|Fetch API|https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API|
|The event loop in JavaScript|https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop|
|React Router v6|https://reactrouter.com/|
|nav: The Navigation Section element|https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav|
|Conditional (ternary) operator in JavaScript|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator|
|if...else|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else|
|Ramdom image|https://picsum.photos/400/265|
|Create a react app with bun.sh|https://dev.to/ashirbadgudu/create-a-react-app-with-bun-125o|
|webpack docs|https://webpack.js.org/guides/getting-started/|
|webpack asset management|https://webpack.js.org/guides/asset-management/|
|npm docs|https://docs.npmjs.com/|
|ReactPlayer on npm|https://www.npmjs.com/package/react-player|
|Video and audio content on the web|https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content|
|Map()|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|
|Rendering lists on official React docs website|https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays|
|React keys on official docs|https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key|
|Forms from the official React docs|https://reactjs.org/docs/forms.html|
|Formik|https://formik.org/|
|Yup|https://github.com/jquense/yup|
|React-hook-form|https://github.com/react-hook-form/react-hook-form|
|React.memo from the official React docs|https://reactjs.org/docs/react-api.html#reactmemo|
|useMemo from the official React docs|https://reactjs.org/docs/hooks-reference.html#usememo|
|destructuring|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment|
|The read props inside the child component|https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component|
|useState reference on official React docs website|https://beta.reactjs.org/apis/react/useState#usestate|
|useEffect reference on official React docs website|https://beta.reactjs.org/apis/react/useEffect#useeffect|
|Rules of Hooks reading on Reactjs.org|https://reactjs.org/docs/hooks-rules.html|
|Fetching data with Effects|https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects|
|How to use promises|https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises|
|async function|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function|
|useReducer hook reference|https://react.dev/reference/react/useReducer|
|using the useRef hook|https://react.dev/reference/react/useRef|
|Reusing Logic with Custom Hooks|https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks|

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

> [Guía para entrevistas tecnicas como Ingeniero de software](https://github.com/DevCaress/guia-entrevistas-de-programacion?tab=readme-ov-file#principios-solid)
> > Incluye *Principios SOLID en React.JS*

* *Assets:* Images, stylesheets, fonts, any static files needed...
* *Isomorphic Apps:* Combine client-side rendering and server-side rendering (SSR)

### Controlled components vs. Uncontrolled components

|Feature|Uncontrolled|Controlled|
|---|---|---|
|One-time value retrieval (e.g. on submit)|Yes|Yes|
|Validating on submit|Yes|Yes|
|Instant field validation|No|Yes|
|Conditionally disabling a submit button|No|Yes|
|Enforcing a specific input format|No|Yes|
|Several inputs for one piece of data|No|Yes|
|Dynamic inputs|No|Yes|


## JSX - Additional Resources

|Topic|URL|
|---|---|
|Chakra-UI|https://chakra-ui.com/|
|Compound components with hooks|https://kentcdodds.com/blog/compound-components-with-react-hooks|
|React Fragments|https://reactjs.org/docs/fragments.html|
|React.forwardRef API|https://reactjs.org/docs/forwarding-refs.html|
|Downshift|https://github.com/downshift-js/downshift|
|Render props|https://reactjs.org/docs/render-props.html|
|Higher Order Components|https://reactjs.org/docs/higher-order-components.html|
|Forwarding Refs|https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components|
|React testing library|https://testing-library.com/docs/react-testing-library/intro/|
|Jest|https://jestjs.io/docs/getting-started|
|Continuous delivery|https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment|
|Practical test pyramid|https://martinfowler.com/articles/practical-test-pyramid.html|