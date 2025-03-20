import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Movies from './Pages/Movies'
import Contact, { contactData } from './Pages/Contact'
import AppLayout from './Components/Layouts/AppLayout'
import "./App.css"
import ErrorPage from './Pages/ErrorPage'
import { getMoviesData } from './api/GetApiData'
import MoviesDetail from './Components/Ui/MoviesDetail'
import { getMoviesDetails } from './api/GetMoviesDetails'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movies",
          element:<Movies/>,
          loader:getMoviesData
        },
        {
          path:"/movies/:moviesID",
          element:<MoviesDetail/>,
          loader:getMoviesDetails
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData
        }

      ]

    },
    
  ])

  ////////////////////old technique/////////////////
  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="About" element={<About/>}/>
  //       <Route path="Movies" element={<Movies/>}/>
  //       <Route path="Contact" element={<Contact/>}/>

  //     </Route>
  //   )
  // )
  return (
    <RouterProvider router={router}/>
  )
}

export default App