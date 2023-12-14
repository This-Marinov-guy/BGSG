import React, { useState, useEffect } from 'react'

const GifImage = (props) => {
    const [gif, setGif] = useState(null)
    const [loading, setLoading] = useState(false)

    const apiKey = process.env.REACT_APP_GIPHY;
    const searchEndPoint = "https://api.giphy.com/v1/gifs/search?";
    const limit = 10;
    const keyword = 'christmas'

    useEffect(() => {
        fetch(`${searchEndPoint}&api_key=${apiKey}&q=${keyword
            }&limit=${limit}`)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setGif(json.data.map(gif => gif.id).map(gifId => {
                    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
                })[Math.floor(Math.random() * limit)])
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className='image_input_window'>
            <img src={props.src || gif} alt='gif'></img>
        </div>
    )
}

export default GifImage

