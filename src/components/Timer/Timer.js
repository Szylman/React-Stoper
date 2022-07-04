import styles from '../Timer/Timer.module.scss'
import Button from '../Button/Button';

const Timer = props => {
    return (
        <div>
            <h1>clock</h1>
            <Button>Start</Button>
            <Button>Stop</Button>
            <Button>Reset</Button>
        </div>
    );
};

export default Timer;