import React, { Component } from "react";
import "./SwipeableList.css";

class SwipeableList extends Component {
  render() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child => {
      if (!child.props.background) {
        return React.cloneElement(child, { background: this.props.background });
      }
      return child;
    });

    return <div className="List">{childrenWithProps}</div>;
  }
}

export default SwipeableList;
