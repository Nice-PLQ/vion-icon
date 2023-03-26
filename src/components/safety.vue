
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.4258 7.32764L10.566 11.0217V28.619C11.5122 30.8618 13.4438 33.2753 16.5726 35.8279C19.4678 38.1898 22.0841 39.7528 24.4258 40.611C26.7676 39.7528 29.3839 38.1898 32.2791 35.8279C35.4079 33.2753 37.3395 30.8618 38.2857 28.619V11.0217L24.4258 7.32764ZM24.4258 3.52468L24.3421 3.21033L8.0509 7.55243C7.17527 7.78581 6.56598 8.57877 6.56598 9.48496V28.7559V28.756C6.566 29.184 6.64898 29.608 6.81037 30.0045C8.08173 33.1279 10.5675 36.0911 14.0441 38.9273C17.5983 41.8269 21.0186 43.8238 24.2987 44.7776L24.4258 44.3404L24.553 44.7776C27.8331 43.8238 31.2534 41.8269 34.8076 38.9273C38.2841 36.0911 40.77 33.1279 42.0413 30.0045C42.2027 29.608 42.2857 29.184 42.2857 28.756V28.7559V9.48496C42.2857 8.57877 41.6764 7.78581 40.8008 7.55243L24.5096 3.21033L24.4258 3.52468ZM33.9856 20.2714L35.3999 18.8572L32.5714 16.0287L31.1572 17.4429L22.7143 25.8859L18.5571 21.7286L17.1428 20.3144L14.3144 23.1429L15.7286 24.5571L19.8859 28.7143L21.3001 30.1285L22.7143 31.5427L22.7143 31.5427L24.1285 30.1285L25.5427 28.7143L33.9856 20.2714Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Safety = defineComponent({
    name: 'QSafety',
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

  Safety.install = (app) => {
    app.component(Safety.name, Safety);
  }

  export default Safety;
</script>
