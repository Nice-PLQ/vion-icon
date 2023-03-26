
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H14V10H8C5.79086 10 4 11.7909 4 14V38C4 40.2091 5.79086 42 8 42H40C42.2091 42 44 40.2091 44 38V14C44 11.7909 42.2091 10 40 10H35V6H31V10H18V6ZM40 14H8V38H40V14ZM32.188 17.1589L35.0164 19.9874L25.1169 29.8869L22.2885 32.7153L19.4601 29.8869L14.5103 24.9371L17.3387 22.1087L22.2885 27.0584L32.188 17.1589Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Daka = defineComponent({
    name: 'QDaka',
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

  Daka.install = (app) => {
    app.component(Daka.name, Daka);
  }

  export default Daka;
</script>
