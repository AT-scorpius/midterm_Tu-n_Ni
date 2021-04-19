import React, { Component } from 'react';
import { main_news } from './main_news';
import { getdata } from '../../../data/data'
class main_contain extends Component {
    render() {
        const list_news = getdata();
        const type_1 = [];
        const type_2 = [];
        const type_3 = [];
        const type_4 = [];
        for (let i = 0; i < list_news.length; i++) {
            if (list_news[i].id_type == 1) {
                type_1.push(list_news[i]);
            } else if (list_news[i].id_type == 2) {
                type_2.push(list_news[i]);
            } else if (list_news[i].id_type == 3) {
                type_3.push(list_news[i]);
            } else if (list_news[i].id_type == 4) {
                type_4.push(list_news[i]);
            }
        }
        return (
            <div>
                <div className="type_news_1">
                    <div className="title">...</div>
                    <div className="left-news">
                            abc xyz
                    </div>
                    <div className="right-news">

                    </div>
                </div>
                <div className="type_news_2">
                    <div className="left-news"></div>
                    <div className="right-news"></div>
                </div>
            </div>
        );
    }
}

export default main_contain;
