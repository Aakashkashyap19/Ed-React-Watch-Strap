import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview=(props)=>{
    
  const currentHour= new Date().getHours()> 9 ? new Date().getHours() : '0'+ new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes();
  const currentSeconds = new Date().getSeconds() > 9 ? new Date().getSeconds() : '0'+new Date().getSeconds();
    return(
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt="Product Preview"/>

              {
                props.currentSelectedFeature === 1 ?
                <div className={classes.HeartBeatSection}>
                <i class="fas fa-heartbeat"></i>
                <p>75</p>
                </div>
                :
                <div className={classes.TimeSection}>
                <p>{`${currentHour}.${currentMinute}.${currentSeconds}`}</p>
                </div>
              }
          </div>
    );
}
export default ProductPreview;