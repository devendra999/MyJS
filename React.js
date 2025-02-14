What is a key in React?
--------------------------------------------------------------------------------
    A key is a special attribute in React that helps identify each element in a list. It must be unique among siblings. Keys help React efficiently update and render UI elements.

    React uses a diffing algorithm to compare the Virtual DOM before and after updates:
        1. With keys: React quickly finds which items changed, were added, or removed.
        2. Without keys: React may re-render everything, causing performance issues.


React Hook (Simple Definition) ?
--------------------------------------------------------------------------------
    A React Hook is a special function that lets you use React features (like state and lifecycle methods) inside functional components without needing a class.

    useState → Adds state to functional components.
    useEffect → Runs side effects (like fetching data or updating the DOM).

    

virtual dom how work ?
--------------------------------------------------------------------------------
    lightweight copy of the real DOM in memory
    
    When a React app is first rendered, React creates a Virtual DOM based on the component tree.
    React then compares the Virtual DOM with the real DOM to determine what changes need to be made.
    The result of this comparison is a set of changes (or "diffs"), which are then applied to the real DOM.


What is React js
--------------------------------------------------------------------------------
    React is a JavaScript library for building user interfaces. React is used to build single - page applications. React allows us to create reusable UI components.

    
What are components in React?
---------------------------------------------------
A component in React is a reusable, self-contained piece of UI that returns JSX (HTML + JavaScript). Components make React apps modular and easy to maintain.



What is JSX, and why is it used in React?
---------------------------------------------------
JSX is converted into React.createElement() calls using Babel, which transforms JSX into JavaScript.


Lifting State Up in React
---------------------------------------------------
In React, lifting state up means moving state from a child component to a common parent component so that multiple components can share and manage the same data.

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

    const cachedFn = useCallback(fn, dependencies)

    example
    1. import { useCallback } from 'react';

        export default function ProductPage({ productId, referrer, theme }) {
        const handleSubmit = useCallback((orderDetails) => {
            post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
            });
        }, [productId, referrer]);


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

    example
    import { useId } from 'react';

    function PasswordField() {
        const passwordHintId = useId();
        // ...
    }

    <>
        <input type="password" aria-describedby={passwordHintId} />
        <p id={passwordHintId}>
    </>


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

    example
    1. export default function Counter() {
            let ref = useRef(0);

            function handleClick() {
                ref.current = ref.current + 1;
                alert('You clicked ' + ref.current + ' times!');
            }

            return (
                <button onClick={handleClick}>
                Click me!
                </button>
            );
        }

    2. import { useRef } from 'react';

            export default function Form() {
            const inputRef = useRef(null);

            function handleClick() {
                inputRef.current.focus();
            }

            return (
                <>
                <input ref={inputRef} />
                <button onClick={handleClick}>
                    Focus the input
                </button>
                </>
            );
        }



Controlled vs Uncontrolled Components in ReactJS
--------------------------------------------------------------------------------
    In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

    Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.


What are Higher-Order Components?
--------------------------------------------------------------------------------
    higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

    example:
        // Here's a simple component
        function SimpleComponent(props) {
            return <div>{props.message}</div>;
        }
        // And here's a higher-order component
        function withExtraProp(WrappedComponent) {
            return function EnhancedComponent(props) {
                return <WrappedComponent {...props} extraProp="I'm an extra prop!" />;
            };
        }

        // You can then create an enhanced version of SimpleComponent
        const EnhancedComponent = withExtraProp(SimpleComponent);

        // EnhancedComponent will have an extra prop
        <EnhancedComponent message="Hello world" />; // Renders: <div>Hello world. I'm an extra prop!</div>

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





The synchronous callback
--------------------------------------------------------------------------------
    The synchronous callback is executed during the execution of the higher-order function that uses the callback.
    In other words, the synchronous callbacks are blocking: the higher-order function doesn't complete its execution until the callback is done executing.

    example
     // Higher order function
    1. function map(array, callback) {
        console.log('map() starts');
        const mappedArray = [];
        for (const item of array) { mappedArray.push(callback(item)) }
        console.log('map() completed');
        return mappedArray;
    }

    function greet(name) {
        console.log('greet() called');
        return `Hello, ${name}!`;
    }

    const persons = ['Cristina'];

    map(persons, greet);
    // logs 'map() starts'
    // logs 'greet() called'
    // logs 'map() completed'

    Explained: greet() is a synchronous callback because it's being executed at the same time as the higher-order function map(). 

    2. // Examples of synchronous callbacks on arrays
        const persons = ['Ana', 'Elena'];

        persons.forEach(
            function callback(name) {
                console.log(name);
            }
        );
        // logs 'Ana'
        // logs 'Elena'

        const nameStartingA = persons.find(
            function callback(name) {
                return name[0].toLowerCase() === 'a';
            }
        );
        nameStartingA; // => 'Ana'

        const countStartingA = persons.reduce(
            function callback(count, name) {
                const startsA = name[0].toLowerCase() === 'a';
                return startsA ? count + 1 : count;
            }, 0 );
        countStartingA; // => 1

    3. // Examples of synchronous callbacks on strings
        const person = 'Cristina';

        // Replace 'i' with '1'
        person.replace(/./g, 
        function(char) {
            return char.toLowerCase() === 'i' ? '1' : char;
        }); // => 'Cr1st1na'


        
The asynchronous callback
--------------------------------------------------------------------------------
    The asynchronous callback is executed after the execution of the higher-order function.
    Simply saying, the asynchronous callbacks are non-blocking: the higher-order function completes its execution without waiting for the callback. The higher-order function makes sure to execute the callback later on a certain event.

    example
    1. console.log('setTimeout() starts');
        setTimeout(function later() {
            console.log('later() called');
        }, 2000);
        console.log('setTimeout() completed');

        // logs 'setTimeout() starts'
        // logs 'setTimeout() completed'
        // logs 'later() called' (after 2 seconds)



Asynchronous callback function vs asynchronous function
--------------------------------------------------------------------------------
    The special keyword async placed before the function definition creates an asynchornous function:
    setTimeout is Asynchronous callback function


useReducer
--------------------------------------------------------------------------------
    The useReducer Hook is similar to the useState Hook.

    It allows for custom state logic.

    If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

    The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
    The useReducer Hook returns the current stateand a dispatchmethod.

    const CartProvider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const addToCart = (id, color, amount, product) => {
            dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
        };

        // increment and decrement the product

        const setDecrease = (id) => {
            dispatch({ type: "SET_DECREMENT", payload: id });
        };

        const setIncrement = (id) => {
            dispatch({ type: "SET_INCREMENT", payload: id });
        };

        return (
                <CartContext.Provider
                value={{
                    ...state,
                    addToCart,
                    removeItem,
                    clearCart,
                    setDecrease,
                    setIncrement,
                }}
                >
                {children}
                </CartContext.Provider>
            );
        };

Network response
--------------------------------------------------------------------------------
    200 - request succed - for CRUD
    201 - Created - Post some data
    202 - accepted - The request has been received but not yet acted upon.
    203 - Non-Authoritative Information - This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
    204 - No Content - There is no content to send for this request, but the headers may be useful. 
    400 - Bad Request - The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
    401 - Unauthorized - Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
    402 - Payment Required Experimental - This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
    403 - Forbidden - The client does not have access rights to the content; 
    404 - Not Found - The server cannot find the requested resource. In the browser, this means the URL is not recognized.
    405 - Method Not Allowed
    408 - Request Timeout - This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.
    500 - Internal Server Error - The server has encountered a situation it does not know how to handle.
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
