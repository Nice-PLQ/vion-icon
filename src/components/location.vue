
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.7191 28.2254L33.6694 28.2803L33.6217 28.337C31.0956 31.3409 27.9853 34.8177 25.4887 37.562C24.9823 38.1186 24.5024 38.6438 24.0592 39.1272C23.436 38.4569 22.7431 37.7089 22.0108 36.9139C19.2783 33.9472 16.0499 30.3831 13.839 27.7567L13.7876 27.6558L13.5705 27.3702C11.9518 25.2408 11 22.6101 11 19.7547C11 12.7651 16.7653 7 24 7C31.2347 7 37 12.7651 37 19.7547C37 23.0017 35.768 25.9644 33.7191 28.2254ZM24.0769 45C24.0769 45 25.1661 43.8366 26.7997 42.057C29.4392 39.1814 33.4998 34.6968 36.6831 30.9114C39.368 27.9488 41 24.0396 41 19.7547C41 10.5013 33.3888 3 24 3C14.6112 3 7 10.5013 7 19.7547C7 23.519 8.25962 26.9935 10.3861 29.7909C10.4493 29.9148 10.5345 30.0415 10.6428 30.1707C13.5905 33.687 18.3457 38.859 21.3368 42.0735C22.9698 43.8285 24.0769 45 24.0769 45ZM27 20C27 21.6569 25.6569 23 24 23C22.3431 23 21 21.6569 21 20C21 18.3431 22.3431 17 24 17C25.6569 17 27 18.3431 27 20ZM31 20C31 23.866 27.866 27 24 27C20.134 27 17 23.866 17 20C17 16.134 20.134 13 24 13C27.866 13 31 16.134 31 20Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Location = defineComponent({
    name: 'QLocation',
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

  Location.install = (app) => {
    app.component(Location.name, Location);
  }

  export default Location;
</script>
