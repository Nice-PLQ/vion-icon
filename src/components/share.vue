
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5521 9.00284C27.5521 8.267 27.8224 7.55929 28.3077 7.01222L28.4453 6.86711C29.5254 5.80164 31.2256 5.71334 32.4087 6.64627L32.5044 6.72664L32.598 6.81047L32.6878 6.89603L45.552 19.9368C46.6098 21.0092 46.7054 22.6946 45.7902 23.878L45.7113 23.9737L45.629 24.0675L45.5449 24.1576L32.6807 37.1111C32.1175 37.6782 31.3513 37.9972 30.5521 37.9972C29.0251 37.9972 27.7472 36.8516 27.5722 35.3445L27.5621 35.229L27.5554 35.1124L27.5521 34.9968L27.553 30.18L27.32 30.1597C26.8894 30.1263 26.457 30.1039 26.0229 30.0928L25.3707 30.0844C18.9743 30.0844 12.9598 32.5132 8.36784 36.8121L3.69094 41.1904L5.04627 34.9289C7.46392 23.7596 16.2063 15.0437 27.2292 12.6505L27.552 12.582L27.5521 9.00284ZM42.009 22.04L31.552 11.44L31.5521 15.9994L29.8342 16.2441C21.6658 17.4078 14.7249 22.5705 11.093 29.7476L11.014 29.907L11.533 29.6165C15.5754 27.4026 20.1311 26.1687 24.8765 26.0885L25.3707 26.0844C26.885 26.0844 28.3855 26.2014 29.8628 26.4329L31.5535 26.6978L31.552 32.57L42.009 22.04Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Share = defineComponent({
    name: 'Share',
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

  Share.install = (app) => {
    app.component(Share.name, Share);
  }

  export default Share;
</script>
