import React, { Component } from 'react';

class Main_news extends Component {
    render() {
        return (
            <div>
                <div className="news">
                    <div className="top_news">
                        <img src={this.props.img} alt="" />
                        <h3 className="title">{this.props.title}</h3>
                    </div>
                    <div className="bottom_news">
                        <div className="news_time">{this.props.time}</div>
                        <div className="comment" >{this.props.sl_comment}</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main_news;
