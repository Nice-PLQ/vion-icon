
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.5882 29.7332L35 27.3157V33.4044V36H7V12H35V15.5956V21.6843L40.5882 19.2668L41 19.0887V29.9113L40.5882 29.7332ZM45 13L43 13.8652L41 14.7304L39 15.5956V12C39 11.7494 38.977 11.5042 38.9329 11.2664C38.5883 9.40763 36.9586 8 35 8H7C4.79086 8 3 9.79086 3 12V36C3 38.2091 4.79086 40 7 40H35C36.6342 40 38.0395 39.02 38.6603 37.6157C38.8787 37.1216 39 36.575 39 36V33.4044L41 34.2696L43 35.1348L45 36V31.6418V17.3582V13ZM19 16H11V20H19V16Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const VideoOn = defineComponent({
    name: 'QVideoOn',
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

  VideoOn.install = (app) => {
    app.component(VideoOn.name, VideoOn);
  }

  export default VideoOn;
</script>
