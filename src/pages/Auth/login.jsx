export function Login () {
    const fondo = {
        background: " blue",
        height: "100vp",
        width: "100vp"

    }
    return (
        <>
        <div  style={fondo} >
            <div>
               <img src="" alt="" /> 
               <h3> Bienvenido al Login </h3>
               <form action="sudmit">
                    <input type="text" />
                    <input type="password" />
                    <button type="sudmit"> Iniciar Seción </button>
               </form>
            </div>
        </div>
        </>
    )
}