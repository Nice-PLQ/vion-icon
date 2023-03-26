
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.748 15.9684L23.8964 18H26.2301H40V36H8V12H20.5047L22.748 15.9684ZM26.2301 14L22.8384 8H8C5.79086 8 4 9.79086 4 12V36C4 38.2091 5.79086 40 8 40H40C42.2091 40 44 38.2091 44 36V18C44 15.7909 42.2091 14 40 14H26.2301ZM20.6569 18L15 23.6569L17.1213 25.7782L17.1547 25.7448L17.1642 25.8076H32.7071V22.8076H20.0919L22.7782 20.1213L20.6569 18ZM32.9706 29.9289L30.9031 27.8614L30.9071 27.8076H30.8492H14.9071V30.8076H27.8492L25.8995 32.7574L28.0208 34.8787L32.9706 29.9289Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const TransmissionFile = defineComponent({
    name: 'QTransmissionFile',
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

  TransmissionFile.install = (app) => {
    app.component(TransmissionFile.name, TransmissionFile);
  }

  export default TransmissionFile;
</script>
