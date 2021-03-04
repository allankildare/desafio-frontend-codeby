import './App.css'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Growth from './components/Growth/Growth'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container">
      <Home />
      <Categories />
      <Growth />
      <Footer />
    </div>
  )
}

export default App;
