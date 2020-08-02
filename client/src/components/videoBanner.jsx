import React, { useState, useEffect, Fragment } from 'react';
import '../utils/scss/pages/_videoBanner.scss';
import IgListItem from './igListItem';

const VideoBanner = () => {
    const [igData, setIgData] = useState([]);

    const getIgData = async () => {

        try {
            let res = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=IGQVJWQXc2TGJ4aVhwbUViM0YtRXZA6TEg0UVpnWVlyY1FKd3dxWWNnTkdBVjQ0LVR5SzBqMzhnNUliRG9mMFFjaF9sUEdIdHE5Vk9oSy16LWtxTmp0MUVWbWNoaC15aUxSYXNxSWRFV083OHFhRG9xVwZDZD', {

                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data);
            setIgData(data.data);
        } catch (e) {
            console.log(e)
        }





    }

    useEffect(() => {
    
    getIgData()

    }, []);

    return (<main className="videoBanner m-4">
         <div id="" className="container-fluid">
             <div className="row justify-content-center py-4">
                 <h1 className="text-light justify-content-center">Follow us on Instagram</h1>
             </div>
  
  

   <div className="row justify-content-center">

       {
           igData.map(item =>
            <IgListItem key={item.id} 
            id={item.id}
            caption={item.caption}
                   media_type={item.media_type}
                   media_url={item.media_url}
            />)
       }
   

  </div> 
</div>
    </main>
       
    )
}

export default VideoBanner;