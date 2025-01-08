import { NavBar } from "./components/NavBar"
import Highlights from "./components/Highlights"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <main className="bg-black">
        <NavBar></NavBar>
        <Hero></Hero>
        <Highlights></Highlights>
      </main>
    </>
  )
}

export default App
