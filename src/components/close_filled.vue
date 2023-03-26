
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24ZM26.4589 23.9994L32.6083 17.8512L30.1488 15.3917L23.9994 21.5399L17.8512 15.3917L15.3917 17.8512L21.5399 23.9994L15.3917 30.1488L17.8512 32.6083L23.9994 26.4589L30.1488 32.6083L32.6083 30.1488L26.4589 23.9994Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const CloseFilled = defineComponent({
    name: 'QCloseFilled',
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

  CloseFilled.install = (app) => {
    app.component(CloseFilled.name, CloseFilled);
  }

  export default CloseFilled;
</script>
