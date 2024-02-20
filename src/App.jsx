
import "./App.css"
import Head from './components/header/Head'
import Body from './components/body/Body'
import { Provider } from "react-redux"
import store from "./utils/store"
import {  createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import WatchPage from "./components/watchPage/watchPage"
import MainGrid from "./components/mainGrid/MainGrid"
import Results from "./components/results/Results"

// const appRouter = createBrowserRouter([{
//   path:"/",
//   element:<Body/>,
//   children:[
//     {
//       path:"/",
//       element:<MainGrid/>
//     },
//     {
//       path:"watch",
//       element:<WatchPage/>
//     },
//     {
//       path:"results",
//       element:<Results/>
//     }
//   ]
// }])



function App() {

  return (
    
    <Provider store={store}>
      <div className=''>
        <Head/>

        <Routes>
        <Route path={"/"} element={ <Body/>}/>
        <Route path={"/results"} element={ <Results/>}/>
        <Route path={"/watch"} element={ <WatchPage/>}/>
        </Routes>
      </div>
      </Provider>
    
  )
}

export default App
