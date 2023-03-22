import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Register } from './components/Register';
import { Home } from './components/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Create } from './components/Create';
import { Gallery } from './components/Gallery';
import { Details } from './components/Details';
import { useState, useEffect } from 'react';

import {gameServiceFactory} from './services/gameService'
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';
import { Logout } from './components/Logout';

function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory(auth.accessToken);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result)
      })
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);

    setGames(state => [...state, newGame]);

    navigate('/gallery');
  };


  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate('/');
    } catch (error) {
      console.log('There is a problem');
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate('/catalog');
    } catch (error) {
      console.log('There is a problem');
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      <div className="App">
        <Header />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create onCreateGameSubmit={onCreateGameSubmit} />} />
          <Route path='/gallery' element={<Gallery games={games} />} />          
          <Route path='/gallery/:gameId' element={<Details />} />
        </Routes>


        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
