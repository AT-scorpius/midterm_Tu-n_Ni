import React, { Component } from 'react';
import {Getdata} from '../data/data';
import showCard from '../show-card/showCard';
import React, { Component } from 'react';


class right extends Component {
    render() {
        console.log(Getdata());
        const Products = Getdata();
        return (
            <div>
                <div id = "right">
                    <h2>products: </h2>
                    <div id ="products">
                        {Products.map(Products=>
                        <Showcard Type = {Products.Type} Name = {Products.Name} Images = {Products.Images}/>)}
                        
                    </div>
                 
                </div>
            </div>
        );
    }
}

export default right;
