
import './App.css'
import About from './Component/About'
import Home from './Component/Home'
import {Routes , Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import {Courses} from './Component/Courses';
import {UsersList} from './Component/UsersList';
// import { UsersDetails } from './Component/UsersDetails';
import Products from './Component/Products';

function App() {
 

  return (
    <div className="App">
     <div style={{
       margin:"20px"
     }}>
     <Navbar/>
     </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/course" element={<Courses/>}></Route>
      <Route path="/users" element={<UsersList/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
    </Routes>
    </div>
  )
}

export default App
