
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.5 11C34.8807 11 36 9.88071 36 8.5C36 7.11929 34.8807 6 33.5 6C32.1193 6 31 7.11929 31 8.5C31 9.88071 32.1193 11 33.5 11ZM33.5 15C37.0899 15 40 12.0899 40 8.5C40 4.91015 37.0899 2 33.5 2C29.9101 2 27 4.91015 27 8.5C27 12.0899 29.9101 15 33.5 15ZM11.6728 7.49616L14.3272 4.50384L28.7711 17.3168C29.7832 18.2146 29.6305 19.8372 28.4688 20.5304L21.354 24.776L42.5946 44.0309L40 47.0752L16.5341 26.015C15.5309 25.1146 15.6875 23.4999 16.845 22.8091L24.072 18.496L11.6728 7.49616ZM18.1521 33.4639L6.06255 22.6861L3.35965 25.6348L15.4492 36.4125L18.1521 33.4639Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Sport = defineComponent({
    name: 'QSport',
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

  Sport.install = (app) => {
    app.component(Sport.name, Sport);
  }

  export default Sport;
</script>
