
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7279 4L7 16.7279L9.81456 19.5425V19.6476H41.8146V15.6476H13.7372L22.5563 6.82843L19.7279 4ZM29.0867 43.6476L41.8146 30.9197L39 28.1051V28H7.00001V32H35.0774L26.2582 40.8192L29.0867 43.6476Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Transfer = defineComponent({
    name: 'QTransfer',
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

  Transfer.install = (app) => {
    app.component(Transfer.name, Transfer);
  }

  export default Transfer;
</script>
