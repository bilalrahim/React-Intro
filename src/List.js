import React from 'react'

const list = [
    {
      title : 'React',
      url : 'https://reactjs.org/',
      author : 'Jordan Walke',
      num_comments : 3,
      points : 4,
      objectID : 0,
    },
    {
      title : 'Redux',
      url : 'https://redux.js.org/',
      author : 'Dan Abramov, Andrew Clark',
      num_comments : 2,
      points : 5,
      objectID : 1,
    },
  ];

function List(){
    return list.map(item=>{
        return (
            <div key = {item.objectId}>
                <span>
                    <a href = {item.url}>url</a>
                </span>
                <span> {item.author}</span>
                <span> {item.num_comments}</span>
                <span>, {item.points}</span>
            </div>
        )
    })
}

export default List