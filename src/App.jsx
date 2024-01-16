import Hearder from './components/Header'
import Main from './components/Main'
import data from '../data'
import './App.css'

function App() {
  const travelPage = data.map((item)=>{
    return (
      <Main
          key = {item.title}
          item = {item}
      />
    )
  })
  return (
    <>
      <div className='container'>
        <Hearder />
        <section>
            {travelPage}
            
        </section>
        
      </div>
    </>
  )
}

export default App
