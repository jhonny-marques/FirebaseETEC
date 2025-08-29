import { NavLink } from 'react-router-dom';
import {auth}      from '../firebase/config.js';
import { useAuth } from '../contexts/AuthContext.jsx'; // Importe o hook useAuth
import "./Header.css"

function Header({ pageTitle }) {
  const { user } = useAuth(); // Acesse o objeto user do contexto

  const handleSignOut = () => {
    if (window.confirm('Deseja sair, tem certeza?')) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header-btns">
        <NavLink to="/"><button className="btn">Lista</button></NavLink>
        <NavLink to="/user-prof"><button className="btn">Perfil</button></NavLink>

        <div className="user-info">
          {user && (
            <>
              {user.photoURL ? (
                <div className="user-details">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '6px' }}
                  />
                  <span>{user.displayName}</span>
                </div>
              ) : (
                <div className="user-details">
                  <i className="fa fa-user" style={{ marginRight: '10px' }}></i>
                  <span>{user.email}</span>
                </div>
              )}
              <button onClick={handleSignOut} className="btn">Sair</button>
            </>
          )}
        </div>
      </div>

      <h1>{pageTitle}</h1>
    </>
  );
}

export default Header;