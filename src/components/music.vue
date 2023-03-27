
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.1537 6.41716L30.093 10.0998L31.3761 26.3528C31.4134 26.6217 31.4353 26.8952 31.4408 27.1726L31.4937 27.8426L31.4221 27.8483C31.1385 31.5782 27.9046 34.5196 23.957 34.5196C19.823 34.5196 16.4717 31.2939 16.4717 27.3148C16.4717 23.3358 19.823 20.1101 23.957 20.1101C25.0084 20.1101 26.0092 20.3187 26.917 20.6954L26.0173 9.29874L25.9292 8.18283L26.8343 7.52418L32.8002 3.18286L35.1537 6.41716ZM27.402 26.8378C27.1577 25.3926 25.8237 24.1101 23.957 24.1101C21.8868 24.1101 20.4717 25.6875 20.4717 27.3148C20.4717 28.9421 21.8868 30.5196 23.957 30.5196C26.014 30.5196 27.4241 28.9623 27.4421 27.3461L27.402 26.8378ZM5.71423 25.8402C5.71423 16.4998 12.6831 8.78714 21.7029 7.65259L22.2021 11.6213C15.1661 12.5063 9.71423 18.5326 9.71423 25.8402C9.71423 33.7603 16.1154 40.1712 23.9999 40.1712C31.8845 40.1712 38.2857 33.7603 38.2857 25.8402C38.2857 21.3998 36.2751 17.4335 33.1121 14.8024L35.6701 11.7273C39.7093 15.0873 42.2857 20.1637 42.2857 25.8402C42.2857 35.9589 34.1041 44.1712 23.9999 44.1712C13.8958 44.1712 5.71423 35.9589 5.71423 25.8402Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Music = defineComponent({
    name: 'Music',
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
