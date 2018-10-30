import React from 'react';
import DatePicker from 'react-datepicker';

import BigCalendar from 'react-big-calendar'

import Show from "./show";
import moment from "moment";
import Calendar from 'react-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";

import { tasksRef, timeRef } from './firebase';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';
// CSS Modules, react-datepicker-cssmodules.css


import { withRouter } from 'react-router';

moment.locale('en-GB');const localizer = BigCalendar.momentLocalizer(moment) 

    const events = [
      {
    title: 'All Day Event very long title',
    startDate: new Date(2018, 1, 1),
    endDate: new Date(2018, 1, 2),
  },
]

class Month extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment(),
      name: "",
      Description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
   state = {
        date: new Date(2018, 6, 1)
    }



  handleChange(date) {
    this.setState({
      startDate: date,
      endDate : date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
let carid = tasksRef.push().key;


 const NewTask= {

    id: carid,

    name: this.state.name,

    startDate: this.state.startDate.toString(),
    endDate:  this.state.endDate.toString(),
       description: this.state.Description
    };



    if (NewTask.name.length) {
    tasksRef.child(carid).set(NewTask);
    this.props.history.push('/show');
}

else{


  alert("pls submit fields")

  }

  };

  render() {
    let calendar = <Calendar onChange={this.onChange} value={this.state.date} onClickDay={(value) => alert("day" + value + "clicked")}/>
    return(
<div>
<h2> Event managment system for V-ELMS </h2>

      <div className="contact-me-container" style={{textAlign: 'center'}}>
        <div className="input-boxes">
          <p id="info">New Event</p>
          <form id="form-contact" action onsubmit="return validate()" method="POST" name="form">
            <input type="text" name="name" placeholder="Name"    
                 value={this.state.name}
                      onChange={(e) => this.setState({name: e.target.value})}/><br />
        

        <label> Start Date </label>

  <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        value={this.startDate}
    />


        <label> End  Date </label>

  <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        value={this.endDate}
    />;
            <input type="text" name="message" placeholder="Type your message here" id="project-details"    value={this.state.Description}
                      onChange={(e) => this.setState({Description: e.target.value})} style={{height: '100px'}} /><br />
            <button type="submit" value="Send" onClick={this.onSubmit}>Create</button>
          </form> 
        </div>
        
   </div>
        





  <Show/>


    </div>
    )
  }
}

export default  withRouter(Month);
