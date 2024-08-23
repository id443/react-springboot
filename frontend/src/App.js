import Userfront, {
  LoginForm,
  PasswordResetForm,
  SignupForm
} from "@userfront/toolkit/react";

import React, { Component } from 'react';
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import ClientEdit from "./ClientEdit";
import ClientList from './ClientList';
import { About } from './components/About';
import { AboutCompany } from './components/AboutCompany';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { HomeFirstChild } from './components/HomeFirstChild';
import { HomeSecondChild } from './components/HomeSecondChild';
import { Mission } from './components/Mission';
import Vision from './components/Vision';
import Home from './Home';



Userfront.init("demo1234");

class App extends Component {
  

  render() {

   
    return (
       
        <Router>
        
        <Header />
          <nav>
                  <ul>
                     <li>
                      <Link to="/home">Home</Link>
                     </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/reset">Reset</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
          </nav>
          <Routes>
          
            <Route path='/' exact={true} element ={<Home />}>
              <Route path='child' element={<HomeFirstChild />} />
              <Route path='child2/:id' element={<HomeSecondChild />} /> 
            </Route>
            <Route path='/clients' exact={true} element ={<ClientList />}/>
            <Route path='/clients/:id' element ={<ClientEdit />}/>
            <Route path="/home" element={<SingUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route
                        path="/dashboard"
                        element={
                          <RequireAuth>
                            <Dashboard />
                          </RequireAuth>
                        }
                      />
          <Route exact path='/about' element={<About />}>
            <Route path='company' element={<AboutCompany />} />
            <Route path='mission' element={<Mission />} />
            <Route path='vision' element={<Vision />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          </Routes>
          
        </Router>
    )
  }
}

function SingUpForm() {
  return (
    <div>
      <h2>Sing Up form</h2>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default App;