import React from 'react'

function Search(props){
  // React state.
  // useState takes initial state as an argument and returns an array.
  // searchTerm is the set state and setSearchTerm a function that sets new state.

    //const [searchTerm, setSearchTerm] = React.useState('')
    //const handleChange = event => setSearchTerm(event.target.value);

    return(
        <div>
        <label htmlFor = "search"> Search </label>
        <input id = "search" type = "text" onChange = {props.onSearch}/>
         
    </div>
    )
}
export default Search