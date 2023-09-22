import './App.css'
import { TodoContainer} from './components'

function App() {
  

  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-scroll fixed dark:bg-slate-800 bg-blue-300 flex flex-row justify-center '>
      <TodoContainer/>
    </div>
  )
}

export default App
