import React, { Component } from 'react';

class main_news extends Component {
    render() {
        return (
            <div>
                <div className="news">
                    <div className="top_news">
                        <img src={this.props.image} alt="Lỗi Hiển Thị" />
                        <h2 className="title">{this.props.title}</h2>
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

export default main_news;
