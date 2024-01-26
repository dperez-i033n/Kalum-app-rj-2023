import { CarreraTecnicaList } from './componets/CarreraTecnicaList';

const initcarrerasTecnicas = [
    {codigo: '1', nombre: 'Programacion con java'},
    {codigo: '2', nombre: 'Desarrollo de aplicaciones web'}
  ]




export const App = () => {
    return (
        <>
            <h1>Carreras Tecnicas</h1>
            <CarreraTecnicaList carrerasTecnicas = {initcarrerasTecnicas}/>
          
        </>
    )
}