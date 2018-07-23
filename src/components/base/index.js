import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class BaseWidget extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.socket.on(`widget:update:${this.props.name}`, data => {
      this.setState(data);
    });
  }
}

BaseWidget.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
  socket: PropTypes.shape.isRequired,
};
