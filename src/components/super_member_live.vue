
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1716 9L13.5858 6.41421L16.4142 3.58578L21.8284 9H26.4555L31.5481 3.62451L34.4519 6.37549L31.9655 9H40C42.2091 9 44 10.7909 44 13V39C44 41.2091 42.2091 43 40 43H8C5.79086 43 4 41.2091 4 39V13C4 10.7909 5.79086 9 8 9H16.1716ZM40 39V13H8V39H40ZM18.6667 25C19.7712 25 20.6667 23.6569 20.6667 22C20.6667 20.3431 19.7712 19 18.6667 19C17.5621 19 16.6667 20.3431 16.6667 22C16.6667 23.6569 17.5621 25 18.6667 25ZM30.6667 22C30.6667 23.6569 29.7712 25 28.6667 25C27.5621 25 26.6667 23.6569 26.6667 22C26.6667 20.3431 27.5621 19 28.6667 19C29.7712 19 30.6667 20.3431 30.6667 22ZM23.6667 32C29.1895 32 33.6667 31.1046 33.6667 30C33.6667 28.8954 29.1895 28 23.6667 28C18.1438 28 13.6667 28.8954 13.6667 30C13.6667 31.1046 18.1438 32 23.6667 32Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const SuperMemberLive = defineComponent({
    name: 'QSuperMemberLive',
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

  SuperMemberLive.install = (app) => {
    app.component(SuperMemberLive.name, SuperMemberLive);
  }

  export default SuperMemberLive;
</script>
