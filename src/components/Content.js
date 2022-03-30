import { Component } from 'react';
import animal from '../animal.png'

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numImages: 1
        }
    }

    displayImages = () => {
        let {numImages} = this.state;
        let images = [];
        
        for (let i=0; i < numImages; i++) {
            images.push(
                <img src = {animal} alt={i.toString()}/> //alt="animal"
            );
        }
      

        return (
            images
        );
    }


    handleChange = (event)=>{
        this.setState({numImages: event.target.value});
    }


    render() {
        return (
            <div> 
                <div>Please choose number of images
                    <select value={this.state.numImages} onChange={this.handleChange}>
                        <option value = "1"> 1 </option>
                        <option value = "2"> 2 </option>
                        <option value = "3"> 3 </option>
                        <option value = "4"> 4 </option>
                    </select>
                </div>
                {this.displayImages()}
            </div>
        );
    }
}



export default Content;
