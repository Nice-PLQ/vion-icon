
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8H36V40H12V8ZM8 8C8 5.79086 9.79086 4 12 4H36C38.2091 4 40 5.79086 40 8V40C40 42.2091 38.2091 44 36 44H12C9.79086 44 8 42.2091 8 40V8ZM23.9173 18.4646C27.0066 18.4646 29.9691 17.9019 32.7048 16.8717L31.2952 13.1283C29.0032 13.9914 26.5178 14.4646 23.9173 14.4646C21.3736 14.4646 18.9403 14.0119 16.6903 13.1845L15.3097 16.9387C17.9953 17.9263 20.8956 18.4646 23.9173 18.4646Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Luckymoney = defineComponent({
    name: 'QLuckymoney',
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

  Luckymoney.install = (app) => {
    app.component(Luckymoney.name, Luckymoney);
  }

  export default Luckymoney;
</script>
