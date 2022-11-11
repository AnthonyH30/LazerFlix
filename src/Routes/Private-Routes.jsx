import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyList from "../Pages/MyList/MyList";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

function Rotas(){
    return(
        <Router>
            <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/mylist' element={<MyList />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Rotas;