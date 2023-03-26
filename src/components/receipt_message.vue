
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 34H15.3296L14.3438 34.6309L8 38.6909V34V30V11H40V34H16.5ZM8 7C5.79086 7 4 8.79086 4 11V30V34V42.3455C4 43.926 5.74689 44.882 7.07811 44.03L16.5 38H40C42.2091 38 44 36.2091 44 34V11C44 8.79086 42.2091 7 40 7H8ZM14.821 22.0218L19.4755 26.6763L19.4718 26.68L22.3002 29.5085L33.9869 17.8218L31.1584 14.9934L22.304 23.8479L17.6495 19.1933L14.821 22.0218Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ReceiptMessage = defineComponent({
    name: 'QReceiptMessage',
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

  ReceiptMessage.install = (app) => {
    app.component(ReceiptMessage.name, ReceiptMessage);
  }

  export default ReceiptMessage;
</script>
