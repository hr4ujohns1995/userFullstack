import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { AddUser } from './user/AddUser';
import {ViewUser} from './user/ViewUser'
import { EditUser } from './user/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/addUser' element={<AddUser/>}/>
          <Route exact path='/editUser/:id' element={<EditUser/>}/>
          <Route exact path='/viewUser/:id' element={<ViewUser/>}/>

        
        </Routes>
      </Router>
     

    </div>
  );
}

export default App;
