import React , { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import BaseWidget from './../base';
import baseStyles from './../../styles';

import Sparkline from 'react-native-sparkline';
import numeral from 'numeral';

export default class SparklineWidget extends BaseWidget {
    constructor(props) {
      super(props);
      this.state = {
        value: undefined,
        updatedAt: undefined,
        //value: [ 11.00,23.00,24.00,14.00,12.00,13.00],
        //updatedAt: '8/11.2017 5:32:06',
      };
    }
  
    render() {
      const latestValue = this.state.value ? this.state.value.slice(-1).pop() : 0;
      const value = this.props.format
        ? numeral(this.state.value).format(this.props.format)
        : this.state.value;
  
     return (
        <View style={ [this.props.style, baseStyles.container]}>
            <Text style={ baseStyles.title} >{this.props.title}</Text>
            
            <Text style={ baseStyles.value } >
                { this.props.format ? numeral(latestValue).format(this.props.format) : lastValue }
                { typeof this.state.value !== 'undefined' ? this.props.metric : null }
            </Text>
            <Text style={ baseStyles.updateAt}>{this.state.updatedAt}</Text> 
            <View style={ styles.chart } >
               { typeof this.state.value !== 'undefined' && (
                  <Sparkline data={this.state.value}>
                    <Sparkline.Line color="white" />
                    <Sparkline.Fill />
                  </Sparkline>
                ) }
            </View>         
        </View>
      );

    }
}

SparklineWidget.propTypes = {
    format: PropTypes.string,
    metric: PropTypes.string,
    title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    
    value: {
      fontSize:30,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FFFFFF" 
    
    },

    chart: {
      //borderWidth : 10,

      position : 'absolute',
      width :  '90%',
      height : '50%',
      justifyContent : 'center',
      alignItems: 'center',
      bottom : 0,
      backgroundColor : 'transparent'
    },
    
  });

/* 7/18 01:20AM 

        <View style={ [this.props.style, baseStyles.container]}>
            <Text style={ baseStyles.title} >{this.props.title}</Text>
            
            <Text style={ styles.value } >
              {this.props.format ? numeral(latestValue).format(this.props.format) : latestValue}
              { this.props.metric }
            </Text>
            <View>
              <View style={ styles.chart } >
              { typeof this.state.value !== 'undefined' && (
                <Sparkline data={this.state.value}>
                  <Sparkline.Line color="white" />
                  
                </Sparkline>
                ) }
              </View> 
              <View >
                <Text style={ baseStyles.updateAt}>{this.state.updatedAt}</Text> 
              </View>
            </View>        
        </View>
*/