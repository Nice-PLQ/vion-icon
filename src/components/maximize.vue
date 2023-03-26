
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 6.79086 6.79086 5 9 5H17V9H9V17H5V9ZM9 43C6.79086 43 5 41.2091 5 39V31H9V39H17V43H9ZM43 9C43 6.79086 41.2091 5 39 5H31V9H39V17H43V9ZM43 39C43 41.2091 41.2091 43 39 43H31V39H39V31H43V39Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Maximize = defineComponent({
    name: 'QMaximize',
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

  Maximize.install = (app) => {
    app.component(Maximize.name, Maximize);
  }

  export default Maximize;
</script>
