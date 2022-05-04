import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    return (
      <ul>
        {this.state.tags.length === 0 && "Please create a new Tag!"}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {this.renderTags()}
      </div>
    );
  }

  //   getBadgeClasses() {
  //     let classes = "badge m-2 bg-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

// ========================================

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Counter tab="home" />);
