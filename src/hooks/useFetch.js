import { useEffect, useState } from 'react'

//  La URL se pasa como argumento justo debajo. Se generaliza usando sólo data en lugar de deaths, confirmed y recovered. Esos datos generales ya los traducirá y los tratará el componente que utilice este hook.
//  Los hooks sirven para simplificar mucho el resto de componentes, ya que en lugar de tener que hacer cada Fetch por separado, creas el método aparte y lo utilizas después tratando los datos recogidos en función de las necesidades de cada componente.

const useFetch = url => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                //  Importantísimo el orden, ya que en este ejemplo, si estableces antes el loading que el data, al renderizar el componente que llame a este hook, ya tendrá el loading como false en su comprobación, pero los datos serán null, así que dará error ya que no detectará el data que manda este componente
                setData(data)
                setLoading(false)
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [url])

    return { data, loading }
}

export default useFetch