import { createContext , useState } from "react";

export const DataContext = createContext();

function DataContextProvider(props) {
    
    const [page , setPage] = useState('PowerTools')
    const [colorData , setColorData] = useState('#146EF5')


    const valor = {colorData , setColorData , page , setPage}

    return(
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;