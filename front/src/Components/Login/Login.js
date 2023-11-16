 import React, {useState} from 'react';
 import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';
import { FaLanguage } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('Fa');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked');
  };

  const toggleLanguage = (e) => {
    if (language === 'Fa'){
        setLanguage("En");
    }else setLanguage("Fa");

  }

  const LoginEn = () =>{
    return(
        <div className="container mt-5">
      <h1 className="text-center mb-4">
        <img src={logo} width={100} height={100} className="App=logo" alt="logo" />
        Cattleision
        </h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="mt-3">
        <div className="text-center">
          <FaLanguage size={30} className="lang-icon mr-2" onClick={toggleLanguage} style={{cursor: 'pointer'}}/>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 const LoginFa = () =>{
    return(
        <div className="container mt-5">
      <h1 className="text-center mb-4">
        <img src={logo} width={100} height={100} className="App=logo" alt="logo" />
        Cattleision
        </h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>ورود به سیستم</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    شناسه
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    رمز
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  ورود
                </button>
              </form>
              <div className="mt-3">
        <div className="text-center">
          <FaLanguage size={30} className="mr-2" onClick={toggleLanguage} style={{cursor: 'pointer'}}/>
          {/* Add language change functionality here */}
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  return (
    <>
        { language==='En' ? (<LoginEn/>) : ( <LoginFa/>) }
    </>
  );
};

export default Login;

