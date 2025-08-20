import './TextField.css'

//arrowFunction
const TextField = (props) => {
    
    return(
        <main className="text-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </main>
    )
}

export default TextField;