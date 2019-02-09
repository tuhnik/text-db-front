import React, { Component } from 'react';
import StoryList from './StoryList'
let tags = ["Tere", "Hola", "Yo", "Random"]


class Main extends Component {
  render() {
    return (
    <div className="main">
      <aside>
      <div className="headline">⭐Tags</div>
        <div className="header-line"></div>
        <div className="tag-list">
        {tags.map((el, i)=>{
          return <div key={i}className="tag">{el}</div>
        })}
        </div>
      </aside>
      <article>
        <div className="headline">All stories</div>
        <div className="header-line"></div>
        <StoryList/>
      </article>
    </div>
    );
  }
}

export default Main;
