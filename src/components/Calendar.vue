<template>
  <div class="calendar">
      <!-- In fullCalendar '' | "" are important differences -->
      <FullCalendar
        defaultView="timeGridWeek"
        :plugins="calendarPlugins"
        :events="events"
        :selectable=true
        :header="{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }"
        :weekends="calendarWeekends"
        :slotDuration="'00:30:00'"
        :minTime="'09:00:00'"
        :maxTime="'17:00:00'"
        @select="handleSelect"
        @eventClick="handleClick"
        
      />
      <modals-container />
  </div>
</template>

<script>
// @dateClick="handleDateClick"
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import calData from '../assets/calData'
import {mapGetters} from 'vuex'

//use modal
import EventModal from './EventModal'

//format date
// import moment from '@fullcalendar/moment'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
    
  },
  data: () => {
    return {
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: false,
      calendarEvents: [
        // initial event data
        { title: "Event- ", start: new Date() }
      ]
    };
  },
  computed: {
    ...mapGetters(["events"])
  },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends; // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
      calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    },
    handleSelect(click) {
      // console.log("click ", click)
      this.$store.commit("ADD_EVENT", {
        id: (new Date()).getTime(),
        title: "Event- ",
        start: click.start,
        end: click.end,
        allDay: click.allDay

      })
    },
    handleClick (arg) {
      this.$modal.show(EventModal, {
        text: "FromComponent- ",
        event: arg.event
      })
    },
    // handleDateClick(arg) {
    //   if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    //     this.calendarEvents.push({
    //       // add new event data
    //       title: "New Event",
    //       start: arg.date,
    //       allDay: arg.allDay
    //     });
    //   }
    // }
  }
};
</script>
<style lang='scss'>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import '~@fullcalendar/timegrid/main.css';
</style>