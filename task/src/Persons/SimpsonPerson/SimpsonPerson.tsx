import styles from "./SimpsonPerson.module.css"

interface Simpsons {
    name: string,
    surname: string,
    age: string
    info: string,
    photo: string
}

const SimpsonPerson = (props: Simpsons) => {
    const {name, surname, age, info, photo} = props

    return(
        <div className={styles.person}>
            <h3>{name} {surname} - {age}</h3>
            <p>{info}</p>
            <img src={photo} alt={'simpson'}/>
        </div>
    )
}

export default SimpsonPerson