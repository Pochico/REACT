import React, {useState} from 'react'

//  Antes no se podían poner estados en un componente funcional. Los hooks son la manera de ponerles estado y trabajar con ellos. Devuelve const [estado actual, el método para modificarlo] = useState(valor por defecto)

const HooksEjemplo = () => {
    const [count, setCount] = useState(0)

    function handleChange(event) {
        setCount(event.target.value)
    }

    return (
        <>
            <div>valor del contador: {count}</div>
            <input onChange={handleChange} value={count} />
        </>
    )
}

export default HooksEjemplo