
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 24H40" stroke="currentColor" stroke-width="4"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Minimize2 = defineComponent({
    name: 'QMinimize2',
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

  Minimize2.install = (app) => {
    app.component(Minimize2.name, Minimize2);
  }

  export default Minimize2;
</script>
