
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.0001 13.8284V31H41.0001V11V7H37.0001H17.0001V11H34.1716L8.01443 37.1572L6.60022 38.5714L9.42865 41.3999L10.8429 39.9856L37.0001 13.8284Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Arrow = defineComponent({
    name: 'Arrow',
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

  Arrow.install = (app) => {
    app.component(Arrow.name, Arrow);
  }

  export default Arrow;
</script>
