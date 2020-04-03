import React from 'react'
import DataItem from './DataItem'

//  Componentes funcionales: Tienen el HTML que se tiene que pintar.

const Data = ({deaths, confirmed, recovered}) => (
    //  Una etiqueta div se puede escribir así: <> </>
    <div>
        <DataItem title='Muertes' number={deaths} />
        <DataItem title='Casos Confirmados' number={confirmed} />
        <DataItem title='Casos Recuperados' number={recovered} />
    </div>
)

export default Data