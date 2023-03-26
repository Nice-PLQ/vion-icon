
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 35C17 32.7909 15.2091 31 13 31H4.99999V35H13V43H17V35ZM31.2679 34.9647H31.268V42.9647L35.268 42.9647L35.268 34.9647H43.2679V30.9647H35.268V30.9647C34.7049 30.9647 34.169 31.0811 33.683 31.291C32.2622 31.9048 31.2679 33.3187 31.2679 34.9647ZM35 17C32.7909 17 31 15.2091 31 13V5H35V13H43V17H35ZM17 13C17 15.2091 15.2091 17 13 17H4.99999V13H13V5H17V13Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Minimize = defineComponent({
    name: 'QMinimize',
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

  Minimize.install = (app) => {
    app.component(Minimize.name, Minimize);
  }

  export default Minimize;
</script>
