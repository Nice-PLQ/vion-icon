
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.64644 10.9142L38.3449 40.6127L41.1734 37.7843L34.2437 30.8547C35.2874 29.069 35.86 26.9586 35.86 24.753C35.86 21.8399 34.8611 19.0927 33.0971 17.0406L30.4429 19.3222L30.6404 19.5622C31.7321 20.949 32.36 22.7852 32.36 24.753C32.36 26.0005 32.1077 27.1951 31.6448 28.2558L26.34 22.9509V8.25003L17.6965 14.3074L11.4749 8.08582L8.64644 10.9142ZM20.5677 17.1787L22.339 18.9499V15.937L20.5677 17.1787ZM26.34 40.5V34.1685L22.339 30.1675V33.248L14.7109 28.437L8.5 28.437V21.118L13.2895 21.1179L9.29 17.1185L6.053 17.1188C5.1923 17.1188 4.5 17.8141 4.5 18.6719V30.8844C4.5 31.7395 5.1953 32.4375 6.053 32.4375L13.555 32.437L26.34 40.5Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const VolumeOff = defineComponent({
    name: 'VolumeOff',
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

  VolumeOff.install = (app) => {
    app.component(VolumeOff.name, VolumeOff);
  }

  export default VolumeOff;
</script>
