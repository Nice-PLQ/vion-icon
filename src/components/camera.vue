
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 12H8V36H40V12ZM8 8C5.79086 8 4 9.79086 4 12V36C4 38.2091 5.79086 40 8 40H40C42.2091 40 44 38.2091 44 36V12C44 9.79086 42.2091 8 40 8H8ZM30 27C31.6569 27 33 25.6569 33 24C33 22.3431 31.6569 21 30 21C28.3431 21 27 22.3431 27 24C27 25.6569 28.3431 27 30 27ZM30 31C33.866 31 37 27.866 37 24C37 20.134 33.866 17 30 17C26.134 17 23 20.134 23 24C23 27.866 26.134 31 30 31ZM15.2125 25.5442L16.7824 21.4573L20.8693 19.8874L16.7824 18.3174L15.2125 14.2305L13.6425 18.3174L9.55561 19.8874L13.6425 21.4573L15.2125 25.5442Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Camera = defineComponent({
    name: 'QCamera',
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

  Camera.install = (app) => {
    app.component(Camera.name, Camera);
  }

  export default Camera;
</script>
