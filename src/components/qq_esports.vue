
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9995 6.21371L25.9995 6.21112L25.9995 6.20779L25.9995 6.20575L25.9995 6.20516L26 2.10467L26 2.10061L22 2.09604C21.9956 4.13414 21.9975 5.17374 21.9995 6.21124L21.9995 6.21323V6.21368L21.9993 7.46604L16.4782 9.70527L14.8605 5.58731L11.1375 7.04992L13.4946 13.0499L14.234 14.932L16.1078 14.172L23.999 10.9715L31.8901 14.172L33.764 14.932L34.5033 13.0499L36.8605 7.04992L33.1375 5.58731L31.5197 9.70527L26.0014 7.46716C26.001 7.01114 26.0002 6.61213 25.9995 6.21371ZM23.999 17.5906L12.6456 21.8481L15.5894 35.3278L23.999 41.635L32.4085 35.3278L35.3523 21.8481L23.999 17.5906ZM11.2411 18.1028C9.37994 18.8008 8.31364 20.7595 8.73774 22.7015L11.6815 36.1813C11.8863 37.119 12.4215 37.9519 13.1894 38.5278L22.799 45.735C23.5101 46.2684 24.4879 46.2684 25.199 45.735L34.8085 38.5278C35.5765 37.9519 36.1116 37.119 36.3164 36.1813L39.2602 22.7015C39.6843 20.7595 38.618 18.8008 36.7568 18.1028L25.4035 13.8453C24.4979 13.5057 23.5 13.5057 22.5945 13.8453L11.2411 18.1028ZM41.6247 21.8777L38.4652 35.8549L42.3667 36.7368L45.5262 22.7596L41.6247 21.8777ZM9.52622 35.8549L6.36671 21.8777L2.46515 22.7596L5.62466 36.7368L9.52622 35.8549Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const QqEsports = defineComponent({
    name: 'QQqEsports',
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

  QqEsports.install = (app) => {
    app.component(QqEsports.name, QqEsports);
  }

  export default QqEsports;
</script>
