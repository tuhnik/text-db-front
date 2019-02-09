import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
    <div className="main">
      <aside>
        <div className="tag-list">
          <div className="tag">Tere</div>
          <div className="tag">Hola</div>
          </div>
      </aside>
      <article>
        <div className="headline">All stories</div>
        <div className="header-line"></div>
      </article>
    </div>
    );
  }
}

export default Main;
