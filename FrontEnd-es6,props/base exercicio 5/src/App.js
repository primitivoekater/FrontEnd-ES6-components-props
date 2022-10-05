import './App.css';
import {UserCardAlerta, UserCardCookie} from './components/Usercard'



function App() {
  return (
    <div className="App">
      <UserCardCookie mensagem="Nós utilizamos cookies para melhorar nossa UX, analytics e marketing."/> 
      <UserCardAlerta mensagem ="Você será deslogado imediatamente!"/>
    </div>
  );
}

export default App;
