import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Pour tes styles personnalisés

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/admin';
    } catch (err) {
      alert('Login ou mot de passe incorrect');
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Partie gauche */}
        <div className="col-md-6 bg-teal text-white d-flex justify-content-center align-items-center p-0">
          {/* Bloc logo + form centré */}
          <div className="d-flex flex-column align-items-center justify-content-center w-100" style={{ maxWidth: '400px' }}>
            <div className="text-center mb-4">
              <img src="/tc-logo.png" alt="TC Logo" style={{ width: '80px', height: '80px' }} />
            </div>

            <div className="login-form bg-white text-dark p-4 rounded shadow w-100">
              <h5 className="text-center mb-4">
                <strong>Se connecter à votre espace</strong>
              </h5>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="btn w-100" style={{ backgroundColor: '#008080', color: 'white' }}>
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Partie droite */}
        <div className="login-right col-md-6 d-flex justify-content-center align-items-center bg-light">
          <img src="/logo-tandiifcom.png" alt="TandiifCom Logo" className="img-fluid" style={{ maxWidth: '350px' }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
