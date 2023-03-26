
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 24C15 26.2091 13.2091 28 11 28C8.79086 28 7 26.2091 7 24C7 21.7909 8.79086 20 11 20C13.2091 20 15 21.7909 15 24ZM28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24ZM37 28C39.2091 28 41 26.2091 41 24C41 21.7909 39.2091 20 37 20C34.7909 20 33 21.7909 33 24C33 26.2091 34.7909 28 37 28Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const More = defineComponent({
    name: 'QMore',
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

  More.install = (app) => {
    app.component(More.name, More);
  }

  export default More;
</script>
