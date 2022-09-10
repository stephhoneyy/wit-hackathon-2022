import './App.css';
import Login from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import Home from './pages/Home';
import { BrowserRouter, Router } from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
