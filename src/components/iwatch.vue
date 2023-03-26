
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4169 11L17.9618 8.6686C17.9776 8.64295 18.0586 8.52395 18.3333 8.37223C18.7074 8.16557 19.2831 8 19.9768 8H28.0892C28.7828 8 29.3585 8.16557 29.7327 8.37223C30.0074 8.52396 30.0883 8.64296 30.1042 8.6686L30.649 11H17.4169ZM13.3083 11.0038L14.0734 7.72974C14.3913 6.36952 15.3895 5.42856 16.3994 4.8708C17.4347 4.29897 18.6902 4 19.9768 4H28.0892C29.3757 4 30.6312 4.29897 31.6666 4.8708C32.6764 5.42856 33.6747 6.36952 33.9925 7.72974L34.759 11.0093C36.8396 11.1508 38.4835 12.8834 38.4835 15V34C38.4835 36.2091 36.6927 38 34.4835 38H34.3858L33.9925 39.6827C33.6747 41.043 32.6764 41.9839 31.6666 42.5417C30.6312 43.1135 29.3757 43.4125 28.0892 43.4125H19.9768C18.6902 43.4125 17.4347 43.1135 16.3994 42.5417C15.3895 41.9839 14.3913 41.043 14.0734 39.6827L13.6802 38H13.4835C11.2744 38 9.48352 36.2091 9.48352 34V15C9.48352 12.8496 11.1804 11.0955 13.3083 11.0038ZM17.7879 38H30.278L30.1042 38.7439C30.0883 38.7695 30.0074 38.8885 29.7327 39.0402C29.3585 39.2469 28.7828 39.4125 28.0892 39.4125H19.9768C19.2831 39.4125 18.7074 39.2469 18.3333 39.0402C18.0586 38.8885 17.9776 38.7695 17.9618 38.7439L17.7879 38ZM13.4835 34V15H34.4835V34H13.4835ZM26 18.859V16.859H22V18.859V24.0406V26.0635L24.0228 26.0405L27.5838 25.9999L29.5837 25.9771L29.5381 21.9773L27.5382 22.0001L26 22.0177V18.859Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Iwatch = defineComponent({
    name: 'QIwatch',
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

  Iwatch.install = (app) => {
    app.component(Iwatch.name, Iwatch);
  }

  export default Iwatch;
</script>
