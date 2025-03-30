import {useState} from 'react'

export const NewUserForm = ({passData}) =>{

    const [ data, setData] = useState({
        nombre:'',
        apellido:'',
        telefono:0
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setData((datosPrevios) =>({
            ...datosPrevios,
            [name]:value
        }))

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        passData(prevUsers => [...prevUsers, data]);
    }



    return<div>
        <form onSubmit={handleSubmit}>
            <h1>Creación de Nuevo Usuario</h1>
            <div>
                <p>Nombre</p>
                <input type='text' name='nombre' value={data.nombre} onChange={handleChange} />
            </div>
            <div>
                <p>Apellido </p>
                <input type='text' name='apellido' value={data.apellido} onChange={handleChange}/>
            </div>
            <div>
                <p>Teléfono </p>
                <input type='number' name='telefono' value={data.telefono} onChange={handleChange}/>
            </div>
            <div>
                <button>Crear</button>
            </div>
        </form>
    </div>


}