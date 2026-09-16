import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';


function App() {
const routes = createBrowserRouter([
  {
    path: "/", element: <Layout />,children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
export default App