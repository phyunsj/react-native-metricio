import React , { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';


import BaseWidget from './../base';
import baseStyles from './../../styles';

import numeral from 'numeral';

export default class NumberWidget extends BaseWidget {
    constructor(props) {
      super(props);
      this.state = {
        value: undefined,
        updatedAt: undefined,
        //value: 11.2,
        //updatedAt: '8/11.2017 5:32:06',
      };
    }
  
    render() {
      const value = this.props.format
        ? numeral(this.state.value).format(this.props.format)
        : this.state.value;
  
      return (
        <View style={ [this.props.style, baseStyles.container]}>
            <Text style={ baseStyles.title} >{this.props.title}</Text>
            <Text style={ baseStyles.value} >
            {typeof this.state.value !== 'undefined' ? this.state.value : '---'}
            {typeof this.state.value !== 'undefined' ? this.props.metric: null}
            </Text>         
            <Text style={ baseStyles.updateAt}>{this.state.updatedAt}</Text>          
        </View>
      );
    }
}

NumberWidget.propTypes = {
  format: PropTypes.string,
  metric: PropTypes.string,
  title: PropTypes.string.isRequired,
};
