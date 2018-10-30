import React from "react";

import JwModal from 'jw-react-modal';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Calendar from "react-calendar";
// could also import the sass if you have a loader at dayz/dayz.scss

import { tasksRef, timeRef } from "./firebase";
const defaultColor = "#000";
moment.locale("en-GB");
const localizer = BigCalendar.momentLocalizer(moment);
const eventsArr = [
  {
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2018, 9, 10),
    end: new Date(2018, 9, 11),
  },
  {
    title: 'Long Event',
    start: new Date(2018, 9, 12),
    end: new Date(2018, 9, 13),
  },

  {
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    title: 'DTS ENDS',
    start: new Date(2018, 9, 10),
    end: new Date(2018, 9, 12),
  },

  {
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  }
];

class Show extends React.Component {
  state = {
    events: [],
    loading: true,
     events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]

  };

Edit(id){


}
 Delete(id){


   
  
    tasksRef.child(id).remove();
        
 }

  componentWillMount() {
    tasksRef.on("value", snap => {
      const tasks = [];
      let events = [];
      snap.forEach(shot => {
        let eventObj = {
          start: shot.val().startDate,
          end: shot.val().endDate,
          title: shot.val().name
        }
        events.push(eventObj);
        events.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ events: events, Loading: false });
    });
  }

  render() {
    const { events, Loading } = this.state;
    const orderedcars = events;

    let List;

    if (Loading) {
      List = <div className="TaskList-empty">Loading...</div>;
    } else {
      List = (
         <div>
         <table>
          <thead>
              <tr>
              <th scope="row">Event Name</th>
                 <th scope="row">Event date</th>
              <th scope="row">Event timeRef</th> <th scope="row">Event description</th>
            
                      
                       <th>Delete</th>
            </tr>
      </thead>
      <tbody>
        {events.map(car => (
               <tr>

                  <td>{car.name}</td>
                   <td>{car.endDate}</td>
                <td>{car.description}</td>

                  <td>{car.startDate}</td>
                  
                  
    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" onClick={()=>this.Delete(car.id)}  ><span class="glyphicon glyphicon-trash"></span></button></p></td>
              </tr>
              ))}
           </tbody>
           </table>
        </div>
       );
    }
    return (
      <div>


        {List}
        <br></br>


   

        <BigCalendar
         alendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
          
        />
      </div>
    );
  }
}

export default Show;
