import {Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Cursos from './components/pages/Cursos'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import Container from './components/layout/Container'
// import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer'

function App() {
  return (
        <Router>
          <Switch>
          <Container customClass="min-height">
          <Route element= {<Home/>} path="/home" />
          <Route element= {<Cursos/>} path="/cursos" />
          <Route element={<Login/>} path="/login" />
          <Route element= {<Cadastro/>} path="/cadastro" />
          </Container>
         </Switch>
        </Router>
  );
}
export default App;