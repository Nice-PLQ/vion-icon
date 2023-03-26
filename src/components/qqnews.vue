
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 7H37V35C37 38.2187 34.4656 40.8454 31.2836 40.9934C29.4514 40.8816 28 39.3603 28 37.5C28 35.567 29.567 34 31.5 34V30H11.5C11.332 30 11.1653 30.0055 11 30.0164V7ZM4 37.5C4 41.0165 6.42016 43.9678 9.68574 44.7791C10.0974 44.9222 10.5396 45 11 45H11.5H31H31.5V44.9877C36.7906 44.7272 41 40.3552 41 35V7C41 4.79086 39.2091 3 37 3H11C8.79086 3 7 4.79086 7 7V31.4995C5.17833 32.8678 4 35.0463 4 37.5ZM11.5 34C9.567 34 8 35.567 8 37.5C8 39.433 9.567 41 11.5 41H24.865C24.3127 39.9551 24 38.7641 24 37.5C24 36.2359 24.3127 35.0449 24.865 34H11.5ZM31 15H17V19H31V15Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Qqnews = defineComponent({
    name: 'QQqnews',
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

  Qqnews.install = (app) => {
    app.component(Qqnews.name, Qqnews);
  }

  export default Qqnews;
</script>
