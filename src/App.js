import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login';
import NavBar from './components/navBar';

function App() {
  return (
    <><NavBar></NavBar>
    <div className='wrap'>
      <LoginForm>
      </LoginForm>
    </div></>
   
  );
}

export default App;
