import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import { debounce } from "lodash";
import ImageData from './ImageData';

function App() {
  const [imageData, setImageData] = useState([]);
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const handleTextChange = debounce((text) => {
    console.log(clientId);
    
    //getImages(text);
  }, 1000);

  const getImages = async (searchTerm) => {
    const response = await fetch(`https://api.imgur.com/3/gallery/search/?q=${searchTerm}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID ' + clientId
      }
    });
    const json = await response.json();

    const imageDataArray = json.data.map(data => {
      if("images" in data){
        return new ImageData(data);
      }
    });

    setImageData(imageDataArray);
  }
   
  return (
    <div>
      <h1>Image Search</h1>
      <SearchBar onChange={handleTextChange}/>
      <ImageGrid data={imageData}/>
    </div>
  );
}

export default App;