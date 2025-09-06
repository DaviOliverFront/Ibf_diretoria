import './Buttom.css'

const Buttom  = (props) =>  {
    return(
        <button className='buttom'>
            {props.text}
        </button>
    )
}

export default Buttom;