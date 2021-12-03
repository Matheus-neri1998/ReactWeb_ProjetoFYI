import styles from './Cursos.module.css'
import Card from '../layout/Card'
import imgcard1 from '../../img/card1-1.png'
import imgcard2 from '../../img/card2.png'
import imgcard3 from '../../img/card3.png'
import imgcard4 from '../../img/card4.png'



function Cursos(){
    return(

        <section className={styles.wrapper}>

        <div>
            <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
             </video>
         </div>

            <Card  imagem= {imgcard1}  />
            <Card  imagem= {imgcard2}  />
            <Card  imagem= {imgcard3} />
            <Card  imagem= {imgcard4} />
        </section>

       
    )
}
export default Cursos;
