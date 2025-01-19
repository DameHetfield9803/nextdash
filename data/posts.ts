import { Post } from "@/types/posts";

const posts: Post[] = [
  {
    id: "1",
    title: "Understanding TypeScript",
    body: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    author: "Jane Doe",
    date: "2025-01-18",
    comments: [
      {
        id: "c1",
        text: "This is a great introduction to TypeScript. Thanks!",
        username: "user123",
      },
      {
        id: "c2",
        text: "Can you explain more about type inference?",
        username: "dev_guru",
      },
      {
        id: "c3",
        text: "I switched to TypeScript recently, and this post clarified a lot of doubts.",
        username: "typescriptFan",
      },
    ],
  },
  {
    id: "2",
    title: "Advanced JavaScript Patterns",
    body: "This post explores advanced patterns in JavaScript, including closures, currying, and memoization.",
    author: "John Smith",
    date: "2025-01-17",
    comments: [
      {
        id: "c4",
        text: "Closures are tricky but very powerful. Great examples here.",
        username: "coder42",
      },
      {
        id: "c5",
        text: "I always struggled with currying, but this helped a lot!",
        username: "frontendFan",
      },
      {
        id: "c6",
        text: "What are some real-world applications of memoization?",
        username: "dev_inquirer",
      },
    ],
  },
  {
    id: "3",
    title: "Introduction to React",
    body: "React is a JavaScript library for building user interfaces.",
    author: "Emily Johnson",
    date: "2025-01-16",
    comments: [
      {
        id: "c7",
        text: "React hooks were a game-changer for me.",
        username: "reactRocks",
      },
      {
        id: "c8",
        text: "Do you have examples of class components vs functional components?",
        username: "js_noob",
      },
    ],
  },
  {
    id: "4",
    title: "State Management with Redux",
    body: "Redux helps you manage the state of your application predictably and consistently.",
    author: "Alex Turner",
    date: "2025-01-15",
    comments: [
      {
        id: "c9",
        text: "Redux can be overwhelming at first, but it's worth learning.",
        username: "stateMaster",
      },
      {
        id: "c10",
        text: "How does Redux compare to Context API in React?",
        username: "contextFan",
      },
      {
        id: "c11",
        text: "Great explanation! Redux Toolkit made my life easier.",
        username: "devPro",
      },
    ],
  },
  {
    id: "5",
    title: "Building REST APIs with Node.js",
    body: "Learn the basics of building RESTful APIs with Node.js and Express.",
    author: "Sarah Williams",
    date: "2025-01-14",
    comments: [
      {
        id: "c12",
        text: "Great post! Can you also cover authentication in the next one?",
        username: "api_dev",
      },
      {
        id: "c13",
        text: "This helped me understand routing better. Thanks!",
        username: "backendBeginner",
      },
      {
        id: "c14",
        text: "How do you handle error responses in Express?",
        username: "nodeLover",
      },
    ],
  },
  {
    id: "6",
    title: "CSS Grid vs Flexbox",
    body: "Explore the differences between CSS Grid and Flexbox and when to use each.",
    author: "Laura Brown",
    date: "2025-01-13",
    comments: [
      {
        id: "c15",
        text: "I never understood CSS Grid until now. Awesome!",
        username: "designFan",
      },
      {
        id: "c16",
        text: "Can I combine Grid and Flexbox in the same layout?",
        username: "layoutLover",
      },
      {
        id: "c17",
        text: "Flexbox is better for smaller components, in my opinion.",
        username: "cssExpert",
      },
    ],
  },
  {
    id: "7",
    title: "Testing JavaScript Applications",
    body: "An overview of tools and techniques for testing JavaScript applications effectively.",
    author: "Michael Green",
    date: "2025-01-12",
    comments: [
      {
        id: "c18",
        text: "Great overview of Jest and Cypress!",
        username: "testGuru",
      },
      {
        id: "c19",
        text: "How do you mock API calls during testing?",
        username: "qaExpert",
      },
      {
        id: "c20",
        text: "I wish you included a section on integration testing.",
        username: "testingNerd",
      },
    ],
  },
  {
    id: "8",
    title: "Introduction to GraphQL",
    body: "GraphQL is a query language for your API, and a server-side runtime for executing those queries.",
    author: "Chris Martin",
    date: "2025-01-11",
    comments: [
      {
        id: "c21",
        text: "Can GraphQL completely replace REST APIs?",
        username: "graphqlFan",
      },
      {
        id: "c22",
        text: "Subscriptions in GraphQL are so powerful!",
        username: "realtimeDev",
      },
    ],
  },
  {
    id: "9",
    title: "Docker Basics for Developers",
    body: "Docker allows developers to package applications into containers—standardized units for software development.",
    author: "Patricia Adams",
    date: "2025-01-10",
    comments: [
      {
        id: "c23",
        text: "This helped me set up my first containerized app!",
        username: "dockerBeginner",
      },
      {
        id: "c24",
        text: "Can you cover Docker Compose next?",
        username: "devOpsLearner",
      },
    ],
  },
  {
    id: "10",
    title: "Performance Optimization in React",
    body: "Tips and tricks for optimizing performance in React applications.",
    author: "David Lee",
    date: "2025-01-09",
    comments: [
      {
        id: "c25",
        text: "Using memoization was a game-changer for my app.",
        username: "speedyDev",
      },
      {
        id: "c26",
        text: "What tools do you recommend for analyzing performance?",
        username: "performanceGuru",
      },
      {
        id: "c27",
        text: "This post should also mention server-side rendering!",
        username: "SSR_Fan",
      },
    ],
  },
];

export default posts;
