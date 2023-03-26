
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.4142 10.4142L20.4142 34.4142C19.6331 35.1953 18.3668 35.1953 17.5857 34.4142L5.58569 22.4142L8.41412 19.5858L18.9999 30.1716L41.5857 7.58582L44.4142 10.4142Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Check = defineComponent({
    name: 'QCheck',
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

  Check.install = (app) => {
    app.component(Check.name, Check);
  }

  export default Check;
</script>
