
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM28 15H32V22H28V15ZM24.0617 28.087C21.8767 28.087 19.8806 27.0761 18.6497 25.417L15.4373 27.8004L15.6329 28.0557C17.6264 30.5759 20.7181 32.087 24.0617 32.087C27.426 32.087 30.538 30.5575 32.5331 28.0013L29.3799 25.5402L29.2142 25.7438C27.9703 27.21 26.0974 28.087 24.0617 28.087ZM20 15H16V22H20V15Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ExpressionFilled = defineComponent({
    name: 'QExpressionFilled',
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

  ExpressionFilled.install = (app) => {
    app.component(ExpressionFilled.name, ExpressionFilled);
  }

  export default ExpressionFilled;
</script>
