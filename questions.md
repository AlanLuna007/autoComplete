1.- Pure Component Class compares current state and props with new props and states to decide whether the component should re-render or Not and React.Component re-renders itself every time the props passed to it changes, parent component re-renders or if the shouldComponentUpdate() method is called. 

2.- Context is used to communicate with deeply contained components. For example, a root component defines a theme, and any component in the component tree might be interested in this information and shouldComponentUpdate on the other hand short circuits the re-rendering of a part of the component tree , for example if the props or state of a component are not modified in a meaningful way. As far as the component can tell. But this might accidentally block context propagation…

3.- a) In the parent component, create a callback function. This callback function will retrieve the data from the child component.
    b) useContext
    c) redux

4.- a) Replace useState() with useRef()
    b) It is done using stateVariable. The value of the stateVariable determines whether to render the component or not. Its value can be changed by the occurrence of any event like onClick.

5.- Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node. React fragments serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will render without any wrapping DOM node. React fragments enable us to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.

6.- A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux’s connect and Relay’s createContainer.

7.- allback is a function that is passed to another function. When the first function is done, it will run the second function  With Promises, we can defer the execution of a code block until an async request is completed and Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

8.- The setState method takes up to 2 arguments. We usually pass in only one. The first argument can be an object or a callback that’s used to update the state. The second argument is a function that’s always run after setState is run.

9.- a) Change the class to a function
    b) Remove the render method
    c) Convert all methods to functions
    d) Remove references to this
    e) Remove constructor
    f) Replace this.setState
    g) useEffect for state update side effects
    h) Replace lifecycle methods with hooks

10.- a) Add the Global Styles to “index.html” File
     b) Create a Style for Each Individual Component
     c) Adding Inline Style to React Component Elements
     d) Attach style property to JavaScript Style Object

11.- React can usually only render UI written in JSX or createElement.