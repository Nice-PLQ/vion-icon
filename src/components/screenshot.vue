
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6H14H18V10H14H10V14V18H6V14V10ZM6 36C6 38.2091 7.79086 40 10 40H14H18V36H14H10V32V28H6V32V36ZM36 6C38.2091 6 40 7.79086 40 10V14V18H36V14V10H32H28V6H32H36ZM40 36H46V40H40V46H36V40H28V36H36V28H40V36Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Screenshot = defineComponent({
    name: 'QScreenshot',
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

  Screenshot.install = (app) => {
    app.component(Screenshot.name, Screenshot);
  }

  export default Screenshot;
</script>
