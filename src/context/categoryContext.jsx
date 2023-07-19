import React, {createContext, useState} from "react";

const categoryContext = createContext();

function CategoryContextProvider(props){

    const [category, setCategory] = useState([])

}
export {categoryContext, CategoryContextProvider}