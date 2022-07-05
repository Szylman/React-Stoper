import styles from '../FormatTime/FormatTime.module.scss';
const FormatTime = props => {
    const milliseconds = String(props.time).slice(-3).padStart(3, "0");
    const seconds = String(Math.floor(props.time / 1000)).padStart(2, "0");
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const hours = String(Math.floor(minutes / 60)).padStart(2, "0");

    return (<h1 className={styles.stopwatch}>
    {hours} : 
    {minutes} : 
    {seconds} : 
    {milliseconds}
    </h1>)
}

export default FormatTime