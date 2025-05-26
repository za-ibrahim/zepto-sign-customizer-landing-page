import './App.css'
import Commitment from './components/Commitment'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'

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
      <Hero />
      <Commitment />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App