
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"  d="M7.5 0.5L7.5 6" stroke="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd"  d="M9.79053 1.95442C11.0735 2.48435 12.1331 3.44274 12.7887 4.66631C13.4443 5.88987 13.6553 7.3029 13.3859 8.66463C13.1164 10.0264 12.3832 11.2525 11.311 12.1342C10.2389 13.0159 8.89416 13.4986 7.50603 13.5C6.11789 13.5014 4.77222 13.0214 3.6983 12.1419C2.62438 11.2623 1.88865 10.0376 1.61647 8.67645C1.34429 7.31527 1.5525 5.90181 2.20563 4.67694C2.85877 3.45206 3.9164 2.49153 5.19833 1.95903" stroke="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Esc = defineComponent({
    name: 'QEsc',
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

  Esc.install = (app) => {
    app.component(Esc.name, Esc);
  }

  export default Esc;
</script>
