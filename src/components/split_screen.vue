
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10H38V22H10V10ZM6 26V22V10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V22V26V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V26ZM38 26V38H10V26H38Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const SplitScreen = defineComponent({
    name: 'QSplitScreen',
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

  SplitScreen.install = (app) => {
    app.component(SplitScreen.name, SplitScreen);
  }

  export default SplitScreen;
</script>
