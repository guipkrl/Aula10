import {link} from "react-router-dom";
export default function Menu(){
    return(
        <header>
            <h2>Escola</h2>
            <div className="menu"> 
            <link to= "/" Home </link>
            <link to= "/cadastro" Novo Aluno  </link>
            <link to = "/consulta" Listagem de Alunos  </link>
            </div>
        </header>
    );
}