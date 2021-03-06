import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Queue from '../components/queue/Queue';
import { stateTypeObject, Dispatch } from '../reducers/types';
import { getPatients } from '../actions/patient';
import { getQueue, addQueue, getBilling, getBillingList, addBilling, editBilling, editQueue } from '../actions/queue';
import { setAddDialogState, setEditDialogState } from '../actions/dialogState';
import { getMedicalRecord } from '../actions/medicalRecord';
import { setActiveProfile, setActiveQueue } from '../actions/activeProfile';
import { getUserInfo } from '../actions/userInfo';

class QueuePage extends React.Component<any, any> {
  
  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getUserInfo()
      this.props.getQueue()
      this.props.getPatients()
      this.props.getBillingList()
    }
  }

  public render() {
    const { auth } = this.props

    if (!auth.uid) {
      return <Redirect to="/login" />
    }
    return <Queue
      activeProfile={this.props.activeProfile}
      addBilling={this.props.addBilling}
      billing={this.props.billing} 
      drawer={this.props.drawer}
      dialogState={this.props.dialogState}
      editBilling={this.props.editBilling}
      editQueue={this.props.editQueue}
      queueList={this.props.queueList}
      patients={this.props.patients}
      services={this.props.services}
      setAddDialogState={this.props.setAddDialogState}
      setEditDialogState={this.props.setEditDialogState}
      addQueue={this.props.addQueue}
      getMedicalRecord={this.props.getMedicalRecord}
      setActiveQueue={this.props.setActiveProfile}
      setActiveBilling={this.props.setActiveQueue}/>
  }
}

function mapStateToProps(state: stateTypeObject) {
  console.log(state)
  return {
    auth: state.firebase.auth,
    activeProfile: state.activeProfile,
    billing: state.billing,
    drawer: state.drawer,
    dialogState: state.dialogState,
    queueList: state.queue,
    patients: state.patients,
    services: state.services
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      getPatients,
      getQueue,
      addQueue,
      editQueue,
      setActiveProfile,
      setAddDialogState,
      setEditDialogState,
      getMedicalRecord,
      addBilling,
      editBilling,
      getBilling,
      getBillingList,
      setActiveQueue,
      getUserInfo
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(QueuePage);