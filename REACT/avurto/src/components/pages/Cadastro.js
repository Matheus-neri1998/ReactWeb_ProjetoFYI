import styles from './Cadastro.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Cadastro(){
    
    function CadastarUsuario(e){
        e.preventDefault()
        // alert('funciona')
        console.log(`O usuario cadastrou nome ${name},sobrenome ${sobrenome},cpf ${cpf},email ${email} e senha ${password}`)
    }
    const[name, setName] = useState()
    const[sobrenome, setSobrenome] = useState()
    const[cpf, setCpf] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    return(
        <section className={styles.sectioncadastro}>

            <div className={styles.form}>
                <h1>Bem vindo! </h1>
                <form onSubmit={CadastarUsuario}>

                    <text> Seu nome </text>
                    <div className={styles.input1}>
                        <input 
                            type='text'
                            id='name'
                            name = 'name'
                            placeholder='Digite seu nome'
                            onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <text> Seu sobrenome </text>
                    <div className={styles.input2}>
                        <input 
                            type='text'
                            id='sobrenome'
                            name='sobrenome'
                            placeholder='Digite seu sobrenome'
                            onChange={(e)=>setSobrenome(e.target.value)}/>
                    </div>

                    <text> Seu CPF </text>
                    <div className={styles.input3}>
                        <input 
                            type='text'
                            id='cpf'
                            name='cpf'
                            placeholder='Digite seu CPF'
                            onChange={(e)=>setCpf(e.target.value)}/>
                    </div>

                    <text> Seu email</text>
                    <div className={styles.input4}>
                        <input 
                            type='text' 
                            id="email" 
                            name="email" 
                            placeholder='Digite seu email' 
                            onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <text> Sua senha </text>
                    <div className={styles.input5}>
                        <input 
                            type='password' 
                            id="password" 
                            name="password" 
                            placeholder='Digite sua senha'
                            onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <h2> Já possui uma conta? </h2>

                    <div className={styles.conecte}> 
                    <a> <Link to ={"/"} > Conecte-se </Link> </a>
                    </div>
                   

                    {/* <div>
                        <input type='submit' value='Cadastrar'/>
                    </div> */}

                    <div className={styles.cadastre}>
                    <button><Link to="/" > Cadastrar </Link>
                    </button>
                    </div>
                    
                </form>
            </div>

        </section>
    )
}
export default Cadastro;