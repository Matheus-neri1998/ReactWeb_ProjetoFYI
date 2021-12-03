import { Link } from 'react-router-dom';
import App from '../../App';
import styles from './Home.module.css'
// import {vector4} from '../../img/Vector-4.png';


function Home(){
    return(
        <section className={styles.home_container}>

            {/*                             
            <div>
            <img>{vector4}</img>
            </div> */}

            <div>
            <h1>Olá, Somos a<span>Avurto Treinamentos!</span></h1>
            <p>Você quer se capacitar para o mercado de TI? <span>Seu lugar é aqui!</span></p>
            {/* <a href='./Cursos'>Ver Cursos</a> */}
            </div>

            <div>
            <button><Link to="/cursos" >Ver Cursos</Link >
            </button>
            </div>

        </section>
    )
}
export default Home;