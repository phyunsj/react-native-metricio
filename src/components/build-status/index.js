import React , { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import BaseWidget from './../base';
import baseStyles from './../../styles';

export default class BuildStatusWidget extends BaseWidget {
    constructor(props) {
      super(props);
      this.state = {
        outcome: undefined,
        updatedAt: undefined,
      };
    }
  
    render() {    
      return (
        <View style={ [this.props.style, baseStyles.container]}>
            <Text style={ baseStyles.title} >{this.props.title}</Text>
            <Text style={ styles.value} >
            { typeof this.state.outcome !== 'undefined' ? this.state.outcome : '---' }
            </Text>         
            <Text style={ baseStyles.updateAt}>{this.state.updatedAt}</Text>     
        </View>
      );
    }
}

BuildStatusWidget.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    
    value: {
      fontSize: 35,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FFFFFF"       
    }
});