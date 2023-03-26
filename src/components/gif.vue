
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12H40V36H8V12ZM4 12C4 9.79086 5.79086 8 8 8H40C42.2091 8 44 9.79086 44 12V36C44 38.2091 42.2091 40 40 40H8C5.79086 40 4 38.2091 4 36V12ZM11.1429 21C11.1429 19.3431 12.486 18 14.1429 18H14.2857H20.5714V21H14.2857V27H17.4286V24.75H20.5714V27V30H17.4286H14.2857H14.1429C12.486 30 11.1429 28.6569 11.1429 27V21ZM23.1429 18H26.5714V30H23.1429V18ZM32.2286 18H29.1429V21V23.25V26.25V30H32.2286V26.25H36.8571V23.25H32.2286V21H36.8571V18H32.2286Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Gif = defineComponent({
    name: 'QGif',
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

  Gif.install = (app) => {
    app.component(Gif.name, Gif);
  }

  export default Gif;
</script>
