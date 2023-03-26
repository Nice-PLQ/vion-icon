
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9038 28.4231L17.8913 28.4142L17.8788 28.4054L10.6412 23.3297L10.6375 23.3272L5.41207 19.6539L23.9623 6.64446C24.0516 6.58185 24.1706 6.58212 24.2595 6.64513L42.64 19.6604L24.2723 32.749C24.1827 32.8129 24.0625 32.8129 23.9728 32.749L17.9038 28.4231ZM0.931731 21.3938L8.34085 26.6021L9.3734 27.3262V28.1316V29.6479V35.0694L13.8385 31.9945L14.233 31.7228L14.9443 31.233L15.5821 31.6803L21.6511 36.0062C23.13 37.0604 25.1146 37.0605 26.5936 36.0066L47.1063 21.3894C48.0639 20.707 48.287 19.3776 47.6047 18.42C47.4662 18.2257 47.2959 18.056 47.1012 17.918L26.5711 3.38067C25.1025 2.34079 23.1388 2.33633 21.6656 3.36954L0.933653 17.909C-0.02902 18.5842 -0.262119 19.9119 0.413013 20.8745C0.554552 21.0763 0.730066 21.2521 0.931731 21.3938ZM37.8376 36.673V31.4527L24.2896 41.055L24.2242 41.09C24.133 41.125 24.0284 41.1134 23.9461 41.055L18.3955 37.1207L14.8373 34.6387L11.1371 37.2489L15.9332 40.5946L21.4838 44.5289L21.6837 44.6628C23.2366 45.6453 25.2393 45.6008 26.7514 44.5292L37.8376 36.673ZM20.6173 27.4553L31.9465 19.8049L20.6173 12.1545V27.4553Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const TencentClassroom = defineComponent({
    name: 'QTencentClassroom',
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

  TencentClassroom.install = (app) => {
    app.component(TencentClassroom.name, TencentClassroom);
  }

  export default TencentClassroom;
</script>
