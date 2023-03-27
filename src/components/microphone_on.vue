
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.8296 22V13C28.8296 10.2386 26.591 8 23.8296 8C21.0681 8 18.8296 10.2386 18.8296 13V22C18.8296 24.7614 21.0681 27 23.8296 27C26.591 27 28.8296 24.7614 28.8296 22ZM23.8296 4C18.859 4 14.8296 8.02944 14.8296 13V22C14.8296 26.9706 18.859 31 23.8296 31C28.8001 31 32.8296 26.9706 32.8296 22V13C32.8296 8.02944 28.8001 4 23.8296 4ZM11.9072 25.3978C12.0614 25.8863 12.2473 26.3622 12.4626 26.8232C14.4259 31.0261 18.8466 34 24.0343 34C29.1008 34 32.8305 31.1427 34.8482 26.8251C35.0374 26.4204 35.2038 26.0042 35.346 25.5781L39.1402 26.8447C38.9489 27.4176 38.7255 27.9763 38.472 28.5186C36.1536 33.4795 31.8481 37.2033 26 37.8871V44H22V37.8811C16.1415 37.1913 11.1947 33.5601 8.83853 28.5161C8.54995 27.8983 8.30031 27.2593 8.09282 26.6022L11.9072 25.3978Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MicrophoneOn = defineComponent({
    name: 'MicrophoneOn',
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

  MicrophoneOn.install = (app) => {
    app.component(MicrophoneOn.name, MicrophoneOn);
  }

  export default MicrophoneOn;
</script>
