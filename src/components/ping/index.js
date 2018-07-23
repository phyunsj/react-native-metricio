import React , { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { parseTime, parseStatusCode } from './../../utils';
import PropTypes from 'prop-types';

import BaseWidget from './../base';
import baseStyles from './../../styles';

import numeral from 'numeral';

export default class PingWidget extends BaseWidget {
    constructor(props) {
      super(props);
      this.state = {
        time: undefined,
        updatedAt: undefined,
        status: undefined,
        //time: undefined,
        //updatedAt: '8/11.2017 5:32:06',
        //status: 200,
      };


    }
  
    render() {
      const parsedTime = this.state.time ? parseTime(this.state.time) : { unit: '---', metric: '' };
      
      return (
        <View style={ [this.props.style, baseStyles.container]}>
          <Text style={ baseStyles.title} >{this.props.title}</Text>
          <Text style={ baseStyles.value} >
            {parsedTime.unit}
            {parsedTime.metric}
          </Text>         
          <Text style={ baseStyles.updateAt}>{this.state.updatedAt}</Text>          
       </View>

      );
    }
}

PingWidget.propTypes = {
  title: PropTypes.string.isRequired,
};
