
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1924 5.58582C4.55347 12.2247 4.55347 22.9885 11.1924 29.6274L14.0208 26.799C8.94399 21.7222 8.94399 13.4911 14.0208 8.41424L11.1924 5.58582ZM32.364 10.5858C35.8787 14.1005 35.8787 19.799 32.364 23.3137L29.5355 20.4853C31.4882 18.5327 31.4882 15.3669 29.5355 13.4142L32.364 10.5858ZM24 20C25.6569 20 27 18.6569 27 17C27 15.3432 25.6569 14 24 14C22.3431 14 21 15.3432 21 17C21 18.6569 22.3431 20 24 20ZM21.6591 24.2302L21.6724 24.2087L22.1124 23.4961L23.159 21.8012C23.5499 21.1681 24.4707 21.1685 24.8611 21.8019L25.9063 23.4976L26.3457 24.2106L26.359 24.2322L34.8449 38L34.8851 38.0652L35.5193 39.0942L36.3706 40.4753C36.7812 41.1416 36.3019 42 35.5193 42H33.8969H32.6881H32.6116H15.3877H15.3105H14.0988H12.4793C11.6963 42 11.2171 41.1409 11.6284 40.4746L12.4793 39.0967L13.1159 38.0657L13.1565 38L21.6591 24.2302ZM17.8576 38L24.0075 28.0404L30.1462 38H17.8576ZM37.0208 29.6274C43.6597 22.9885 43.6597 12.2247 37.0208 5.58582L34.1924 8.41424C39.2692 13.4911 39.2692 21.7222 34.1924 26.799L37.0208 29.6274ZM15.5355 23.3137C12.0208 19.799 12.0208 14.1005 15.5355 10.5858L18.364 13.4142C16.4113 15.3669 16.4113 18.5327 18.364 20.4853L15.5355 23.3137Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const FreeCellularData = defineComponent({
    name: 'QFreeCellularData',
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

  FreeCellularData.install = (app) => {
    app.component(FreeCellularData.name, FreeCellularData);
  }

  export default FreeCellularData;
</script>
