import React , { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import BaseWidget from './../base';
import baseStyles from './../../styles';

import Svg  from 'react-native-svg';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory-native';
//import { screenUnits }  from './../../utils'; 

import numeral from 'numeral';

export default class ProgressWidget extends BaseWidget {
    constructor(props) {
      super(props);
      this.state = {
        progress: 0,
        updatedAt: undefined,
      };
    }
  
    parseProgress(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent, fill: '#b57b9b' }];
    }

    render() {
      const progress = this.parseProgress(this.state.progress);

      return (
        <View style={ [this.props.style, baseStyles.container]}>
            <Text style={ baseStyles.title} >{this.props.title}</Text>
            <View  >
            
            {this.state.progress !== undefined && (
                <Svg viewBox="0 0 200 200"> 
               <VictoryPie
                innerRadius={30}
                height = {200}
                animate={{ duration: 1000 }}
                data={ progress } 
                labels={() => null}
                colorScale={["white", "gray"]}
                /> 
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 25 , fill: '#fff' }}
                  x={100 } y={100 }
                  text= { this.state.progress}
                /> 
                </Svg>
              ) } 

            </View>         
            <Text style={ baseStyles.updateAt}>{this.state.updatedAt}</Text>          
        </View>
      );
    }
}

ProgressWidget.propTypes = {
    title: PropTypes.string.isRequired,
};
