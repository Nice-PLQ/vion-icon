
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3227 7.97311C28.9692 4.88227 23.541 4.96636 21.5437 5.12493C19.9755 5.24944 18.9575 6.5982 19.0064 7.99689L19.4565 20.8723L19.4964 22.0141L19.5622 22.0498L10.5206 36.4329C9.52158 38.022 10.0424 40.1229 11.668 41.0615L15.6683 43.371C17.299 44.3125 19.3856 43.706 20.2575 42.0371L28.3665 26.5155L28.9769 26.2219L40.3128 20.7691C41.3635 20.2637 42.1175 19.0665 41.8228 17.7185C41.4242 15.8945 39.8794 11.1813 34.3227 7.97311ZM23.4142 19.5908L23.0461 9.06382C25.1541 9.05079 28.7836 9.39392 32.3227 11.4372C35.7198 13.3985 37.0966 16.039 37.6424 17.6149L28.1655 22.1735L23.4142 19.5908ZM22.9059 24.2465L22.1146 25.5054L23.8074 26.6038L24.5407 25.2001L22.9059 24.2465ZM14.2881 37.9554L19.9855 28.8922L21.9469 30.1649L17.0453 39.5473L14.2881 37.9554Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MakeUpMode = defineComponent({
    name: 'QMakeUpMode',
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

  MakeUpMode.install = (app) => {
    app.component(MakeUpMode.name, MakeUpMode);
  }

  export default MakeUpMode;
</script>
