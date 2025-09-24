
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
    <Post/>
    <Post/>
    <Post/>
    <Post/>
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
