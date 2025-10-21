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
  ],

  2: [
  {
    title: "Introduction to JavaScript",
    content: [
      { type: "p", text: "JavaScript is a versatile, high-level programming language primarily used for web development." },
      { type: "p", text: "It runs in browsers and on servers (Node.js), making it essential for modern web applications." },
      { type: "list", 
        items: [
          "Dynamic & Interpreted: No compilation needed, runs directly in browsers",
          "Event-Driven: Responds to user interactions and events",
          "Multi-Paradigm: Supports object-oriented, functional, and imperative programming",
          "Cross-Platform: Works on any device with a JavaScript engine"
        ] 
      }
    ]
  },
  {
    title: "Variables & Data Types",
    content: [
      { type: "p", text: "Variables store data values. Modern JavaScript uses let and const (avoid var)." },
      { type: "code", 
        language: "javascript",
        code: `// Variable declarations
let age = 25;              // Can be reassigned
const name = "John";       // Cannot be reassigned
age = 26;                  // ✓ Works
// name = "Jane";          // ✗ Error!

// Data Types
const string = "Hello";           // String
const number = 42;                // Number
const float = 3.14;               // Also Number
const boolean = true;             // Boolean
const nothing = null;             // Null
const notDefined = undefined;     // Undefined
const array = [1, 2, 3];          // Array
const object = { key: "value" };  // Object`
      },
      { type: "list", 
        items: [
          "Use const by default, let only when you need to reassign",
          "JavaScript is dynamically typed - variables can change types",
          "Use typeof operator to check variable types"
        ] 
      }
    ]
  },
  {
    title: "Operators",
    content: [
      { type: "p", text: "Operators perform operations on variables and values." },
      { type: "code", 
        language: "javascript",
        code: `// Arithmetic Operators
let sum = 10 + 5;          // 15
let difference = 10 - 5;   // 5
let product = 10 * 5;      // 50
let quotient = 10 / 5;     // 2
let remainder = 10 % 3;    // 1
let power = 2 ** 3;        // 8

// Comparison Operators
5 == "5"    // true (loose equality)
5 === "5"   // false (strict equality)
5 != "5"    // false
5 !== "5"   // true
5 > 3       // true
5 <= 5      // true

// Logical Operators
true && false   // false (AND)
true || false   // true (OR)
!true          // false (NOT)

// Assignment Operators
let x = 10;
x += 5;    // x = x + 5 (15)
x -= 3;    // x = x - 3 (12)
x *= 2;    // x = x * 2 (24)
x++;       // x = x + 1 (25)
x--;       // x = x - 1 (24)`
      }
    ]
  },
  {
    title: "Conditional Statements",
    content: [
      { type: "p", text: "Control the flow of your program based on conditions." },
      { type: "code", 
        language: "javascript",
        code: `// if-else statement
const age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// Ternary operator (shorthand)
const status = age >= 18 ? "adult" : "minor";

// Switch statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day");
}`
      },
      { type: "list", 
        items: [
          "Use === for strict equality checks (compares value and type)",
          "Don't forget break in switch statements",
          "Ternary operators are great for simple conditions"
        ] 
      }
    ]
  },
  {
    title: "Loops",
    content: [
      { type: "p", text: "Loops execute code repeatedly until a condition is met." },
      { type: "code", 
        language: "javascript",
        code: `// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// While Loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Do-While Loop (runs at least once)
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// For...of Loop (arrays)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// For...in Loop (object properties)
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}

// Array methods (modern approach)
fruits.forEach(fruit => console.log(fruit));`
      }
    ]
  },
  {
    title: "Functions",
    content: [
      { type: "p", text: "Functions are reusable blocks of code that perform specific tasks." },
      { type: "code", 
        language: "javascript",
        code: `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow Function (ES6+)
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Arrow Function (implicit return)
const greet = name => "Hello, " + name + "!";

// Default Parameters
const greet = (name = "Guest") => {
  return "Hello, " + name + "!";
};

// Multiple Parameters
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Rest Parameters
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4)); // 10`
      },
      { type: "list", 
        items: [
          "Arrow functions are the modern standard for most use cases",
          "Use default parameters to handle missing arguments",
          "Functions are first-class citizens - can be passed as arguments"
        ] 
      }
    ]
  },
  {
    title: "Arrays",
    content: [
      { type: "p", text: "Arrays store multiple values in a single variable." },
      { type: "code", 
        language: "javascript",
        code: `// Creating Arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null];

// Accessing Elements
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "orange"

// Common Array Methods
fruits.push("grape");          // Add to end
fruits.pop();                  // Remove from end
fruits.unshift("mango");       // Add to beginning
fruits.shift();                // Remove from beginning

// Modern Array Methods
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const sum = numbers.reduce((total, n) => total + n, 0);
// 15

const hasThree = numbers.includes(3);
// true

const firstEven = numbers.find(n => n % 2 === 0);
// 2

const index = numbers.indexOf(3);
// 2

// Destructuring
const [first, second, ...rest] = fruits;
console.log(first);  // "apple"
console.log(rest);   // ["orange"]`
      }
    ]
  },
  {
    title: "Objects",
    content: [
      { type: "p", text: "Objects store collections of key-value pairs." },
      { type: "code", 
        language: "javascript",
        code: `// Creating Objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
  isStudent: false
};

// Accessing Properties
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Adding/Modifying Properties
person.email = "john@example.com";
person.age = 31;

// Deleting Properties
delete person.isStudent;

// Object Methods
const user = {
  name: "Sarah",
  age: 25,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },
  // Arrow functions don't have 'this'
  getBirthYear: () => {
    return new Date().getFullYear() - this.age;
  }
};

console.log(user.greet()); // "Hello, I'm Sarah"

// Object Destructuring
const { name, age } = person;
console.log(name); // "John"

// Spread Operator
const updatedPerson = { ...person, country: "USA" };

// Object.keys, values, entries
console.log(Object.keys(person));    // ["name", "age", "city"]
console.log(Object.values(person));  // ["John", 31, "New York"]
console.log(Object.entries(person)); // [["name", "John"], ...]`
      }
    ]
  },
  {
    title: "ES6+ Features",
    content: [
      { type: "p", text: "Modern JavaScript features that make code cleaner and more efficient." },
      { type: "code", 
        language: "javascript",
        code: `// Template Literals
const name = "John";
const age = 30;
const message = \`Hello, my name is \${name} and I'm \${age} years old.\`;

// Destructuring
const person = { name: "Sarah", age: 25, city: "NYC" };
const { name: userName, age: userAge } = person;

const colors = ["red", "green", "blue"];
const [primary, secondary] = colors;

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// Rest Parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b);

// Optional Chaining
const user = { profile: { name: "John" } };
console.log(user?.profile?.name); // "John"
console.log(user?.settings?.theme); // undefined (no error)

// Nullish Coalescing
const value = null ?? "default"; // "default"
const value2 = 0 ?? "default";   // 0 (only null/undefined trigger ??)

// Short-circuit Evaluation
const name = userName || "Guest";
const isValid = value && value.length > 0;`
      }
    ]
  },
  {
    title: "DOM Manipulation",
    content: [
      { type: "p", text: "Interact with HTML elements using JavaScript." },
      { type: "code", 
        language: "javascript",
        code: `// Selecting Elements
const element = document.getElementById("myId");
const elements = document.getElementsByClassName("myClass");
const element = document.querySelector(".myClass");
const elements = document.querySelectorAll(".myClass");

// Modifying Content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Modifying Styles
element.style.color = "red";
element.style.backgroundColor = "blue";
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");

// Modifying Attributes
element.setAttribute("data-id", "123");
const id = element.getAttribute("data-id");
element.removeAttribute("data-id");

// Creating Elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);

// Event Listeners
const button = document.querySelector("#myButton");

button.addEventListener("click", (e) => {
  console.log("Button clicked!");
  console.log(e.target); // The clicked element
});

// Common Events: click, change, submit, keydown, mouseover, etc.

// Removing Elements
element.remove();
parent.removeChild(child);`
      }
    ]
  },
  {
    title: "Building a Task Manager App",
    content: [
      { type: "p", text: "Let's build a complete task manager using vanilla JavaScript!" },
      { type: "code", 
        language: "javascript",
        code: `// Task Manager Application
class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.init();
  }

  init() {
    this.renderTasks();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = document.getElementById('taskForm');
    const input = document.getElementById('taskInput');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = input.value.trim();
      
      if (taskText) {
        this.addTask(taskText);
        input.value = '';
      }
    });
  }

  addTask(text) {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.tasks.push(task);
    this.saveTasks();
    this.renderTasks();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.renderTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    this.tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';
      
      li.innerHTML = \`
        <span class="task-text" data-id="\${task.id}">
          \${task.text}
        </span>
        <button class="delete-btn" data-id="\${task.id}">
          Delete
        </button>
      \`;

      // Toggle completion
      li.querySelector('.task-text').addEventListener('click', () => {
        this.toggleTask(task.id);
      });

      // Delete task
      li.querySelector('.delete-btn').addEventListener('click', () => {
        this.deleteTask(task.id);
      });

      taskList.appendChild(li);
    });

    // Update stats
    this.updateStats();
  }

  updateStats() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.completed).length;
    
    document.getElementById('stats').textContent = 
      \`\${completed} / \${total} tasks completed\`;
  }
}

// Initialize the app
const app = new TaskManager();`
      },
      { type: "p", text: "This example demonstrates classes, DOM manipulation, event handling, and localStorage for data persistence." }
    ]
  },
  {
    title: "Asynchronous JavaScript",
    content: [
      { type: "p", text: "Handle operations that take time, like API calls and timers." },
      { type: "code", 
        language: "javascript",
        code: `// Callbacks (old way)
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// Promises (better way)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ data: "User data" });
      } else {
        reject("Error occurred");
      }
    }, 1000);
  });
};

fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Async/Await (cleanest way)
const getData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Real API Example
const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};

// Multiple async operations
const fetchAll = async () => {
  const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
  ]);
  
  console.log(users, posts);
};`
      }
    ]
  },
  {
    title: "Next Steps",
    content: [
      { type: "p", text: "Congratulations! You've learned JavaScript fundamentals. Here's what to explore next:" },
      { type: "list", 
        items: [
          "Error Handling: Try-catch blocks and error objects",
          "Modules: Import/export for organizing code",
          "Regular Expressions: Pattern matching in strings",
          "Local Storage: Persisting data in the browser",
          "Fetch API: Making HTTP requests",
          "JavaScript Frameworks: React, Vue, or Angular",
          "Node.js: JavaScript on the server",
          "TypeScript: Type-safe JavaScript"
        ] 
      },
      { type: "p", text: "Keep practicing by building projects and exploring advanced concepts. The best way to learn is by doing!" }
    ]
  }
],

3: [
  {
    title: "Introduction to Node.js",
    content: [
      { type: "p", text: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server." },
      { type: "p", text: "It enables building scalable network applications using JavaScript outside the browser." },
      { type: "list", 
        items: [
          "Asynchronous & Event-Driven: Non-blocking I/O operations for better performance",
          "Single-Threaded: Uses event loop for handling concurrent operations",
          "NPM Ecosystem: Access to millions of packages via Node Package Manager",
          "Cross-Platform: Runs on Windows, macOS, and Linux",
          "Fast Execution: Built on Google's high-performance V8 JavaScript engine"
        ] 
      }
    ]
  },
  {
    title: "Installation & Setup",
    content: [
      { type: "p", text: "Getting started with Node.js is straightforward." },
      { type: "list", 
        items: [
          "Download from nodejs.org (LTS version recommended)",
          "Verify installation: node --version and npm --version",
          "Use nvm (Node Version Manager) for managing multiple Node versions",
          "Initialize project: npm init or npm init -y for quick setup"
        ] 
      },
      { type: "code", 
        language: "bash",
        code: `# Check Node.js version
node --version

# Check npm version
npm --version

# Create a new project
mkdir my-node-app
cd my-node-app
npm init -y

# Install a package
npm install express

# Run a JavaScript file
node app.js`
      }
    ]
  },
  {
    title: "Node.js Basics",
    content: [
      { type: "p", text: "Understanding core Node.js concepts and global objects." },
      { type: "code", 
        language: "javascript",
        code: `// Global Objects (available everywhere)
console.log(__dirname);   // Current directory path
console.log(__filename);  // Current file path
console.log(process.env); // Environment variables
console.log(process.argv); // Command line arguments

// Simple Node.js program
console.log('Hello from Node.js!');

// Using setTimeout (non-blocking)
setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);

// Process object
console.log('Node version:', process.version);
console.log('Platform:', process.platform);

// Exit process
// process.exit(0); // Success
// process.exit(1); // Error`
      },
      { type: "list", 
        items: [
          "Node.js runs JavaScript files with: node filename.js",
          "No window or document object (browser APIs unavailable)",
          "Use global instead of window for global scope",
          "Process object provides info about current Node.js process"
        ] 
      }
    ]
  },
  {
    title: "Modules & Require",
    content: [
      { type: "p", text: "Node.js uses modules to organize and reuse code. Every file is a module." },
      { type: "code", 
        language: "javascript",
        code: `// math.js - Creating a module
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Export single function
module.exports = add;

// Export multiple functions
module.exports = { add, subtract, multiply };

// Alternative export syntax
exports.add = add;
exports.subtract = subtract;

// ======================

// app.js - Using the module
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2

// Destructuring imports
const { add, multiply } = require('./math');
console.log(add(10, 5));      // 15
console.log(multiply(10, 5)); // 50

// ======================

// ES6 Modules (modern way - requires "type": "module" in package.json)
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default multiply = (a, b) => a * b;

// app.js
import multiply, { add, subtract } from './math.js';
import * as math from './math.js';`
      }
    ]
  },
  {
    title: "Core Modules - File System (fs)",
    content: [
      { type: "p", text: "The fs module allows you to work with the file system on your computer." },
      { type: "code", 
        language: "javascript",
        code: `const fs = require('fs');

// Reading files (synchronous - blocking)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Reading files (asynchronous - non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

// Writing files
fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

// Appending to files
fs.appendFile('output.txt', '\\nNew line', (err) => {
  if (err) throw err;
  console.log('Content appended');
});

// Deleting files
fs.unlink('output.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});

// Working with directories
fs.mkdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Directory created');
});

fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log('Files:', files);
});

// Using Promises (modern approach)
const fsPromises = require('fs').promises;

const readFileAsync = async () => {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};`
      }
    ]
  },
  {
    title: "Core Modules - Path",
    content: [
      { type: "p", text: "The path module provides utilities for working with file and directory paths." },
      { type: "code", 
        language: "javascript",
        code: `const path = require('path');

// Get base filename
console.log(path.basename('/users/john/file.txt')); 
// 'file.txt'

// Get directory name
console.log(path.dirname('/users/john/file.txt')); 
// '/users/john'

// Get file extension
console.log(path.extname('file.txt')); 
// '.txt'

// Create path object
console.log(path.parse('/users/john/file.txt'));
// { root: '/', dir: '/users/john', base: 'file.txt', ext: '.txt', name: 'file' }

// Join paths (handles OS differences)
const filePath = path.join('/users', 'john', 'file.txt');
console.log(filePath); // '/users/john/file.txt'

// Resolve absolute path
console.log(path.resolve('file.txt')); 
// Absolute path to file.txt

// Check if path is absolute
console.log(path.isAbsolute('/users/john')); // true
console.log(path.isAbsolute('file.txt'));     // false

// Get path separator
console.log(path.sep); // '/' on Unix, '\\' on Windows`
      },
      { type: "list", 
        items: [
          "Always use path.join() instead of string concatenation for paths",
          "path module handles OS-specific path differences automatically",
          "Use __dirname and __filename with path for reliable file paths"
        ] 
      }
    ]
  },
  {
    title: "Core Modules - HTTP",
    content: [
      { type: "p", text: "Create web servers and handle HTTP requests/responses." },
      { type: "code", 
        language: "javascript",
        code: `const http = require('http');

// Create a basic server
const server = http.createServer((req, res) => {
  // req = request object
  // res = response object
  
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send response
  res.write('<h1>Hello World!</h1>');
  res.end();
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

// Routing example
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else if (req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: ['John', 'Jane'] }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(3000);`
      }
    ]
  },
  {
    title: "NPM - Node Package Manager",
    content: [
      { type: "p", text: "NPM is the world's largest software registry with millions of packages." },
      { type: "code", 
        language: "bash",
        code: `# Initialize a new project
npm init
npm init -y  # Skip questions

# Install package locally
npm install express
npm i express  # Shorthand

# Install as dev dependency
npm install --save-dev nodemon
npm i -D nodemon

# Install globally
npm install -g nodemon

# Install specific version
npm install express@4.17.1

# Uninstall package
npm uninstall express

# Update packages
npm update

# List installed packages
npm list
npm list --depth=0  # Top-level only

# Check outdated packages
npm outdated

# Run scripts from package.json
npm run dev
npm start
npm test`
      },
      { type: "p", text: "Package.json scripts example:" },
      { type: "code", 
        language: "json",
        code: `{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}`
      },
      { type: "list", 
        items: [
          "package.json tracks project dependencies and metadata",
          "package-lock.json locks exact versions for consistency",
          "node_modules folder contains all installed packages (add to .gitignore)",
          "Use semantic versioning: ^1.0.0 (compatible), ~1.0.0 (patch), 1.0.0 (exact)"
        ] 
      }
    ]
  },
  {
    title: "Express.js Framework",
    content: [
      { type: "p", text: "Express is the most popular Node.js web framework, making server development easier." },
      { type: "code", 
        language: "javascript",
        code: `const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routing
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

// JSON response
app.get('/api/users', (req, res) => {
  res.json({ users: ['John', 'Jane', 'Bob'] });
});

// Route parameters
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: 'John Doe' });
});

// Query parameters (?name=john&age=30)
app.get('/search', (req, res) => {
  const { name, age } = req.query;
  res.json({ name, age });
});

// POST request
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.status(201).json({ message: 'User created', user: newUser });
});

// PUT request
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: 'User updated', id, data: updatedData });
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User deleted', id });
});

// Serve static files
app.use(express.static('public'));

// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`
      }
    ]
  },
  {
    title: "Express Middleware",
    content: [
      { type: "p", text: "Middleware functions have access to request and response objects and can modify them." },
      { type: "code", 
        language: "javascript",
        code: `const express = require('express');
const app = express();

// Custom middleware - logging
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);
  next(); // Pass control to next middleware
};

// Apply middleware globally
app.use(logger);

// Middleware for specific routes
app.use('/api', (req, res, next) => {
  console.log('API route accessed');
  next();
});

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files

// Third-party middleware
const cors = require('cors');
const morgan = require('morgan');

app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token (simplified)
  if (token === 'valid-token') {
    req.user = { id: 1, name: 'John' };
    next();
  } else {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});

// Error handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});`
      },
      { type: "list", 
        items: [
          "Middleware executes in the order it's defined",
          "Always call next() to pass control to next middleware",
          "Error handling middleware must have 4 parameters: (err, req, res, next)",
          "Use app.use() for global middleware, or specify routes for specific middleware"
        ] 
      }
    ]
  },
  {
    title: "Environment Variables",
    content: [
      { type: "p", text: "Store configuration and sensitive data outside your code." },
      { type: "code", 
        language: "bash",
        code: `# Install dotenv package
npm install dotenv`
      },
      { type: "p", text: "Create a .env file:" },
      { type: "code", 
        language: "text",
        code: `PORT=3000
DB_HOST=localhost
DB_USER=admin
DB_PASS=secret123
API_KEY=your-api-key-here
NODE_ENV=development`
      },
      { type: "p", text: "Use environment variables in your app:" },
      { type: "code", 
        language: "javascript",
        code: `// Load environment variables
require('dotenv').config();

// Access environment variables
const PORT = process.env.PORT || 3000;
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const apiKey = process.env.API_KEY;
const isProduction = process.env.NODE_ENV === 'production';

console.log('Running on port:', PORT);

// Different configs for different environments
if (isProduction) {
  // Production config
  app.use(compression());
  app.use(helmet());
} else {
  // Development config
  app.use(morgan('dev'));
}`
      },
      { type: "list", 
        items: [
          "Never commit .env file to version control (add to .gitignore)",
          "Create .env.example with dummy values for other developers",
          "Use different .env files for development and production",
          "Always provide default values for environment variables"
        ] 
      }
    ]
  },
  {
    title: "Building a REST API",
    content: [
      { type: "p", text: "Create a complete REST API with CRUD operations." },
      { type: "code", 
        language: "javascript",
        code: `const express = require('express');
const app = express();

app.use(express.json());

// In-memory database (use real database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

// CREATE user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { name, email } = req.body;
  
  if (name) user.name = name;
  if (email) user.email = email;
  
  res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const deletedUser = users.splice(index, 1);
  res.json({ message: 'User deleted', user: deletedUser[0] });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`
      },
      { type: "list", 
        items: [
          "RESTful conventions: GET (read), POST (create), PUT (update), DELETE (delete)",
          "Use appropriate HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)",
          "Always validate input data before processing",
          "Return consistent JSON responses with proper error messages"
        ] 
      }
    ]
  },
  {
    title: "Async/Await in Node.js",
    content: [
      { type: "p", text: "Handle asynchronous operations cleanly with async/await." },
      { type: "code", 
        language: "javascript",
        code: `const fs = require('fs').promises;

// Reading files with async/await
const readFileAsync = async () => {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

// Multiple async operations
const processFiles = async () => {
  try {
    const file1 = await fs.readFile('file1.txt', 'utf8');
    const file2 = await fs.readFile('file2.txt', 'utf8');
    const combined = file1 + file2;
    await fs.writeFile('combined.txt', combined);
    console.log('Files processed successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Parallel async operations
const readMultipleFiles = async () => {
  try {
    const [file1, file2, file3] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8'),
      fs.readFile('file3.txt', 'utf8')
    ]);
    
    console.log('All files read:', file1, file2, file3);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Async Express route handlers
app.get('/api/data', async (req, res) => {
  try {
    const data = await fetchDataFromDatabase();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Simulating async database call
const fetchDataFromDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ users: ['John', 'Jane'] });
    }, 1000);
  });
};`
      }
    ]
  },
  {
    title: "Working with MongoDB",
    content: [
      { type: "p", text: "Connect to MongoDB database and perform CRUD operations." },
      { type: "code", 
        language: "bash",
        code: `# Install MongoDB driver
npm install mongodb

# Or use Mongoose (ODM - Object Data Modeling)
npm install mongoose`
      },
      { type: "code", 
        language: "javascript",
        code: `// Using Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Model
const User = mongoose.model('User', userSchema);

// CREATE - Add new user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get single user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`
      }
    ]
  },
  {
    title: "Next Steps",
    content: [
      { type: "p", text: "You've learned Node.js fundamentals! Here's what to explore next:" },
      { type: "list", 
        items: [
          "Authentication & Authorization: JWT, OAuth, Passport.js",
          "Database Integration: PostgreSQL, MySQL, MongoDB Atlas",
          "Testing: Jest, Mocha, Supertest for API testing",
          "Validation: Joi, express-validator for input validation",
          "Security: Helmet.js, rate limiting, CORS configuration",
          "File Uploads: Multer for handling file uploads",
          "WebSockets: Socket.io for real-time applications",
          "Deployment: Heroku, AWS, DigitalOcean, Vercel",
          "Process Management: PM2 for production",
          "TypeScript: Add type safety to Node.js projects",
          "GraphQL: Alternative to REST APIs",
          "Microservices: Building scalable distributed systems"
        ] 
      },
      { type: "p", text: "Build real projects to solidify your knowledge: blog API, e-commerce backend, chat application, or task management system!" }
    ]
  }
],

4: [
  {
    "title": "Introduction to Python for Data Science",
    "content": [
      { "type": "p", "text": "Python is a versatile programming language widely used in data science, machine learning, and AI applications." },
      { "type": "p", "text": "It provides powerful libraries for data manipulation, visualization, and modeling." },
      { "type": "list",
        "items": [
          "Open-source and easy to learn",
          "Rich ecosystem of data science libraries (NumPy, Pandas, Matplotlib, Scikit-learn)",
          "Extensive community support and documentation"
        ]
      }
    ]
  },
  {
    "title": "Prerequisites & Setup",
    "content": [
      { "type": "p", "text": "Before you start, ensure you're comfortable with basic programming and math concepts:" },
      { "type": "list",
        "items": [
          "Basic Python syntax and data types",
          "Elementary statistics and linear algebra",
          "Logical and analytical thinking"
        ]
      },
      { "type": "p", "text": "Setup Options:" },
      { "type": "list",
        "items": [
          "Install Anaconda (recommended for beginners)",
          "Use Jupyter Notebook or Google Colab for interactive coding",
          "Install essential libraries using pip (e.g., pip install numpy pandas matplotlib seaborn)"
        ]
      }
    ]
  },
  {
    "title": "Python Basics Refresher",
    "content": [
      { "type": "p", "text": "Let’s recall some Python fundamentals useful for data science." },
      { "type": "code",
        "language": "python",
        "code": "# Variables and Data Types\nname = 'Alice'\nage = 25\nis_student = True\nscores = [85, 90, 78] \n\n# Conditional Statements\nif age >= 18:\n    print('Adult')\n\n# Loops\nfor score in scores:\n    print(score)"
      }
    ]
  },
  {
    "title": "Working with NumPy",
    "content": [
      { "type": "p", "text": "NumPy is used for numerical computing and handling multidimensional arrays." },
      { "type": "code",
        "language": "python",
        "code": "import numpy as np\n\n# Create arrays\narr = np.array([1, 2, 3, 4])\n\n# Array operations\nprint(arr + 5)\nprint(np.mean(arr))\n\n# 2D Arrays\nmatrix = np.array([[1, 2], [3, 4]])\nprint(matrix.shape)"
      },
      { "type": "list",
        "items": [
          "Efficient for mathematical operations and matrix computations",
          "Used as foundation for most data science libraries"
        ]
      }
    ]
  },
  {
    "title": "Data Manipulation with Pandas",
    "content": [
      { "type": "p", "text": "Pandas provides DataFrame and Series structures for managing structured data." },
      { "type": "code",
        "language": "python",
        "code": "import pandas as pd\n\n# Create DataFrame\ndata = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 22], 'Score': [85, 90, 88]}\ndf = pd.DataFrame(data)\n\n# Basic Operations\nprint(df.head())\nprint(df['Age'].mean())\n\n# Filtering\nyoung = df[df['Age'] < 28]\nprint(young)"
      },
      { "type": "list",
        "items": [
          "Filter, group, and clean large datasets easily",
          "Handles CSV, Excel, and SQL data sources"
        ]
      }
    ]
  },
  {
    "title": "Data Visualization",
    "content": [
      { "type": "p", "text": "Visualization helps understand and communicate data insights effectively." },
      { "type": "code",
        "language": "python",
        "code": "import matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Sample data\ndata = [10, 15, 20, 25, 30]\n\n# Line chart\nplt.plot(data)\nplt.title('Simple Line Chart')\nplt.show()\n\n# Using Seaborn\nimport pandas as pd\niris = sns.load_dataset('iris')\nsns.scatterplot(x='sepal_length', y='petal_length', data=iris, hue='species')\nplt.show()"
      },
      { "type": "list",
        "items": [
          "Matplotlib for low-level plotting",
          "Seaborn for aesthetic statistical plots"
        ]
      }
    ]
  },
  {
    "title": "Exploratory Data Analysis (EDA)",
    "content": [
      { "type": "p", "text": "EDA involves inspecting data to discover patterns, detect anomalies, and test hypotheses." },
      { "type": "code",
        "language": "python",
        "code": "# EDA Example\nprint(df.info())\nprint(df.describe())\n\n# Checking missing values\nprint(df.isnull().sum())\n\n# Visual correlations\nsns.heatmap(df.corr(), annot=True, cmap='coolwarm')\nplt.show()"
      },
      { "type": "list",
        "items": [
          "Understand data distributions and relationships",
          "Clean and prepare data before modeling"
        ]
      }
    ]
  },
  {
    "title": "Machine Learning Basics (Scikit-learn)",
    "content": [
      { "type": "p", "text": "Scikit-learn provides simple and efficient tools for machine learning tasks." },
      { "type": "code",
        "language": "python",
        "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\n\n# Sample dataset\nX = [[1], [2], [3], [4], [5]]\ny = [2, 4, 6, 8, 10]\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Predict and evaluate\npredictions = model.predict(X_test)\nprint('MSE:', mean_squared_error(y_test, predictions))"
      },
      { "type": "list",
        "items": [
          "Preprocessing: Scaling, splitting, encoding",
          "Model training and performance evaluation",
          "Popular algorithms: Linear Regression, Decision Trees, K-Means, etc."
        ]
      }
    ]
  },
  {
    "title": "Mini Project: Predict Student Scores",
    "content": [
      { "type": "p", "text": "Build a linear regression model that predicts student scores based on study hours." },
      { "type": "code",
        "language": "python",
        "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\n# Load data\ndf = pd.read_csv('student_scores.csv')\nX = df[['Hours']]\ny = df['Scores']\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Predict\npredictions = model.predict(X_test)\n\n# Results\nprint('Predicted vs Actual:')\nprint(pd.DataFrame({'Actual': y_test, 'Predicted': predictions}))"
      },
      { "type": "p", "text": "This project demonstrates data loading, model training, and prediction using Scikit-learn." }
    ]
  },
  {
    "title": "Next Steps",
    "content": [
      { "type": "p", "text": "Well done! You now know the fundamentals of Python for Data Science. Continue exploring:" },
      { "type": "list",
        "items": [
          "Matplotlib & Seaborn advanced plots",
          "Feature engineering techniques",
          "Machine learning models (classification, clustering)",
          "TensorFlow or PyTorch for deep learning",
          "Deploy models with Streamlit or Flask",
          "Work on real datasets from Kaggle"
        ]
      }
    ]
  }
]
};