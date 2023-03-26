
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.7115 12H40V36H8V12H16.2885V19.2885C16.2885 23.5474 19.741 27 24 27C28.259 27 31.7115 23.5474 31.7115 19.2885V12ZM27.7115 8H31.7115H40C42.2091 8 44 9.79086 44 12V36C44 38.2091 42.2091 40 40 40H8C5.79086 40 4 38.2091 4 36V12C4 9.79086 5.79086 8 8 8H16.2885H20.2885H27.7115ZM20.2885 12H27.7115V19.2885C27.7115 21.3383 26.0498 23 24 23C21.9502 23 20.2885 21.3383 20.2885 19.2885V12Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Wallet = defineComponent({
    name: 'QWallet',
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

  Wallet.install = (app) => {
    app.component(Wallet.name, Wallet);
  }

  export default Wallet;
</script>
