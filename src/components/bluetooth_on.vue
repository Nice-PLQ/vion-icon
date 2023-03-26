
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.34 8.25V40.5L13.555 32.437L6.053 32.4375C5.1953 32.4375 4.5 31.7395 4.5 30.8844V18.6719C4.5 17.8141 5.1923 17.1187 6.053 17.1187L13.686 17.118L26.34 8.25ZM22.339 33.248V15.937L14.9483 21.1179L8.5 21.118V28.437L14.7109 28.4369L22.339 33.248ZM34.0134 12.8099C34.0134 11.4306 35.672 10.7299 36.6609 11.6914L42.2772 17.1525C42.9071 17.765 42.9072 18.7768 42.2772 19.3894L37.5355 24L42.2772 28.6106C42.9072 29.2232 42.9071 30.235 42.2772 30.8475L36.6609 36.3086C35.672 37.2701 34.0134 36.5694 34.0134 35.1901V27.4248L30.2957 31.0397L29.2203 32.0854L27.1289 29.9346L28.2043 28.8889L33.2321 24L28.2043 19.1111L27.1289 18.0654L29.2203 15.9146L30.2957 16.9603L34.0134 20.5752V12.8099ZM37.0134 20.3232L39.124 18.2709L37.0134 16.2186V20.3232ZM37.0134 27.6768L39.124 29.7291L37.0134 31.7814V27.6768Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const BluetoothOn = defineComponent({
    name: 'QBluetoothOn',
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

  BluetoothOn.install = (app) => {
    app.component(BluetoothOn.name, BluetoothOn);
  }

  export default BluetoothOn;
</script>
