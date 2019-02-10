import React, { Component } from 'react';
import StoryList from './StoryList'
import Pagination from './Pagination'

let tags = ["Tere", "Hola", "Yo", "Random"]


class Main extends Component {
  render() {
    return (
    <div className="main">
      <aside>
      <div className="headline">Tags</div>
        <div className="line"></div>
        <div className="tag-list">
        {tags.map((el, i)=>{
          return <div key={i}className="tag">{el}</div>
        })}
        </div>
      </aside>
      <article>
        <div className="headline">All posts</div>
        <div className="line"></div>
        <StoryList/>
        <Pagination totalRecords={133} currentPage={9}/>
      </article>
    </div>
    );
  }
}

export default Main;
