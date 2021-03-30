import React from 'react'


function List(props){
    return props.list.map(item=>{
        return (
            <div key = {item.objectId}>
                <span> Author : {item.author}  </span>
                <span>
                    <a href = {item.url}>link</a>
                </span>
            </div>
        )
    })
}

export default List