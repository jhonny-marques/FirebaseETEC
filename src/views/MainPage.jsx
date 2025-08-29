import { auth } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext'; // Importe o hook useAuth
import Header from '../components/Header'

function MainPage() {
  const { user } = useAuth(); // Acesse o objeto user do contexto

  const handleSignOut = () => {
    auth.signOut();
  };

  console.log(user)
  const pageTitle = 'Página inicial.'
  return (
    <>
    <Header pageTitle={pageTitle}>
      <div>
        <p>Bem-vindo!</p>
      </div>
    </Header>
    </>
  );
}

export default MainPage;
