
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.4834 12.8284C32.4834 7.94552 28.5314 4 23.6565 4L23.3967 4.00376C19.6578 4.11225 16.4924 6.55511 15.3177 9.92866L11.4749 6.08579L8.64645 8.91421L39.4056 39.6734L42.234 36.8449L36.7966 31.4075C37.4271 30.5202 37.9878 29.5548 38.472 28.5186C38.7267 27.9737 38.9498 27.415 39.1402 26.8447L35.346 25.5781L35.1961 25.9998C35.0908 26.279 34.9748 26.5542 34.8482 26.8251C34.5674 27.4261 34.2561 27.994 33.9161 28.527L31.5821 26.193C32.1591 25.0201 32.4834 23.7006 32.4834 22.3056V12.8284ZM28.4278 23.0387L18.8295 13.4405V12.8284L18.8343 12.612C18.9458 10.1016 20.987 8.07537 23.5127 8.00208L23.6565 8L23.8717 8.0047C26.4402 8.11699 28.4834 10.2296 28.4834 12.8284V22.3056L28.4786 22.5219C28.4708 22.6967 28.4537 22.8691 28.4278 23.0387ZM25.175 31.0034L14.8295 20.658V22.3056C14.8295 27.1885 18.7815 31.134 23.6565 31.134L23.9162 31.1302C24.344 31.1178 24.7643 31.0748 25.175 31.0034ZM27.6381 33.4666L30.7233 36.5517C29.2676 37.2345 27.6852 37.6881 26 37.8863V44H22V37.8804C16.2339 37.1988 11.2378 33.6524 8.83852 28.5161C8.62092 28.0502 8.42636 27.5743 8.2556 27.0897L8.09282 26.6022L11.9072 25.3978C12.0608 25.8842 12.2463 26.3601 12.4626 26.8232C14.4817 31.1456 18.9791 34 24.0343 34C25.3106 34 26.516 33.8175 27.6381 33.4666Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MicrophoneOff = defineComponent({
    name: 'QMicrophoneOff',
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

  MicrophoneOff.install = (app) => {
    app.component(MicrophoneOff.name, MicrophoneOff);
  }

  export default MicrophoneOff;
</script>
