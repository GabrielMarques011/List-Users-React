import { useEffect, useState } from "react";
import { InputContainer } from "./style";
import Button from "../button/button";
import Linha from "../linha";

export default function Input() {

    const [usuario, setUsuario] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const [cont, setCont] = useState(0);

    /* Utilizando para criar um usuario */
    const addUser = () => {
    
        if(usuario.length === 0){
            alert('Digite um nome');
        }else{
            setUsuarios([...usuarios, usuario]);
            setUsuario('');
        }
    
    };

    /* Utilizando para contar quantos usuarios tem na lista */
    useEffect(() => {

        setCont(usuarios.length);

    }, [usuarios]);

    return (
        <InputContainer>
            <label>Escreva aqui o seu nome</label>
            <input value={usuario} onChange={(event) =>{
                setUsuario(event.target.value);
            }}/>

            <p className="total">Total de Usuarios: {cont}</p>

            <Button addUser={addUser}/>

            <Linha/>

            {usuarios.map((item) => (
                <p className="item">{item}</p>
            ))}

        </InputContainer>
    )
}