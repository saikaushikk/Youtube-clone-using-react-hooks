import React,{useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import {SearchBar,VideoDetails,VideoList } from './components'
import youtube from './api/youtube'
function App()
{
    const [videos,setVideo] = useState([]);
    const [selectedVideo,setSelected] = useState(null);

    useEffect(() => {
        handleSubmit("Javascript")
    },[] );
    const handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyDuv7Bj-QVtVL0YrykS9y8-pbOjkOadKlw',
                q:searchTerm,
            }
        }
        );

        
        setVideo(response.data.items);
        setSelected(response.data.items[0]);
        //console.log({videos});
    } 
    const onVideoSelect = (video) =>{
        setSelected(video);
    }
    return(
        <Grid justify= 'center' container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit}/>
                    </Grid>
                    <Grid item xs= {8}>
                        <VideoDetails video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App;
