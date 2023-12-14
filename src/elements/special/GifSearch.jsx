import React, { useState } from 'react'

const GifSearch = (props) => {

    const [timer, setTimer] = useState()
    const [keyword, setKeyword] = useState('')
    const [renderedGifs, setRenderedGifs] = useState(null)
    const [selectedGifUrl, setSelectedGifsUrl] = useState('');
    const [loading, setLoading] = useState(false)
    
    const apiKey = process.env.REACT_APP_GIPHY;
    const searchEndPoint = "https://api.giphy.com/v1/gifs/search?";
    const limit = 10;

    const showGif = (json) => {
        setRenderedGifs(json.data.map(gif => gif.id)
            .map(gifId => {
                return `https://media.giphy.com/media/${gifId}/giphy.gif`;
            }))
    }

    const searchGif = (kw) => {
        setLoading(true)
        clearTimeout(timer)
        setTimer(setTimeout(() => {
            fetch(`${searchEndPoint}&api_key=${apiKey}&q=${kw
                }&limit=${limit}`)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    showGif(json)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err);
                });
        }, 500))

    }
    return (
        <div className="col-lg-12 col-md-12 col-12">
            <div className="rnform-group">
                <input type="text" value={keyword}
                    placeholder={selectedGifUrl || "Search GIFs to add"} onChange={(event) => { searchGif(event.target.value), setKeyword(event.target.value) }} />
                {(keyword && !loading && renderedGifs) && <div className='gif-container'>
                    {
                        renderedGifs.map((gif, index) => (
                            <img key={index} src={gif} onClick={() => {
                                setSelectedGifsUrl(gif)
                                props.setValue(gif)
                                setKeyword('')
                            }}
                            />))
                    }

                </div>}
                {loading && <div className='gif-container' >
                    <h4>Loading...</h4>
                </div>}
            </div>
        </div>)
}

export default GifSearch