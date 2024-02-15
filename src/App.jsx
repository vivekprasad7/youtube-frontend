
import "./App.css"
import Head from './components/header/Head'
import Body from './components/body/Body'
import { Provider } from "react-redux"
import store from "./utils/store"

function App() {

  return (
    
    <Provider store={store}>
      <div className=''>
        <Head/>
        <Body/>
      <h1>React</h1>
      </div>
      </Provider>
    
  )
}

export default App
