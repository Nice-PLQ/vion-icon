
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 30C33.5228 30 38 25.5228 38 20C38 14.4772 33.5228 10 28 10C22.4772 10 18 14.4772 18 20C18 25.5228 22.4772 30 28 30ZM28 34C35.732 34 42 27.732 42 20C42 12.268 35.732 6 28 6C20.268 6 14 12.268 14 20C14 27.732 20.268 34 28 34Z" fill="currentColor"/>
<path d="M20.7984 30.5271L17.97 27.6987L15.344 30.3246L9.68737 24.668L6.85894 27.4964L12.5156 33.153L6.65625 39.0124L9.48468 41.8408L15.344 35.9815L21.0011 41.6385L23.8295 38.8101L18.1724 33.153L20.7984 30.5271Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Female = defineComponent({
    name: 'QFemale',
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

  Female.install = (app) => {
    app.component(Female.name, Female);
  }

  export default Female;
</script>
