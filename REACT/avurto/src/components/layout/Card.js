import styles from './Card.module.css'


function Card(props){
    return(
        <div className="card">
            <div className="card__body">
            <img className={styles.image} src= {props.imagem} alt="imagem de curso"/>
            <h2 className="card__title">{props.titulo}</h2>
            <p className="card__description">{props.descricao}</p>
            </div>
            <button>Comprar</button>
            
        </div>
    )
}

export default Card