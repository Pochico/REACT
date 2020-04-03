import React from 'react';
import useFetch from '../../hooks/useFetch'
import Data from '../Data'

const Spain = function () {
  //const [loading, setLoading] = useState(true)
  //const [deaths, setDeaths] = useState(null)
  //const [confirmed, setConfirmed] = useState(null)
  //const [recovered, setRecovered] = useState(null)

  //  ---------------  Esto es el hook que se está creando en useFetch, nos pasa los datos generales y los tratamos aquí para usarlos como queramos, por lo que las líneas que estén comentadas serían cómo se usa sin hook, y nos sobran al utilizarlo. ------------------------------------------------------------

  const { data, loading } = useFetch('https://enrichman.github.io/covid19/world/spain/data.json')

  /*
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://enrichman.github.io/covid19/world/spain/data.json')
        const data = await response.json()
        setLoading(false)
        setDeaths(data.deaths)
        setConfirmed(data.confirmed)
        setRecovered(data.recovered)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])*/

  if (loading) {
    return (
      <div><h2>Loading data...</h2></div>
    )
  }
  return (
    //    Aquí tendríamos que utilizar data.'lo que sea' para llamar a los datos generales que nos manda el hook y especificar cuál queremos
    <Data deaths={data.deaths} confirmed={data.confirmed} recovered={data.recovered} />
  )
}

export default Spain;
