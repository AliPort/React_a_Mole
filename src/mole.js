import {useEffect} from 'react';
import molepic from './molepic.png';

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={molepic}
            onClick={props.handleClick} alt='mole'/>
        </div>
    )
}


export default Mole;