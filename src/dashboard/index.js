import React , { Component } from "react";
import { StyleSheet, View  } from 'react-native';

import { NumberWidget , BuildStatusWidget , SparklineWidget , PingWidget , ProgressWidget } from './../components';

export default class Dashboard extends Component {
  render() {

    return (
      <View style={styles.container}  >
        <View style={styles.topBlock}>
          <SparklineWidget name="DemoUsers" title="Users" format="0.00a"  style={[styles.cellUsers , styles.base]} socket={this.props.socket}/>
          <PingWidget name="GooglePing" title="API" style={[styles.cellApi, styles.base]} socket={this.props.socket}/>
          <NumberWidget style={[styles.cellPullRequest, styles.base]} name="ReasonPRs" title="Pull Requests" socket={this.props.socket}/>
        </View>
        <View style={styles.middleBlock}  >
          <BuildStatusWidget style={[styles.cellBuildMaster, styles.base]}  name="DemoMaster" title="Build - Master" socket={this.props.socket} />
          <ProgressWidget name="DemoProgress" title="Sales Target" style={[styles.cellSaleTarget, styles.base]} socket={this.props.socket}/>
        </View>
        <View style={styles.bottomBlock}>
          <NumberWidget style={[styles.cellConversion, styles.base]} name="DemoConversion" title="Conversion" metric="%" format="0.0a" socket={this.props.socket}/>
          <BuildStatusWidget style={[styles.cellBuildDeveloper, styles.base]} name="DemoDevelop" title="Build - Develop" socket={this.props.socket}/>       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex : 1,
    paddingTop: 35,
    paddingBottom : 20
  }, 

  subcontainer : {
    flexDirection: "row",
    flex : 1,
    paddingTop: 35,
    paddingBottom : 20,
    justifyContent : 'flex-start',
    alignItems : 'flex-start'
  },

  base: { borderWidth: 3, alignItems : "center", },
  topBlock: { flexDirection: "row", flex: 3 },
  middleBlock: { flexDirection: "row", flex: 3 },
  bottomBlock: { flexDirection: "row", flex: 3 },

  cellUsers: { flex: 1, backgroundColor: "#CB4335" },
  cellApi: { flex: 1 , backgroundColor: "#F5B041" },
  cellPullRequest: { flex: 1, backgroundColor: "#154360" },
  cellBuildMaster: { flex: 2 , backgroundColor: "#28B463" },
  cellSaleTarget: { flex: 1 , backgroundColor: "#CB4335"} ,
  cellConversion: { flex: 1,  backgroundColor: "#154360"},
  cellBuildDeveloper: { flex: 2 , backgroundColor: "#28B463"},

});

