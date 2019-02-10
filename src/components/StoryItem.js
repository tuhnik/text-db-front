import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class StoryItem extends Component {
 openStory = (id) =>{
    this.props.history.push("/story/"+id)
    
  }

  render() {
    return (
        <div className="story-item">
            <div className="story-item-heading" onClick={()=>this.openStory(this.props.id)}>{this.props.heading}</div>
            <div className="story-item-tags">
                {this.props.tags.map((el, i) =>{
                    return <div className="story-item-tag" key={i}>{el}</div>
                })}
            </div>
            <div className="story-item-summary">{this.props.summary}</div>
            <div className="story-item-description">{this.props.description}
            <div className="read-more" onClick={()=>this.openStory(this.props.id)}> Read more »</div>
            </div>
            <div className="story-item-bottom">
                <div className = "story-item-date">{"Published: " + this.props.date}</div>
                <div className = "story-item-views">{"Views: " + this.props.views}</div>
            </div>
        </div>
    );
  }
}

export default withRouter(StoryItem);
