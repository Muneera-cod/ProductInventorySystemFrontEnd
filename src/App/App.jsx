import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../redux/strore/store'
import { router } from '../Routes/Routes.jsx'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
