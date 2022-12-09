import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {Cadastro} from './pages/Cadastro';
import {Feed} from './pages/Feed';



function App() {
  return (<>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
      </Routes>
    </Router>

    </>);
}

export default App;
