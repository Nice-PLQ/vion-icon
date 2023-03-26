
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 9H37V39H11L11 9ZM7 9C7 6.79086 8.79086 5 11 5H37C39.2091 5 41 6.79086 41 9V39C41 41.2091 39.2091 43 37 43H11C8.79086 43 7 41.2091 7 39V9ZM20 32H23.4286H24.5714H28V32.5714V35.4286V36H24.5714H23.4286H20V35.4286V32.5714V32Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Pad = defineComponent({
    name: 'QPad',
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

  Pad.install = (app) => {
    app.component(Pad.name, Pad);
  }

  export default Pad;
</script>
