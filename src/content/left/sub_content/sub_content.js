import React, { Component } from 'react';
import { getData } from './Data';
import {sub_content_detail}  from './sub_content_detail';

class sub_content extends Component {

    render() {
        console.log(getData());
         
        const list_news= getdata();
        const type_1=[];
        const type_2=[];
        const type_3=[];
        const type_4=[];
        for( let i =0; i<list_news.leght; i++)
        {
            if(list_news.id_type == 3)
            {
                type_3.push(list_news[i].getData());
            }else if (list_news.id_type == 4)
            {
                type_4.push(list_news[i].getData());

            }else
            {

            }
        }
        return (
            
            <div >
                <div id ="sub_top_content">
                
                {
                    list_news.map( sub_content=>
                        <sub_content_detail image = {sub_content.image} 
                        title= {sub_content.title} />
                        )
                }
                
            </div>
            <div id ="sub_buttom_content">
                <div></div>
            {
                    list_news.map( sub_content=>
                        <sub_content_detail image = {sub_content.image} 
                        title= {sub_content.title} />
                        )
                }
            </div>
            </div>
            
        );
    }
}

export default sub_content;