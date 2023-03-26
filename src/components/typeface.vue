
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3175 39.4284L32.0131 30.2863H15.9864L11.682 39.4284H7.71387L22.2662 8.57129H25.7395L40.2853 39.4284H36.3175ZM23.9997 13.2668L30.1297 26.2863H17.8697L23.9997 13.2668Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Typeface = defineComponent({
    name: 'QTypeface',
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

  Typeface.install = (app) => {
    app.component(Typeface.name, Typeface);
  }

  export default Typeface;
</script>
