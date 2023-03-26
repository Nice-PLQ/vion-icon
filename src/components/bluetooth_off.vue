
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.3449 40.6127L7.64646 10.9142L10.4749 8.08582L17.1086 14.7195L26.34 8.25003V23.9509L29.7627 27.3736L33.2321 24L28.2043 19.1111L27.1289 18.0654L29.2203 15.9146L30.2957 16.9603L34.0134 20.5753V12.8099C34.0134 11.4306 35.672 10.7299 36.6609 11.6915L42.2772 17.1525C42.9071 17.7651 42.9072 18.7768 42.2772 19.3894L37.5355 24L42.2772 28.6107C42.9072 29.2232 42.9071 30.235 42.2772 30.8475L37.6936 35.3045L40.1734 37.7843L37.3449 40.6127ZM34.0134 31.6243V27.4248L31.8842 29.4951L34.0134 31.6243ZM22.339 19.9499L19.9798 17.5908L22.339 15.937V19.9499ZM26.34 40.5V35.1685L22.339 31.1675V33.248L14.7109 28.437L8.5 28.437V21.118L12.2895 21.118L8.2901 17.1186L6.053 17.1188C5.1923 17.1188 4.5 17.8141 4.5 18.6719V30.8844C4.5 31.7395 5.1953 32.4375 6.053 32.4375L13.555 32.437L26.34 40.5ZM39.124 18.271L37.0134 20.3233V16.2186L39.124 18.271ZM39.124 29.7291L37.0134 27.6768V31.7814L39.124 29.7291Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const BluetoothOff = defineComponent({
    name: 'QBluetoothOff',
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

  BluetoothOff.install = (app) => {
    app.component(BluetoothOff.name, BluetoothOff);
  }

  export default BluetoothOff;
</script>
