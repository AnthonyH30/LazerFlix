import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthContext';
import { MyListProvider } from './Contexts/MyListContext';
import Rotas from './Routes/Private-Routes';
import PublicRotes from './Routes/Public-Routes';


function App() {

  const { auth } = useContext(AuthContext);

  return (
    <MyListProvider>
        {auth ? <Rotas /> : <PublicRotes />}
    </MyListProvider>
  )
}

export default App;