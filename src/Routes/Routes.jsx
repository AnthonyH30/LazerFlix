import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyList from "../Components/MyList/MyList";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mylist' element={<MyList />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Rotas;