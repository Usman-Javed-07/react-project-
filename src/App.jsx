import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { AppLayout } from "./components/layouts/AppLayout"
import "./App.css"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Country } from "./pages/Country"
import { Home } from "./pages/Home"
import { ErrorPage } from "./pages/ErrorPage"
import { CountryDetails } from "./components/layouts/CountryDetails"
const router = createBrowserRouter ([
{
path: '/',
element: <AppLayout/>,
errorElement: <ErrorPage/>,
children: [
  {
    path: '/', 
    element : <Home/>

  },
  {
    path: 'About', 
    element : <About/>
  },
  {
    path: 'Country', 
    element : <Country/>
  },
  {
    path: 'country/:id',
    element: <CountryDetails/>
  },
  {
    path: 'Contact', 
    element : <Contact/>
  },
],
},
])
export const App = () => {
  return <RouterProvider router={router}> </RouterProvider>
}
export default App