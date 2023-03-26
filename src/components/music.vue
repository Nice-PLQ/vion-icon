
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.0303 3.29188L35.7579 0L23.9371 8.00216L25.9452 27.0222C24.0322 25.745 21.7015 24.9952 19.1868 24.9952C12.6831 24.9952 7.41077 30.0096 7.41077 36.1952C7.41077 42.3808 12.6831 47.3952 19.1868 47.3952C25.6905 47.3952 30.9628 42.3808 30.9628 36.1952C30.9628 35.3414 30.8623 34.5098 30.672 33.7107L28.1511 9.95268L38.0303 3.29188ZM26.7304 34.4606L26.9524 36.5632C26.7478 40.2029 23.527 43.3952 19.1868 43.3952C14.7008 43.3952 11.4108 39.985 11.4108 36.1952C11.4108 32.4054 14.7008 28.9952 19.1868 28.9952C22.9728 28.9952 25.907 31.4243 26.7304 34.4606Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Music = defineComponent({
    name: 'QMusic',
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

  Music.install = (app) => {
    app.component(Music.name, Music);
  }

  export default Music;
</script>
