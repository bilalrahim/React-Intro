import './App.css';
// import Movie from './Movie'
import List from './List'
import React from 'react'
import Search from './Search'
const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleSearch = event => setSearchTerm(event.target.value)
  
  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
    
      <h2> Find Books on Web FrameWorks</h2>
      <Search onSearch = {handleSearch} />
      
      <hr></hr>
      
      <List list = {searchedStories} /> 
    </div>
    );
}

export default App;
