import React, { useEffect, useState } from 'react'
import '../utils/scss/pages/_igListItem.scss';

const IgListItem = (props) => {

    const [mediaType, setMediaType] = useState(props.media_type);
    const [video, setVideo] = useState(false);



    const checkMediaType = () => {
        if (mediaType === 'VIDEO') {
            setVideo(true)
        }
    }

    useEffect(() => {

        checkMediaType()
        console.log(mediaType)

    }, []);

    if (video) {
        return (



            <div className="d-lg-none d-xl-none d-md-none d-sm-none d-xs-none col-auto d-flex flex-wrap">

                <video height="150px" width="150px" controls>
                    <source src={props.media_url} type="video/mp4"></source>

                </video>

            </div>

        )
    } else
        return (
            <main className="igListItem">
                <div className="col-auto d-flex flex-wrap py-3">

                    <img className="imgThumbnail grow" src={props.media_url}></img>
                    
                </div>
           
             
                </main >
               
            

        )
}

export default IgListItem;