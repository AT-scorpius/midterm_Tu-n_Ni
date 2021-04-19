import React, { Component } from 'react';

class sub_content_detail extends Component {

    render() {
       
        return (
            <div>
                {/* <img src = {this.props.image}  width = { 200 } height = { 200 }/> */}
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default sub_content_detail;