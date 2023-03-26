
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7222 35.6955C38.3153 37.7555 36.7827 38.4352 35.6118 38.2977C32.2551 37.9038 26.4785 36.111 19.4783 29.1108C12.4781 22.1105 10.6853 16.334 10.2913 12.9773C10.1539 11.8063 10.8335 10.2738 12.8935 8.86686C14.1837 10.7359 15.5751 12.606 17.0622 14.4645L16.048 17.6796C15.6532 18.9313 15.6743 20.4685 16.4639 21.8741C17.0967 23.0007 18.4471 25.0548 20.9906 27.5982C23.5393 30.147 25.6309 31.5321 26.7563 32.1776C28.1636 32.9849 29.7224 33.025 31.007 32.6198L34.2228 31.6054C36.049 33.063 37.8861 34.428 39.7222 35.6955ZM35.1455 42.2705C38.6256 42.6789 41.5396 40.3723 43.3874 37.3953L43.6074 37.0408C44.4785 35.6374 44.0483 33.7979 42.6803 32.8723C40.5713 31.4454 38.4528 29.8788 36.3457 28.1805C35.5503 27.5394 34.4888 27.3273 33.5145 27.6346L29.8037 28.8051C29.4503 28.9166 29.0682 28.8924 28.7467 28.708C27.9097 28.2279 26.1036 27.0544 23.819 24.7698C21.5397 22.4905 20.4093 20.7303 19.9513 19.9151C19.7742 19.5999 19.754 19.2277 19.8628 18.8829L21.0333 15.1721C21.3409 14.1966 21.1279 13.1337 20.485 12.3381C18.7572 10.1997 17.1651 8.04933 15.7167 5.90872C14.7911 4.54071 12.9517 4.1106 11.5483 4.98165L11.1938 5.20166C8.21673 7.04948 5.91018 9.9635 6.31859 13.4435C6.82614 17.7683 9.06844 24.3577 16.6499 31.9392C24.2313 39.5206 30.8208 41.7629 35.1455 42.2705Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Telephone = defineComponent({
    name: 'QTelephone',
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

  Telephone.install = (app) => {
    app.component(Telephone.name, Telephone);
  }

  export default Telephone;
</script>
