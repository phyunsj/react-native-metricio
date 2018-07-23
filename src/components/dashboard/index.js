import React , { Component } from "react";
import { View } from 'react-native';

/* DashboardWidget "cloneElement()"" is not used for this version since socket props should be passed to grand-children */
/* consider to use Context API instead */
export default class DashboardWidget extends Component {
    constructor(props) {
      super(props);  
      this.renderWidgets = this.renderWidgets.bind(this);  
    }

    renderWidgets(props) {
        return React.Children.map(props.children, child => React.cloneElement(child, { socket : props.socket }));
    }

    render() {
        return (
           <View style={this.props.style} >{this.renderWidgets(this.props)}</View>
        );
    }
}

