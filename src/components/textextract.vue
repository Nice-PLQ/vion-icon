
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C6.79086 5 5 6.79086 5 9V17H9V9H17V5H9ZM5 39C5 41.2091 6.79086 43 9 43H17V39H9V31H5V39ZM39 5C41.2091 5 43 6.79086 43 9V17H39V9H31V5H39ZM39 43C41.2091 43 43 41.2091 43 39V31H39V39H31V43H39ZM23 14L14 33H18L20 28.5H28L30 33H34L25 14H23ZM21 25L24 18.5L27 25H21Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Textextract = defineComponent({
    name: 'QTextextract',
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

  Textextract.install = (app) => {
    app.component(Textextract.name, Textextract);
  }

  export default Textextract;
</script>
