
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 37.8976L14 11.0628L36.2532 24.4076L14 37.8976ZM10 11.0628C10 7.95403 13.3911 6.03351 16.0572 7.63232L38.3104 20.9771C40.8936 22.5262 40.9026 26.2667 38.3268 27.8282L16.0736 41.3181C13.4078 42.9341 10 41.0149 10 37.8976L10 11.0628Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Play = defineComponent({
    name: 'Play',
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

  Play.install = (app) => {
    app.component(Play.name, Play);
  }

  export default Play;
</script>
