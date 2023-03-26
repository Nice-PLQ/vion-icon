
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5204 23.9862L21.6646 26.3549L24.0333 32.4991L26.3821 26.3626L32.5186 24.0138L26.3744 21.6451L24.0057 15.5009L21.6569 21.6374L15.5204 23.9862Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 24C2 14.0589 10.0589 6 20 6H28C37.9411 6 46 14.0589 46 24C46 33.9411 37.9411 42 28 42H20C10.0589 42 2 33.9411 2 24ZM20 10H28C35.732 10 42 16.268 42 24C42 31.732 35.732 38 28 38H20C12.268 38 6 31.732 6 24C6 16.268 12.268 10 20 10Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MimiShow = defineComponent({
    name: 'QMimiShow',
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

  MimiShow.install = (app) => {
    app.component(MimiShow.name, MimiShow);
  }

  export default MimiShow;
</script>
