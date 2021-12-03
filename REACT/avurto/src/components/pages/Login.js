import { Link } from "react-router-dom";
import App from "../../App";
import styles from './Login.module.css'
import React, { Component } from "react";
import axios from 'axios';
import {parseJwt, UsuarioAutenticado} from '../../Services/Auth';


class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            senha : '',
            errorMessage: '',
            loading: false,

        } // Fim de state
    } // Fim do construtor

    EfetuarLogin = (event) => {
        event.preventDefault();

        this.setState({ errorMessage: '', loading: true})

        axios.post('https://localhost:5001/v1/account', {
        email: this.state.email,
        senha: this.state.senha
        })

        .then(resposta => {
            if(resposta.status === 200 ) {
                localStorage.setItem('avurto-login', resposta.data.token)
                console.log(resposta.data.token)
                
                this.setState({email: '', senha: ''})

                this.setState({loading: false})

                console.log(parseJwt());
                console.log(parseJwt().role)

                // if(parseJwt().role === "1"){
                //     this.props.history.push('/home') 

                // } else if(parseJwt().role === "2"){
                //     this.pro
                // }

            } // Fim de resposta status code 200
        })

        .catch(() => {
            this.setState({ errorMessage: "Email e Senha inválidos! Tente Novamente.", loading: false })
        })

    } // Fim de EfetuarLogin

    AtualizarState = (campo) => {
        this.setState( {[campo.target.name]: campo.target.value} )
    }

render(){
    return (

    <section className={styles.sectionLogin}>

    <div className={styles.form}>
        <h1> Bem Vindo! </h1>
        <form onSubmit={this.EfetuarLogin} className={styles.form}>  
                    
            <div className={styles.item1}>
                <label htmlFor="email"> Seu Email </label>
                <input 
                    type='text' 
                    id="email" 
                    name="email" 
                    value={this.state.email}
                    placeholder='Digite o seu email' 
                    onChange={this.AtualizarState}/>
            </div> 

            <div className={styles.item2}>
                <label htmlFor="password"> Sua Senha </label>
                <input 
                    type="password"
                    id="password" 
                    name="senha"
                    value={this.state.senha}
                    placeholder='Digite a sua senha'
                    onChange={this.AtualizarState}/>
            </div>

                {/* <div className={styles.esqueceu}>
                <a><Link to="/login" > Esqueceu a sua senha? </Link >
                </a>
                </div> */}

                
                {/* <div className={styles.entrar}>
                <button><Link to="/" >Entrar</Link >
                </button>
                </div> */}
                
                <div className={styles.item3}>
                    <button type='submit' value='Entrar' onClick={UsuarioAutenticado}><Link to="/">Entrar</Link>
                    </button>
                </div> 

                </form>
            </div>
        </section> // Fim da section

    ) // Fim de return

} // Fim de render

} // Fim de class Login

export default Login