import React, { Component } from 'react';


class StoryItem extends Component {
  render() {
    return (
        <div className="story-item">
        <h2 className="story-item-heading">{this.props.heading}</h2>
        <div className="story-item-tags">
            {this.props.tags.map((el, i) =>{
                return <div className="story-item-tag" key={i}>{el}</div>
            })}
        </div>
        <div className="story-item-description">{this.props.description}</div>
        </div>
    );
  }
}

export default StoryItem;
