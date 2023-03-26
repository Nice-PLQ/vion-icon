
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4722 18.0002L35.5008 8.02734L28.5293 18.0002H33.4277V38.5714H37.4277V18.0002H42.4722ZM11.7139 28.9092H7.71387V38.5715H11.7139V28.9092ZM20.5713 22.8701H24.5713V38.5714H20.5713V22.8701Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Rank = defineComponent({
    name: 'QRank',
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

  Rank.install = (app) => {
    app.component(Rank.name, Rank);
  }

  export default Rank;
</script>
