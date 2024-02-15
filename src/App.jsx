
import "./App.css"
import Head from './components/header/Head'
import Body from './components/body/Body'
import { Provider } from "react-redux"
import store from "./utils/store"
import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchPage from "./components/watchPage/watchPage"
import MainGrid from "./components/mainGrid/MainGrid"

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainGrid/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])



function App() {

  return (
    
    <Provider store={store}>
      <div className=''>
        <Head/>
        <RouterProvider router={appRouter}/>

        {/* <Routes>
          <Route path={"/watch"} element={<WatchPage/>}/>
        </Routes> */}


      </div>
      </Provider>
    
  )
}

export default App
