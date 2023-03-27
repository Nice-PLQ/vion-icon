
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2887 14.2015L28.3191 11.171C30.5507 8.93948 34.1688 8.93948 36.4003 11.1711C38.6319 13.4026 38.6319 17.0207 36.4003 19.2523L30.3394 25.3132C28.1079 27.5448 24.4898 27.5448 22.2582 25.3132L19.4298 28.1416C23.2234 31.9353 29.3742 31.9353 33.1678 28.1416L39.2288 22.0807C43.0224 18.287 43.0224 12.1363 39.2288 8.34262C35.4351 4.54896 29.2844 4.54896 25.4907 8.34262L22.4602 11.3731L25.2887 14.2015ZM10.7425 36.8289C8.5109 34.5974 8.51089 30.9793 10.7425 28.7477L16.8034 22.6868C19.0349 20.4552 22.653 20.4552 24.8846 22.6868L27.713 19.8584C23.9194 16.0647 17.7686 16.0647 13.975 19.8584L7.91403 25.9193C4.12037 29.713 4.12037 35.8637 7.91404 39.6574C11.7077 43.451 17.8584 43.451 21.6521 39.6574L24.6826 36.6269L21.8541 33.7985L18.8237 36.8289C16.5921 39.0605 12.974 39.0605 10.7425 36.8289Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Link = defineComponent({
    name: 'Link',
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

  Link.install = (app) => {
    app.component(Link.name, Link);
  }

  export default Link;
</script>
