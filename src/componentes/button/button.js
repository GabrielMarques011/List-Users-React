import { ButtonContainer } from "./style";
import { } from "../../App"

export default function Button({addUser}){
    return(
        <ButtonContainer>
            <button onClick={(() => addUser())}>Adicionar Nome</button>
        </ButtonContainer>
    )
}