
import './App.css'
import Header from './components/Header.jsx'
import Post from "./components/Post.jsx"
import SiteMenu from './components/SiteMenu.jsx'

function App() {


  return (
  <div>
    <Header/>

  <div style={{
 display:'flex',
     alignItems:'center',
     justifyContent:'center',
  }}>
      <div style={{
    
     margin:'10px',
     padding:'10px',
     width:"80%",

      display:'flex',
   gap:'5px',
     justifyContent:'center',
    }}>
      <div className={'posts'} style={
     {
      width:'70%',
    }
    }>
    <Post userName='M-elnakhlawy' postTitle='10 Tips to Write Cleaner JavaScript Code' ><p style={{padding:'10px'}}>Writing clean JavaScript makes your code easier to read, maintain, and scale. In this post, we’ll explore simple tips like using meaningful variable names, avoiding nested callbacks, and leveraging ES6+ features.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='Getting Started with React Hooks'><p style={{padding:'10px'}}>React Hooks let you use state and lifecycle methods in functional components. This guide covers useState, useEffect, and how to replace class components with hooks for cleaner code.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='Understanding Async/Await in Node.js'><p style={{padding:'10px'}}>Async/Await simplifies working with asynchronous code. Instead of chaining .then() calls, you can write asynchronous code that looks synchronous, making it more readable and easier to debug.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='CSS Grid vs Flexbox: When to Use Each'><p style={{padding:'10px'}}>CSS Grid and Flexbox are powerful layout systems. Grid is best for two-dimensional layouts, while Flexbox shines in one-dimensional alignment. Knowing when to use each saves time and frustration</p></Post>
    <Post userName='M-elnakhlawy' postTitle='How to Build a REST API with Express'><p style={{padding:'10px'}}>Express is a minimal Node.js framework for building APIs. In this tutorial, we’ll walk through setting up routes, handling requests, and connecting your API to a database.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='Debugging Made Easy: Chrome DevTools Guide'><p style={{padding:'10px'}}>Chrome DevTools provides powerful features for debugging JavaScript, inspecting elements, and monitoring network requests. Mastering these tools can save hours of development time.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='The Power of TypeScript for Large Projects'><p style={{padding:'10px'}}>TypeScript adds static typing to JavaScript, helping catch errors early and improving collaboration in big teams. Learn how TypeScript makes large projects more reliable and scalable.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='Responsive Design: Best Practices in 2025'><p style={{padding:'10px'}}>With so many devices and screen sizes, responsive design is essential. This post highlights modern techniques like fluid layouts, CSS clamp, and container queries.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='What’s New in ES2025?'><p style={{padding:'10px'}}>JavaScript keeps evolving. ES2025 introduces new features that make development easier and faster. Let’s explore the highlights and see how they can improve your workflow.</p></Post>
    <Post userName='M-elnakhlawy' postTitle='Optimizing Performance in React Apps'><p style={{padding:'10px'}}>A slow React app frustrates users. Learn how to improve performance with code splitting, memoization, lazy loading, and avoiding unnecessary re-renders.</p></Post>
    </div>
    <div className={'siteMenu'} style={{
      width:'30%'
    }}>
      <SiteMenu/>
    </div>
    </div>
  </div>
  </div>
  )
}

export default App
