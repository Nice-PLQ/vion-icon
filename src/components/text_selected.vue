
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12V36C6 39.3137 8.68629 42 12 42H36C39.3137 42 42 39.3137 42 36V12C42 8.68629 39.3137 6 36 6H12ZM32.7273 13.7143H24.3117H23.6883H15.2727H13.7143V15.5844V19.3247H16.8312V16.8312H22.4416V31.1688H19.013V34.2857H28.987V31.1688H25.5584V16.8312H31.1688V19.3247H34.2857V15.5844V13.7143H32.7273Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const TextSelected = defineComponent({
    name: 'QTextSelected',
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

  TextSelected.install = (app) => {
    app.component(TextSelected.name, TextSelected);
  }

  export default TextSelected;
</script>
