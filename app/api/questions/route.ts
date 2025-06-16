    import { NextResponse } from 'next/server';

    // Sample questions database - you can expand this with more questions
    const questionsDatabase: { [key: string]: Array<{ question: string; answer: string }> } = {
    'react': [
        {
        question: "What is the Virtual DOM and how does React use it to improve performance?",
        answer: "The Virtual DOM is a lightweight copy of the real DOM. React uses it to minimize direct DOM manipulation. When state or props change, React calculates the difference between the new and previous virtual DOM and efficiently updates only the changed parts in the actual DOM using a diffing algorithm."
        },
        {
        question: "What are React Hooks and why were they introduced?",
        answer: "React Hooks are functions like `useState`, `useEffect`, etc., that let developers use state and other React features without writing class components. They simplify component logic and promote code reuse through custom hooks, making functional components more powerful and concise."
        },
        {
        question: "What is the difference between useEffect and useLayoutEffect?",
        answer: "`useEffect` runs asynchronously after the DOM has been updated, while `useLayoutEffect` runs synchronously after all DOM mutations but before the browser repaints. `useLayoutEffect` is useful for operations that need to measure layout or perform DOM reads before paint."
        },
        {
        question: "How does React's reconciliation algorithm work?",
        answer: "React's reconciliation algorithm compares the previous Virtual DOM with the new one to determine the minimal set of changes. It uses heuristics like key matching in lists to identify changes efficiently and update only the affected parts of the real DOM."
        },
        {
        question: "What is React Concurrent Mode?",
        answer: "Concurrent Mode is an experimental set of features in React that improves UI responsiveness by interrupting rendering work. It allows React to prepare multiple versions of the UI simultaneously, enabling features like transitions and `Suspense` for data fetching."
        },
        {
        question: "What is memoization in React and how do `React.memo` and `useMemo` differ?",
        answer: "`React.memo` is a higher-order component that prevents unnecessary re-renders of functional components by memoizing their output. `useMemo` memoizes the result of a calculation between renders. While `React.memo` works at the component level, `useMemo` is for values within a component."
        },
        {
        question: "What is a custom hook and when should you create one?",
        answer: "A custom hook is a reusable function that encapsulates component logic using built-in hooks. You should create one when multiple components share the same logic, such as form handling or fetching data, to promote reusability and clean code."
        },
        {
        question: "What are controlled and uncontrolled components in React?",
        answer: "Controlled components are form elements where React manages their state via props. Uncontrolled components maintain their state in the DOM and use refs to access values. Controlled components offer better control over form behavior and validation."
        },
        {
        question: "How does React handle state batching and when might it break?",
        answer: "React batches state updates during event handlers to optimize re-renders. However, in asynchronous callbacks like `setTimeout`, updates were not always batched in older versions. With React 18+, batching is more consistent across sync and async contexts."
        },
        {
        question: "What is the purpose of keys in lists and what happens if you don't use them correctly?",
        answer: "Keys help React identify which items have changed, been added, or removed. Incorrect or missing keys (e.g., using indexes) can lead to inefficient rendering or bugs due to incorrect component state association across renders."
        }
    ],
    'node.js': [
        {
        question: "What is Node.js?",
        answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server side."
        },
        {
        question: "What is the event loop in Node.js?",
        answer: "The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded."
        },
        {
        question: "What is npm?",
        answer: "npm (Node Package Manager) is the default package manager for Node.js that helps in installing and managing dependencies."
        },
        {
        question: "What is middleware in Express.js?",
        answer: "Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle."
        },
        {
        question: "What is the difference between process.nextTick() and setImmediate()?",
        answer: "process.nextTick() executes before the next event loop iteration, while setImmediate() executes in the next event loop iteration."
        }
    ],
    'python': [
        {
        question: "Explain the difference between deep copy and shallow copy in Python.",
        answer: "A shallow copy creates a new object but inserts references into it for the objects found in the original. A deep copy, on the other hand, creates a new object and recursively adds copies of nested objects, thus completely cloning the original. The `copy` module provides both `copy()` and `deepcopy()` for these purposes."
        },
        {
        question: "What are Python generators and how do they differ from iterators?",
        answer: "Generators are a special class of iterators that use the `yield` keyword to produce a sequence of results lazily. Unlike normal functions, a generator maintains state between calls, which makes them memory efficient for large datasets. Iterators follow the iterator protocol and require the implementation of `__iter__()` and `__next__()` methods."
        },
        {
        question: "Explain Python's descriptor protocol.",
        answer: "Descriptors are Python objects that define the behavior of attribute access. They implement one or more of the following methods: `__get__()`, `__set__()`, and `__delete__()`. Descriptors are used behind the scenes by properties, methods, staticmethods, and classmethods."
        },
        {
        question: "How do you handle memory leaks in Python?",
        answer: "Memory leaks in Python can occur due to lingering references, reference cycles, or global variables. Using tools like `gc` for garbage collection inspection and third-party libraries like `objgraph` or `memory_profiler`, developers can diagnose and mitigate memory usage issues."
        },
        {
        question: "What is the purpose of the `__slots__` declaration?",
        answer: "`__slots__` is used to explicitly declare data members and prevent the creation of a `__dict__` for each instance. This can significantly reduce memory usage and improve performance, especially when creating many instances."
        },
        {
        question: "How does Python handle multi-threading with GIL?",
        answer: "Python's Global Interpreter Lock (GIL) ensures that only one thread executes Python bytecode at a time. This limits multi-threaded performance for CPU-bound tasks but not for I/O-bound tasks. Libraries like `multiprocessing` or implementations like Jython can bypass this limitation."
        },
        {
        question: "What are coroutines in Python and how do they work?",
        answer: "Coroutines are generalizations of generators. Defined with `async def`, they use `await` to pause execution. They are useful for asynchronous programming, enabling concurrency with the `asyncio` module without the complexity of threads."
        },
        {
        question: "What is monkey patching in Python?",
        answer: "Monkey patching refers to modifying or extending code at runtime, often by replacing methods or functions. While powerful, it can make debugging difficult and lead to unpredictable behavior, so it should be used judiciously."
        },
        {
        question: "Explain the difference between `@staticmethod`, `@classmethod`, and instance methods.",
        answer: "`@staticmethod` defines a method that does not access class or instance variables. `@classmethod` receives the class as the first argument (`cls`), and can access class-level data. Instance methods receive `self` and can access both instance and class attributes."
        },
        {
        question: "What are metaclasses and how are they used?",
        answer: "Metaclasses define the behavior of classes. They are used to control class creation, enforce coding standards, or inject behavior. They are defined by inheriting from `type` and can override `__new__()` and `__init__()`."
        }
    ],
    'mongodb': [
        {
        question: "What is the difference between MongoDB and traditional relational databases?",
        answer: "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like BSON documents. Unlike relational databases, MongoDB does not require a fixed schema and supports horizontal scaling, making it suitable for unstructured or semi-structured data and large-scale distributed systems."
        },
        {
        question: "Explain how indexing works in MongoDB and its impact on performance.",
        answer: "Indexes in MongoDB improve query performance by allowing the database to quickly locate data without scanning every document. MongoDB supports single-field, compound, multikey, geospatial, and text indexes. Poorly chosen indexes can slow down writes and increase storage overhead."
        },
        {
        question: "What are MongoDB's aggregation pipelines and how do they work?",
        answer: "Aggregation pipelines are a framework for data aggregation modeled on data processing pipelines. They consist of multiple stages (e.g., `$match`, `$group`, `$sort`, `$project`) that transform the data step-by-step. This is useful for generating analytics and reports directly from the database."
        },
        {
        question: "How does MongoDB ensure data consistency in a distributed setup?",
        answer: "MongoDB provides consistency through replica sets using a primary-secondary replication model. All writes go to the primary, and secondaries replicate from it. Read and write concerns allow developers to tune consistency levels. Transactions (available in v4.0+) provide ACID guarantees across documents."
        },
        {
        question: "What is a replica set in MongoDB and why is it important?",
        answer: "A replica set is a group of MongoDB servers that maintain the same dataset. It ensures high availability and redundancy. If the primary node fails, an automatic failover process elects a new primary from the secondaries, ensuring minimal downtime."
        },
        {
        question: "What is sharding in MongoDB and how does it support horizontal scalability?",
        answer: "Sharding is the process of distributing data across multiple servers or shards. Each shard holds a subset of the data, and MongoDB uses a shard key to determine data placement. This allows the system to scale horizontally and handle large volumes of data and requests."
        },
        {
        question: "How does MongoDB handle transactions across multiple documents?",
        answer: "MongoDB supports multi-document ACID transactions (since v4.0 for replica sets and v4.2+ for sharded clusters). Transactions provide atomicity and isolation, allowing operations across multiple documents or collections to either fully succeed or fail together."
        },
        {
        question: "What is the role of the WiredTiger storage engine in MongoDB?",
        answer: "WiredTiger is MongoDB's default storage engine, offering high concurrency, compression, and performance. It uses document-level locking and a write-ahead log for durability. WiredTiger supports compression of data and indexes, reducing storage space usage."
        },
        {
        question: "What are some common performance bottlenecks in MongoDB and how do you resolve them?",
        answer: "Common bottlenecks include missing indexes, unoptimized queries, large documents, and write locks. Tools like `explain()`, `mongotop`, and `mongostat` can help diagnose issues. Solutions include indexing appropriately, schema redesign, using projections, and sharding for scale-out."
        },
        {
        question: "How do you implement data validation in MongoDB?",
        answer: "MongoDB supports schema validation using JSON Schema rules via the `validator` option on collections. This allows enforcement of data types, required fields, and value constraints at the database level, improving data quality and consistency."
        }
    ],
    'operating system': [
        {
        question: "What is the difference between a process and a thread?",
        answer: "A process is an independent program in execution with its own memory space, while a thread is a lightweight subunit of a process that shares the same memory space. Multiple threads within a process can run concurrently and share data, making them more efficient for multitasking within the same application."
        },
        {
        question: "Explain the concept of deadlock and its necessary conditions.",
        answer: "A deadlock is a state where a set of processes are blocked because each is waiting for a resource held by another. The four necessary conditions for deadlock are: mutual exclusion, hold and wait, no preemption, and circular wait."
        },
        {
        question: "What are the differences between preemptive and non-preemptive scheduling?",
        answer: "Preemptive scheduling allows the operating system to interrupt and switch between processes, ensuring better responsiveness for high-priority tasks. Non-preemptive scheduling waits for a process to complete before switching. Preemptive scheduling is more complex but improves system responsiveness."
        },
        {
        question: "How does paging work in memory management?",
        answer: "Paging divides physical memory into fixed-size blocks called frames and logical memory into blocks of the same size called pages. The operating system maintains a page table that maps virtual pages to physical frames, enabling efficient memory allocation and isolation."
        },
        {
        question: "What is a context switch and why is it expensive?",
        answer: "A context switch occurs when the CPU switches from one process or thread to another. It involves saving the state of the current task and loading the state of the next one. Context switching is costly in terms of CPU cycles and memory because it requires saving/restoring registers, program counter, and memory maps."
        },
        {
        question: "What are the differences between segmentation and paging?",
        answer: "Segmentation divides memory into variable-sized segments based on logical divisions like code, stack, and data, while paging divides memory into fixed-size pages. Segmentation supports logical grouping but can lead to fragmentation. Paging simplifies memory allocation but may require more complex address translation."
        },
        {
        question: "How does the operating system manage CPU scheduling?",
        answer: "The OS uses scheduling algorithms like First-Come-First-Serve (FCFS), Shortest Job Next (SJN), Round Robin, and Priority Scheduling to allocate CPU time among processes. It manages a ready queue and selects processes based on criteria such as burst time, priority, or time slice."
        },
        {
        question: "What is virtual memory and how is it implemented?",
        answer: "Virtual memory allows processes to use more memory than physically available by using disk space to simulate additional RAM. It is implemented using paging and swapping techniques. The OS manages a page table to map virtual addresses to physical frames and swaps pages in and out of disk as needed."
        },
        {
        question: "Describe the Producer-Consumer problem and its solution.",
        answer: "The Producer-Consumer problem involves two processes: one producing data and the other consuming it, both accessing a shared buffer. It is solved using synchronization techniques such as semaphores or mutexes to ensure mutual exclusion and coordination between producer and consumer."
        },
        {
        question: "What is the role of the kernel in an operating system?",
        answer: "The kernel is the core component of an OS that manages system resources and facilitates communication between hardware and software. It handles process management, memory management, device control, and system calls. It operates in privileged mode for security and stability."
        }
    ],
    };

    export async function POST(request: Request) {
    try {
        const { techStack } = await request.json();
        const normalizedTechStack = techStack.toLowerCase().trim();
        
        if (!questionsDatabase[normalizedTechStack]) {
        return NextResponse.json(
            { error: 'No questions available for this tech stack' },
            { status: 404 }
        );
        }

        // Get 5 random questions from the tech stack
        const questions = questionsDatabase[normalizedTechStack]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

        return NextResponse.json({ questions });
    } catch (error) {
        return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
        );
    }
    } 