import React from 'react'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Root from '../Root'



function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
      </Route>
    )
  )
  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default Router
