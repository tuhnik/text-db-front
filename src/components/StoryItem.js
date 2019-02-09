import React, { Component } from 'react';


class StoryItem extends Component {
  render() {
    return (
        <div className="story-item">
            <div className="story-item-heading">{this.props.heading}</div>
            <div className="story-item-tags">
                {this.props.tags.map((el, i) =>{
                    return <div className="story-item-tag" key={i}>{el}</div>
                })}
            </div>
            <div className="story-item-description">{this.props.description}<a href="http://www.google.com"> Read more »</a></div>
            <div className="story-item-bottom">
                <div className = "story-item-date">{"Published: " + this.props.date}</div>
                <div className = "story-item-views">{"Views: " + this.props.views}</div>
            </div>
        </div>
    );
  }
}

export default StoryItem;
