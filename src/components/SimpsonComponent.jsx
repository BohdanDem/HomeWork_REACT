import styles from "./SimpsonComponent.module.css"
const SimpsonComponent = (props) => {
    const {id,name,status,species,gender,image} = props

    return(
        <div className={styles.simpson}>
            <h3>ID - {id}, name - {name}</h3>
            <div>status - {status}</div>
            <div>{species} {gender}</div>
            <img src={image} alt='simpson'/>
        </div>
    )
}

export default SimpsonComponent
