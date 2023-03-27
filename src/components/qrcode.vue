
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 26V41H7V26H22ZM36 31H41V26H36V31H31V26H26V31H31V36H26V41H31V36H36V41H41V36H36V31ZM11 11V18H18V11H11ZM7 7V22H22V7H7ZM11 30V37H18V30H11ZM37 11V18H30V11H37ZM26 7H41V22H26V7Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Qrcode = defineComponent({
    name: 'Qrcode',
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

  Qrcode.install = (app) => {
    app.component(Qrcode.name, Qrcode);
  }

  export default Qrcode;
</script>
