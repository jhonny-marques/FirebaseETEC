import './App.css'
import { AuthProvider } from './contexts/AuthContext'; // Importe o AuthProvider
import { useAuth } from './contexts/AuthContext'; // Importe o hook useAuth
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';
import UserProfileForm from './views/UserProfilePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
}

function AuthContent() {
  const { user } = useAuth(); // Agora o useAuth() deve retornar o valor correto

   return (
     <>
       {user 
       ? 
       <Routes>
           <Route index element={<MainPage />} />
           <Route path="/user-prof" element={<UserProfileForm />} />
                   
     
       </Routes>      
       
       : <LoginPage />}
     </>
   );
}

export default App;
