import DropDown from '../DropDown/DropDown';
import TextField from '../TextField/TextField'
import './Form.css'

const Form = () => {

    const times = [
        '',
        'Presidência',
        'Diáconos',
        'Secretários',
        'Tesoureiros',
    ];

    return (
        <section className="formu">
            <form>
                <h2>Preencha os dados para criar um novo membro!</h2>
                <TextField label="Nome:" placeholder="Digite seu nome"/>
                <TextField label="Cargo:" placeholder="Informe seu cargo"/>
                <TextField label="Imagem:" placeholder="Adicione uma foto"/>
                <DropDown label="Time:" itens={times}/>
            </form>
        </section>
    )
}

export default Form;