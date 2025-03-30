
export const DisplayInfoUser = ({user}) => {


    return <div>
        {user.map((v, i)=>(
            <div key={i}>
                <h2>{v.nombre + ' ' + v.apellido }</h2>
                <p>{v.telefono}</p>
            </div>
        ))}
        
        
    </div>
}