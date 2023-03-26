
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 10H10V22H22V10ZM22 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H22H22.5H25.5H26H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6H26H25.5H22.5H22ZM26 10V22H38V10H26ZM22 26H10V38H22V26ZM26 38V26H38V38H26Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ScreenTransfer = defineComponent({
    name: 'QScreenTransfer',
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

  ScreenTransfer.install = (app) => {
    app.component(ScreenTransfer.name, ScreenTransfer);
  }

  export default ScreenTransfer;
</script>
