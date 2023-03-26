
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8964 18L20.5047 12H8V36H40V18H23.8964ZM22.8384 8L26.2301 14H40C42.2091 14 44 15.7909 44 18V36C44 38.2091 42.2091 40 40 40H8C5.79086 40 4 38.2091 4 36V12C4 9.79086 5.79086 8 8 8H22.8384Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Floder = defineComponent({
    name: 'QFloder',
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

  Floder.install = (app) => {
    app.component(Floder.name, Floder);
  }

  export default Floder;
</script>
