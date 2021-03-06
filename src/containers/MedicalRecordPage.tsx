import React from "react";
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import MedicalRecord from "../components/medicalRecord/MedicalRecord";
import { stateTypeObject, Dispatch } from "../reducers/types";
import { setAddDialogState } from '../actions/dialogState';
import { getPatients } from '../actions/patient';
import { getMedicalRecord, addMedicalRecord, createMedicalRecord } from '../actions/medicalRecord';
import { getServices } from '../actions/service';
import { getQueue, addBilling } from '../actions/queue';

class MedicalRecordPage extends React.Component<any, any> {

  componentDidMount() {
    if (!this.props.auth.isEmpty) {
      this.props.getPatients()
      this.props.getQueue()
    }
    if (_.isEmpty(this.props.services)) {
      this.props.getServices()
    }
  }

  public render() {
    return <MedicalRecord
      activeProfile={this.props.activeProfile} 
      auth={this.props.auth}
      drawer={this.props.drawer}
      dialogState={this.props.dialogState}
      medicalRecord={this.props.medicalRecord}
      patients={this.props.patients}
      queue={this.props.queueList}
      services={this.props.services}
      getMedicalRecord={this.props.getMedicalRecord}
      addBilling={this.props.addBilling}
      addRecord={this.props.addMedicalRecord}
      createMedicalRecord={this.props.createMedicalRecord}
      setAddDialogState={this.props.setAddDialogState} />
  }
}

function mapStateToProps(state: stateTypeObject) {
    console.log(state)
    return {
      activeProfile: state.activeProfile,
      auth: state.firebase.auth,
      drawer: state.drawer,
      dialogState: state.dialogState,
      patients: state.patients,
      medicalRecord: state.medicalRecord,
      services: state.services,
      queueList: state.queue
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addBilling,
      addMedicalRecord,
      createMedicalRecord,
      getMedicalRecord,
      getPatients,
      getQueue,
      getServices,
      setAddDialogState
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalRecordPage)
