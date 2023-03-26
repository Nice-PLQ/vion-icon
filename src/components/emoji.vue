
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8ZM24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM28 15H32V22H28V15ZM24.0617 32.087C20.5262 32.087 17.3722 30.4083 15.4373 27.8004L18.6497 25.417C19.839 27.02 21.8075 28.087 24.0617 28.087C26.2574 28.087 28.1823 27.0747 29.3799 25.5402L32.5331 28.0013C30.5876 30.494 27.5057 32.087 24.0617 32.087ZM16 15H20V22H16V15Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Emoji = defineComponent({
    name: 'QEmoji',
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

  Emoji.install = (app) => {
    app.component(Emoji.name, Emoji);
  }

  export default Emoji;
</script>
