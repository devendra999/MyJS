What is React js
--------------------------------------------------------------------------------
    React is a JavaScript library for building user interfaces. React is used to build single - page applications. React allows us to create reusable UI components.

Create react app
--------------------------------------------------------------------------------
    npx create-react-app my-react-app

How does React Work?
--------------------------------------------------------------------------------
    React creates a VIRTUAL DOM in memory.
    Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

ES6
--------------------------------------------------------------------------------
    Classes
    Arrow Functions
    Variables(let, const, var)
    Array Methods like .map()
    Destructuring
    Modules
    Ternary Operator
    Spread Operator

what is JSX?
--------------------------------------------------------------------------------
    JSX stands for JavaScript XML.JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. expression is {}

React Components
--------------------------------------------------------------------------------
    Components are independent and reusable bits of code.They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
    Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

Props
--------------------------------------------------------------------------------
    Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
    Props are also how you pass data from one component to another, as parameters.

    To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

React Events
--------------------------------------------------------------------------------
    Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc.
    React event handlers are written inside curly braces: onClick={shoot} instead of onClick="shoot()".

keys or React List
--------------------------------------------------------------------------------
    Keys allow React to keep track of elements. the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.
    A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.


React Form
--------------------------------------------------------------------------------
    You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

    For Multiple Input Fields
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
    <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />

React Router
--------------------------------------------------------------------------------
    React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

    React Router Dom has many useful components
    BrowserRouter, Routes, Route, Link

    Demo
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
    </Routes>

    useCallback Hook
--------------------------------------------------------------------------------
    Return a momoized callback function

style
--------------------------------------------------------------------------------

    <h1 style={{ backgroundColor: "lightblue", color: '#f00' }}>Hello Style!</h1>

    for using Object
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    <h1 style={myStyle}>Hello Style!</h1>

    external csss just import it like. : import './App.css';

What is Hook
--------------------------------------------------------------------------------
    Hooks allow us to "hook" into React features such as state and lifecycle methods.

    useState
    The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
    const [color, setColor] = useState("initial value");

    useEffect
    fetching data, directly updating the DOM, and timers.
    useEffect accepts two arguments. The second argument is optional.
    useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
    This is not what we want. There are several ways to control when side effects run.
    We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

    useEffect(() => {

    }, []);

React Context
--------------------------------------------------------------------------------
    React Context is a way to manage state globally. In order to use the Context in a child component, we need to access it using the useContext Hook.

useRef
--------------------------------------------------------------------------------
    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
    useRef() only returns one item. It returns an Object called current.
    When we initialize useRef we set the initial value: useRef(0)

    function App() {
        const inputElement = useRef();

        const focusInput = () => {
            inputElement.current.focus();
        };

        return (
            <>
                <input type="text" ref={inputElement} />
                <button onClick={focusInput}>Focus Input</button>
            </>
        );
    }

useReducer
--------------------------------------------------------------------------------
    The useReducer Hook is similar to the useState Hook.
    It allows for custom state logic.
    If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

useMemo Hook
--------------------------------------------------------------------------------
    React memo is a Higher Order Component (HOC)
    The React useMemo Hook returns a memoized value.
    to optimize performance and makes the application faster. The Memo API avoids unnecessary re-renders in functional components and thereby optimizing the performance of the application.
    The useMemo Hook only runs when one of its dependencies update.

    using react memo we can store value in varibale and also return value.
    const checkData = useMemo(() => {
        return countNumber(myNum);
    }, [myNum]);

useCallback Hook
--------------------------------------------------------------------------------
    The React useCallback Hook returns a memoized callback function.
    The useCallback Hook only runs when one of its dependencies update.
    This can improve performance.

Difference between useCallback and useMemo Hooks
--------------------------------------------------------------------------------
    The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

React Custom Hooks
--------------------------------------------------------------------------------
    Hooks are reusable functions.
    Custom Hooks start with "use". Example: useFetch.
    When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.


when we refresh page using redux data is stable or not
--------------------------------------------------------------------------------
    data it's not stable in redux.

framework vs library
--------------------------------------------------------------------------------
framework - flow already defined, in framework there are multiple library used
library - flow defined by us, in library we cannot use framework

Why react js so fast?
--------------------------------------------------------------------------------
    react js using virtual dom there are two layer before updates and after updates.

useId hook
--------------------------------------------------------------------------------
    useId hook use for generage unique ID

What is the difference between Element and Component?
--------------------------------------------------------------------------------
    An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated.

    Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:


Pure components (class based component)
--------------------------------------------------------------------------------
    If the previous value of the state or props and the new value of the state or props are the same, the component will not re-render itself. Pure Components restricts the re-rendering when there is no use for re-rendering of the component.
    
    React.memo() is a higher-order component.

    Demo
         import { memo, useState } from 'react';

        const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
            return (<>
                <p>Name:{name}</p>
                <p>Email: {email}</p>
                </>);
        });
        export default function EmployeeRegForm() {
            const [name, setName] = useState('');
            const [email, setEmail] = useState('');
            return (
            <>
                <label>
                Name: <input value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                Email: <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <hr/>
                <EmployeeProfile name={name}/>
            </>
            );
        }

        In the above code, the email prop has not been passed to child component. So there won't be any re-renders for email prop change.

What is the purpose of callback function as an argument of setState()?
--------------------------------------------------------------------------------
    The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

    setState((prevState, props) => ({
        count: prevState.count + props.increment,
    }));

What are inline conditional expressions?
--------------------------------------------------------------------------------
    <h1>Hello!</h1>;
    {
    messages.length > 0 && !isLogin ? (
        <h2>You have {messages.length} unread messages.</h2>
    ) : (
        <h2>You don't have unread messages.</h2>
    );
    }

What is the use of refs?
--------------------------------------------------------------------------------
    The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.


Controlled vs Uncontrolled Components in ReactJS
--------------------------------------------------------------------------------
    In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

    Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.


What are Higher-Order Components?
--------------------------------------------------------------------------------
    A higher-order component (HOC) is a function that takes a component and returns a new component.

what is context?
--------------------------------------------------------------------------------
    The React Context is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

Why fragments are better than container divs?
--------------------------------------------------------------------------------
    using divs it's create a new div in html, with react fragement <></> it's not create any element.

What are the limitations of React?
--------------------------------------------------------------------------------
    React is just a view library, not a full framework.

What are the differences between a class component and functional component?
--------------------------------------------------------------------------------
    The class component uses ES6 class syntax, and it extends React components with a render method that returns React elements.

    Functional components with hooks are purely JavaScript functions that also return React elements. Before the introduction of hooks, functional components were stateless.


--------------------------------------------------------------------------------
    

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
