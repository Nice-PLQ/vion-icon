
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5 43C37.6421 43 41 39.6421 41 35.5C41 31.3579 37.6421 28 33.5 28C29.3579 28 26 31.3579 26 35.5C26 39.6421 29.3579 43 33.5 43Z" fill="white"/>
<path d="M14.5 43C10.3579 43 7 39.6421 7 35.5C7 31.3579 10.3579 28 14.5 28C18.6421 28 22 31.3579 22 35.5C22 39.6421 18.6421 43 14.5 43Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.5 8C42.5 5.79086 40.8797 4 38.881 4H9.11905C7.1203 4 5.5 5.79086 5.5 8V24H9.11905V8H38.881V24H42.5V8ZM26.6086 24.9081L29.9515 28.8909C31.008 28.3225 32.2163 28 33.5 28C37.6421 28 41 31.3579 41 35.5C41 39.6421 37.6421 43 33.5 43C29.3579 43 26 39.6421 26 35.5C26 34.096 26.3858 32.782 27.0572 31.6584L24 28.016L20.9428 31.6584C21.6142 32.782 22 34.096 22 35.5C22 39.6421 18.6421 43 14.5 43C10.3579 43 7 39.6421 7 35.5C7 31.3579 10.3579 28 14.5 28C15.7837 28 16.992 28.3225 18.0485 28.8909L21.3914 24.9081L14.3599 16.5307C12.9398 14.8389 13.1566 12.3169 14.8445 10.8922L24 21.8002L33.1555 10.8922C34.8434 12.3169 35.0602 14.8389 33.6401 16.5307L26.6086 24.9081ZM33.5 39C35.433 39 37 37.433 37 35.5C37 33.567 35.433 32 33.5 32C31.567 32 30 33.567 30 35.5C30 37.433 31.567 39 33.5 39ZM14.5 39C12.567 39 11 37.433 11 35.5C11 33.567 12.567 32 14.5 32C16.433 32 18 33.567 18 35.5C18 37.433 16.433 39 14.5 39Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const LongScreenshot = defineComponent({
    name: 'QLongScreenshot',
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

  LongScreenshot.install = (app) => {
    app.component(LongScreenshot.name, LongScreenshot);
  }

  export default LongScreenshot;
</script>
