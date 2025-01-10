import './App.css'
import Logo from './components/Logo'
import Contact from './components/Contact'
import Feature from './components/Feature'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Video from './components/Video'
import Footer from './components/Footer'
import Feedback from './components/Feedback'

const App = () => {
  return (
    <main>
        <Navbar />
        <Header />
        <Video />
        <Logo />
        <Feature />
        <Feedback />
        <Contact />
        <Footer />
    </main>
  )
}

export default App