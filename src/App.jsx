import { MyListProvider } from './Contexts/MyListContext';
import Rotas from './Routes/Routes';


function App() {

  return (
    <MyListProvider>
      <Rotas />
    </MyListProvider>
  )
}

export default App
