<template>
  <div class="calendar">
    <template>
      <!-- In fullCalendar '' | "" are important differences -->
      <FullCalendar
        defaultView="timeGridWeek"
        :plugins="calendarPlugins"
        :events="calendarEvents"
        :header="{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }"
        :weekends="calendarWeekends"
        :slotDuration="'00:30:00'"
        :minTime="'09:00:00'"
        :maxTime="'17:00:00'"
        @dateClick="handleDateClick"
      />
    </template>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import calData from '../assets/calData'
import {mapGetters} from 'vuex'

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
    handleDateClick(arg) {
      if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.calendarEvents.push({
          // add new event data
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        });
      }
    }
  }
};
</script>
<style lang='scss'>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import '~@fullcalendar/timegrid/main.css';
</style>