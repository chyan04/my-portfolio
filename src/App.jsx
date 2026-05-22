import './App.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(() => {

    const glow = document.querySelector(".mouse-glow")

    const moveGlow = (e) => {

      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveGlow)

    return () => {

      window.removeEventListener("mousemove", moveGlow)
    }
    

  }, [])

  // 스크롤 진입 시 .fade-section에 .visible 클래스 추가
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])

  return (

    <>
      <div className="grid-background"></div>
      <div className="background-glow"></div>
      <div className="mouse-glow"></div>


      <Header />


      <main className="container">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </>

  )
}

export default App