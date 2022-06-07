import React, {Component} from 'react';
import classes from'./App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/TopBar';

class App extends Component {
  state={
    productData:ProductData,
    currentPreviewImagePos : 0,
    currentSelectedFeature : 0,
  }

  onColorOptionsClick = (pos) => {
    // const updatePreviewImage = this.state.productData.colorOptions[pos].imageUrl;
    // console.log(updatePreviewImage);
    this.setState({currentPreviewImagePos : pos});
  }

  onFeatureItemClick= (pos) =>{
    /* let updatedState = false;
    if(pos===1){
      updatedState=true; 
    } */
    this.setState({currentSelectedFeature:pos});
  }
    
  shouldComponentUpdate(nextProps , nextState){
    // console.log('Next State=>', nextState);
    // console.log('Current State=>', this.State);
    console.log('Inside Should Component Update !');
    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
      return false;
    }
    return true;
  }
  render(){
    console.log("Rendring App js");
    return (
      <div className="App">
          <Topbar />
      <div className={classes.MainContainer}>
          
          <div className={classes.ProductPreview}>
               <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
               currentSelectedFeature={this.state.currentSelectedFeature} />     
          </div>
          
          <div className={classes.productData}>
            <ProductDetails data={this.state.productData} onColorOptionsClick={this.onColorOptionsClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div> 
        </div>
      </div>
    );
  }
  
}

export default App;
