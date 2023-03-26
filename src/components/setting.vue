
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.895 8.21985L37.7944 15.2798V32.71L23.895 39.77L9.99548 32.71L9.99548 15.2798L23.895 8.21985ZM22.0835 4.65352C23.2219 4.07529 24.568 4.07529 25.7064 4.65352L39.6059 11.7135C40.9486 12.3955 41.7944 13.7738 41.7944 15.2798V32.71C41.7944 34.216 40.9486 35.5943 39.6059 36.2763L25.7064 43.3363C24.568 43.9145 23.2219 43.9145 22.0835 43.3363L8.18404 36.2763C6.84134 35.5943 5.99548 34.216 5.99548 32.71V15.2798C5.99548 13.7738 6.84134 12.3955 8.18404 11.7135L22.0835 4.65352ZM19.1432 29.6625L30.6113 21.6324L28.317 18.3558L16.8489 26.3859L19.1432 29.6625Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Setting = defineComponent({
    name: 'QSetting',
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

  Setting.install = (app) => {
    app.component(Setting.name, Setting);
  }

  export default Setting;
</script>
