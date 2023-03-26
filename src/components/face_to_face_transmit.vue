
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1025 30.0241L20.6533 27.1412L18.0686 25.7508L11.0113 21.9543L40.3854 11.7385L33.4759 37.1266L25.5968 31.1777L23.5256 29.6138L21.2535 30.8681L19.7865 31.6779L20.1025 30.0241ZM16.1735 29.2734L5.8833 23.7377L1.10199 21.1655L6.22998 19.3821L41.6585 7.06072L41.7823 7.01766L43.1474 6.54292L44.4916 6.07543C45.2319 5.81796 45.9578 6.49546 45.752 7.25178L45.3783 8.625L44.9987 10.0195L44.9643 10.146L36.9148 39.723L35.7832 43.8807L32.3444 41.2843L23.1866 34.37L18.8106 36.7855L18.4899 36.9626L16.6741 37.9649L15.8019 38.4464C15.1881 38.7852 14.4575 38.2552 14.589 37.5666L14.776 36.588L15.1652 34.5507L15.234 34.1909L16.1735 29.2734ZM36.2699 15.5443L32.6189 18.45L29.6437 20.8177L29.8448 20.899L30.8905 21.3218L33.1688 22.243L33.8842 22.5323L30.0169 24.5393L29.3523 24.8843L28.6095 25.2698L20.7256 29.3614L23.9963 25.8119L26.3847 23.2197L26.3185 23.1923L25.8231 22.9863L23.13 21.8668L21.9823 21.3896L25.33 20.02L26.3286 19.6115L28.1053 18.8846L36.2699 15.5443Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const FaceToFaceTransmit = defineComponent({
    name: 'QFaceToFaceTransmit',
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

  FaceToFaceTransmit.install = (app) => {
    app.component(FaceToFaceTransmit.name, FaceToFaceTransmit);
  }

  export default FaceToFaceTransmit;
</script>
