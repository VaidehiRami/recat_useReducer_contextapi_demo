import React,{useContext} from 'react';
import Home from './component/Home/Home';
import Login from './component/LOGIN/Login'
import MainHeader from './component/MainHeader/MainHeader'
import AuthContext from './context/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
