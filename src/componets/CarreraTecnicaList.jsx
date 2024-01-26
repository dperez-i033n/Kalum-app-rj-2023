import { CarreraTecnicaRow } from "./CarreraTecnicaRow"

export const CarreraTecnicaList = ({carrerasTecnicas}) => {
    return (
        <table clasName="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Carrera Tecnica</th>
                    <th>update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrerasTecnicas.map(({codigo,nombre}) => (
                       <CarreraTecnicaRow key={codigo} codigo={codigo} nombre={nombre}/>
                    ))
              
                }
            </tbody>
            </table>
    )
}