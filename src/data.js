export const courses = [
  { id: 1, title: "React Basics", description: "Learn fundamentals of React." },
  { id: 2, title: "JavaScript Mastery", description: "Deep dive into JS." },
  { id: 3, title: "Node.js Crash Course", description: "Server-side with Node." },
  { id: 4, title: "Python for Data Science", description: "Data analysis with Python." },
  { id: 5, title: "UI/UX Design Fundamentals", description: "Basics of design principles." },
  { id: 6, title: "Machine Learning Essentials", description: "Intro to ML concepts." },
  { id: 7, title: "Cloud Computing Foundations", description: "Learn cloud basics." },    
  { id: 8, title: "Digital Marketing Strategies", description: "Build successful online marketing campaigns and branding." },
  { id: 9, title: "Mobile App Development", description: "Build apps for iOS and Android." }
];

export const tutorials = {
  1: [
    {
      title: "Introduction to React",
      content: [
        { type: "p", text: "React is a JavaScript library for building user interfaces, developed by Facebook." },
        { type: "p", text: "It lets you build complex UIs from small, isolated pieces of code called components." },
        { type: "list", 
          items: [
            "Component-Based: Build encapsulated components that manage their own state",
            "Declarative: Describe what the UI should look like for any given state",
            "Learn Once, Write Anywhere: Can be used for web, mobile (React Native), and more"
          ] 
        }
      ]
    },
    {
      title: "Prerequisites & Setup",
      content: [
        { type: "p", text: "Before learning React, you should be familiar with:" },
        { type: "list", 
          items: [
            "HTML & CSS fundamentals",
            "JavaScript ES6+ features (arrow functions, destructuring, modules)",
            "Basic programming concepts"
          ] 
        },
        { type: "p", text: "Setup Options:" },
        { type: "list", 
          items: [
            "Create React App (recommended for beginners)",
            "Vite (faster alternative)",
            "CDN for simple experiments",
            "Online sandboxes like CodeSandbox"
          ] 
        }
      ]
    },
    {
      title: "JSX (JavaScript XML)",
      content: [
        { type: "p", text: "JSX is a syntax extension for JavaScript that looks similar to HTML." },
        { type: "p", text: "Key Rules of JSX:" },
        { type: "list", 
          items: [
            "Return a single parent element (use <div> or Fragment <>)",
            "All tags must be closed (<br />, <img />)",
            "Use className instead of class",
            "Use camelCase for attributes (onClick, onChange)",
            "Embed JavaScript expressions with curly braces { }"
          ] 
        },
        { type: "code", 
          language: "jsx",
          code: `// JSX Example
const name = "John";
const element = <h1 className="greeting">Hello, {name}!</h1>;

// Fragment Example
const FragmentExample = () => (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);`
        }
      ]
    },
    {
      title: "Components",
      content: [
        { type: "p", text: "Components are the building blocks of React applications." },
        { type: "p", text: "Functional Components (modern way):" },
        { type: "code", 
          language: "jsx",
          code: `// Function declaration
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Implicit return
const Welcome = () => <h1>Hello, World!</h1>;`
        },
        { type: "p", text: "Components can be nested and reused throughout your application." }
      ]
    },
    {
      title: "Props (Properties)",
      content: [
        { type: "p", text: "Props are how you pass data from parent to child components." },
        { type: "code", 
          language: "jsx",
          code: `// Parent Component
function App() {
  return (
    <div>
      <Welcome name="Sarah" age={25} />
      <Welcome name="Mike" age={30} />
    </div>
  );
}

// Child Component
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}! You are {props.age} years old.
    </h1>
  );
}

// With destructuring
function Welcome({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}`
        },
        { type: "p", text: "Props are read-only - components should never modify their own props." }
      ]
    },
    {
      title: "State (useState Hook)",
      content: [
        { type: "p", text: "State is data that changes over time - the 'memory' of a component." },
        { type: "code", 
          language: "jsx",
          code: `import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`
        },
        { type: "list", 
          items: [
            "Never modify state directly - always use the setter function",
            "State updates trigger re-renders",
            "Use multiple useState hooks for different values"
          ] 
        }
      ]
    },
    {
      title: "Event Handling",
      content: [
        { type: "p", text: "React events are similar to DOM events but with some syntax differences." },
        { type: "code", 
          language: "jsx",
          code: `function EventExamples() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  const handleInputChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      
      <input 
        type="text" 
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      
      {/* Inline function */}
      <button onClick={() => console.log('Inline click')}>
        Inline Handler
      </button>
    </div>
  );
}` 
        },
        { type: "list", 
          items: [
            "Use camelCase (onClick, onChange, onSubmit)",
            "Pass function reference, not function call (onClick={handleClick})",
            "Use arrow functions for inline handlers"
          ] 
        }
      ]
    },
    {
      title: "Building a Todo List App",
      content: [
        { type: "p", text: "Let's build a simple Todo List to practice all the concepts we've learned!" },
        { type: "code", 
          language: "jsx",
          code: `import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: inputValue, 
        completed: false 
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>My Todo List</h1>
      
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span 
              onClick={() => toggleTodo(todo.id)}
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}` 
        },
        { type: "p", text: "This example combines useState, event handling, props, and JSX to create an interactive application." }
      ]
    },
    {
      title: "Next Steps",
      content: [
        { type: "p", text: "Congratulations! You've learned the React fundamentals. Here's what to explore next:" },
        { type: "list", 
          items: [
            "useEffect Hook: For side effects and API calls",
            "Conditional Rendering: Showing/hiding elements based on state",
            "Lists and Keys: Properly rendering dynamic lists",
            "Forms: Handling form inputs and validation",
            "React Router: For multi-page applications",
            "Context API: For global state management",
            "Custom Hooks: Reusing stateful logic"
          ] 
        },
        { type: "p", text: "Practice building more projects and explore the official React documentation for deeper learning!" }
      ]
    }
  ]
};