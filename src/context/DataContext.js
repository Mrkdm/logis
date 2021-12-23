import React, { createContext, useEffect, useState } from 'react'
import axios  from 'axios'
export const DataContext = createContext()



let dataCasas = {}

const URL = 'http://68.183.16.45/api/images'


export const DataProvider = ({children}) => {
    (async()=>{
      dataCasas =  await axios.get('http://68.183.16.45/api/images/')
    })()
    const [totalCasas, setTotalCasas] = useState(dataCasas)
    return (
        <DataContext.Provider value={{
            totalCasas
        }}>
            {children}
        </DataContext.Provider>
    )
}
