
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 6H18V10H31V6H35V10H40C42.2091 10 44 11.7909 44 14V38C44 40.2091 42.2091 42 40 42H8C5.79086 42 4 40.2091 4 38V14C4 11.7909 5.79086 10 8 10H14V6ZM8 14H40V38H8V14ZM19 19H26H30L29 23L26 35H22L25 23H19V19Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Calendar = defineComponent({
    name: 'QCalendar',
    props: {
      color: String,
      size: String,
    },
    emits: ['click'],
    setup(props, ctx) {
      const iconStyle = computed(() => ({
        display: 'inline-block',
        fontSize: props.size,
        color: props.color,
        width: '1em',
        height: '1em',
        lineHeight: '1em',
      }));

      const click = (e) => ctx.emit('click', e);

      return { iconStyle, click };
    }
  });

  Calendar.install = (app) => {
    app.component(Calendar.name, Calendar);
  }

  export default Calendar;
</script>
