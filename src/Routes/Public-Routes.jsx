import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";

function PrivateRotes(){
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default PrivateRotes;