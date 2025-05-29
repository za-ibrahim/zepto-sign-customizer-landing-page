import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ZendeskChat from './components/ZendeskChat'
import Home from './pages/Home'

function App() {

  return (
    <main>
      {/* <h1 className='text-3xl font-extrabold text-primary'>Hi, Ibrahim</h1>
      <h1 className='text-3xl font-extrabold text-secondary'>Hi, Ibrahim</h1>
      <h1 className='text-3xl font-extrabold text-accent'>Hi, Ibrahim</h1>
      <div className='w-32 h-32 bg-background'></div>
      <h1 className='text-3xl font-extrabold text-text'>Hi, Ibrahim</h1> */}
      <NavBar />
      <div className='pt-[95px]' />
      <Home />
      <Footer />
      <ZendeskChat />
    </main>
  )
}

export default App