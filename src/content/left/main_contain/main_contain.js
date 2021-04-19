import React, { Component } from "react";
import Main_news from "./Main_news";
import { getdata } from "../../../data/data";
class Main_contain extends Component {
  render() {
    const list_news = getdata();
    const type_1 = [];
    const type_2 = [];
    const type_3 = [];
    const type_4 = [];
    list_news.map((list_new) => {
      if (list_new.id_type == 1) {
        type_1.push(list_new);
      } else if (list_news.id_type == 2) {
        type_2.push(list_news);
       
      } else if (list_news.id_type == 3) {
        type_3.push(list_news);
      } else if (list_news.id_type == 4) {
        type_4.push(list_news);
      }
    });
    
    return (
      <div>
        <div className="type_news_1">
          <div className="title_type">
            <h2>{type_1[0].type}</h2>
          </div>
          <br />
          <div className="right_left_display">
            <div className="left-news">
              <Main_news
                title={type_1[0].title}
                img={type_1[0].image}
                time={type_1[0].time}
                sl_comment={type_1[0].sl_comment}
              />
            </div>

            <div className="right-news">
           
              {type_1.map((list, index) => {
                if (list.id != type_1[0].id) {
                  return (
                    <div className="right-news-content">
                    <Main_news
                      key={index}
                      title={list.title}
                      img={list.image}
                      time={list.time}
                      sl_comment={list.sl_comment}
                    />
                      </div>
                  );
                }
              })}
            
            </div>
          </div>
        </div>
     </div>
     
    );
  }
}

export default Main_contain;
