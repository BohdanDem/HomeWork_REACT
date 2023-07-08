import styles from "./SimpsonPerson.module.css"
const SimpsonPerson = (props) => {
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