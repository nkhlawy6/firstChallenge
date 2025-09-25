import "./App.css";
import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import SiteMenu from "./components/SiteMenu.jsx";

function App() {
  const posts = [
    {
      id: 1,
      title: "10 Tips to Write Cleaner JavaScript Code",
      content:
        "Writing clean JavaScript makes your code easier to read, maintain, and scale. In this post, we’ll explore simple tips like using meaningful variable names, avoiding nested callbacks, and leveraging ES6+ features.",
      author: "John Doe",
      date: "2025-09-10",
      tags: ["javascript", "clean code", "best practices"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 2,
      title: "Getting Started with React Hooks",
      content:
        "React Hooks let you use state and lifecycle methods in functional components. This guide covers useState, useEffect, and how to replace class components with hooks for cleaner code.",
      author: "Jane Smith",
      date: "2025-09-11",
      tags: ["react", "hooks", "frontend"],
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
      id: 3,
      title: "Understanding Async/Await in Node.js",
      content:
        "Async/Await simplifies working with asynchronous code. Instead of chaining .then() calls, you can write asynchronous code that looks synchronous, making it more readable and easier to debug.",
      author: "Michael Johnson",
      date: "2025-09-12",
      tags: ["nodejs", "async", "backend"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use Each",
      content:
        "CSS Grid and Flexbox are powerful layout systems. Grid is best for two-dimensional layouts, while Flexbox shines in one-dimensional alignment. Knowing when to use each saves time and frustration.",
      author: "Emily Davis",
      date: "2025-09-13",
      tags: ["css", "grid", "flexbox", "design"],
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
      id: 5,
      title: "How to Build a REST API with Express",
      content:
        "Express is a minimal Node.js framework for building APIs. In this tutorial, we’ll walk through setting up routes, handling requests, and connecting your API to a database.",
      author: "Chris Martin",
      date: "2025-09-14",
      tags: ["nodejs", "express", "api"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 6,
      title: "Debugging Made Easy: Chrome DevTools Guide",
      content:
        "Chrome DevTools provides powerful features for debugging JavaScript, inspecting elements, and monitoring network requests. Mastering these tools can save hours of development time.",
      author: "Sophia Brown",
      date: "2025-09-15",
      tags: ["debugging", "chrome", "devtools"],
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
      id: 7,
      title: "The Power of TypeScript for Large Projects",
      content:
        "TypeScript adds static typing to JavaScript, helping catch errors early and improving collaboration in big teams. Learn how TypeScript makes large projects more reliable and scalable.",
      author: "Daniel Wilson",
      date: "2025-09-16",
      tags: ["typescript", "javascript", "scalability"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 8,
      title: "Responsive Design: Best Practices in 2025",
      content:
        "With so many devices and screen sizes, responsive design is essential. This post highlights modern techniques like fluid layouts, CSS clamp, and container queries.",
      author: "Olivia Taylor",
      date: "2025-09-17",
      tags: ["responsive", "design", "frontend"],
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
      id: 9,
      title: "What’s New in ES2025?",
      content:
        "JavaScript keeps evolving. ES2025 introduces new features that make development easier and faster. Let’s explore the highlights and see how they can improve your workflow.",
      author: "William Anderson",
      date: "2025-09-18",
      tags: ["javascript", "es2025", "updates"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 10,
      title: "Optimizing Performance in React Apps",
      content:
        "A slow React app frustrates users. Learn how to improve performance with code splitting, memoization, lazy loading, and avoiding unnecessary re-renders.",
      author: "Ava Martinez",
      date: "2025-09-19",
      tags: ["react", "performance", "frontend"],
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
  ];

  return (
    <div>
      <Header />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "10px",
            padding: "10px",
            width: "80%",

            display: "flex",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <div
            className={"posts"}
            style={{
              width: "70%",
            }}
          >
            {posts.map((post) => {
              return (
                <Post key={post.id} postTitle={post.title} userName={post.author}>
                  <p style={{ padding: "10px 10px 0 10px" }}>{post.content}</p>
                  <br />
                  <img
                    style={{ width: "150px", borderRadius: "10px" }}
                    src={post.image}
                    alt={post.image}
                  />
                </Post>
              );
            })}
          </div>
          <div
            className={"siteMenu"}
            style={{
              width: "30%",
            }}
          >
            {posts.map((posts,index)=>{
              return  <SiteMenu  postTags={posts.tags} key={index} />
            })}
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
