
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 34.4435L34.0229 39.2013L32.5952 28.1987L40.2174 20.1366L29.3121 18.0944L24 8.35392L18.6878 18.0944L7.78254 20.1366L15.4047 28.1987L13.9771 39.2013L24 34.4435ZM11.1937 29.567L9.53841 42.3234C9.33469 43.8933 10.9493 45.0664 12.3794 44.3875L24 38.8713L35.6205 44.3875C37.0507 45.0664 38.6653 43.8933 38.4616 42.3234L36.8063 29.567L45.6435 20.2198C46.7311 19.0694 46.1144 17.1713 44.5583 16.8799L31.9147 14.5122L25.7558 3.21917C24.9978 1.82929 23.0021 1.82929 22.2441 3.21917L16.0852 14.5122L3.44169 16.8799C1.8856 17.1713 1.26889 19.0694 2.35651 20.2198L11.1937 29.567Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Star = defineComponent({
    name: 'QStar',
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

  Star.install = (app) => {
    app.component(Star.name, Star);
  }

  export default Star;
</script>
