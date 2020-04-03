import React from 'react';
import useFetch from '../../hooks/useFetch'
import Data from '../Data'

/*
class App extends React.Component {

  //  Componentes de clase: Estado interno, ciclo de vida, return de resultado
  state = {
    deaths: null,
    confirmed: null,
    recovered: null,
    loading: true
  }

  async componentDidMount() {
    //  async-await Lo que hace es tratar los datos recogidos como promesas, y esperará a que los datos sean recogidos, lo que sustituye el then. En este caso, const data = response.json() te daría una promesa si no le ponemos await, igual que const response
    try {
      const response = await fetch('https://enrichman.github.io/covid19/world/full.json')
      const data = await response.json()
      this.setState({
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentWillUnmount() {
    console.log('Se desmonta')
  }

  render() {
    if (this.state.loading) {
      return (
        <div><h2>Loading data...</h2></div>
      )
    }
    return (
      <Data deaths={this.state.deaths} confirmed={this.state.confirmed} recovered={this.state.recovered} />
    )
  }
}
*/

const Home = function() {

  const { data, loading } = useFetch('https://enrichman.github.io/covid19/world/full.json')

  if (loading) {
    return (
      <div><h2>Loading data...</h2></div>
    )
  }
  return (
    <Data deaths={data.deaths} confirmed={data.confirmed} recovered={data.recovered} />
  )
}

export default Home;
