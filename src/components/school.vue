
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2 13.8866L12.6137 18.2648L25.2 23.3086L37.7862 18.2648L25.2 13.8866ZM43.4436 15.9976L25.2 9.65146L6.95635 15.9976L6.62912 16.1114L5.21572 16.6031L4.22983 16.9461C3.62151 17.1577 3.35476 17.7415 3.43937 18.275H3.4285V31.7772H7.4285V20.4961L9.62369 21.3758V33.5388V34.8912L10.8788 35.3949L24.4269 40.8319L25.1766 41.1327L25.9249 40.8286L39.3014 35.3916L40.5483 34.8848V33.5388V21.4671L43.5426 20.2672L43.8642 20.1383L45.2533 19.5816L46.2222 19.1933C47.2523 18.7805 47.2182 17.3107 46.1701 16.9461L45.1842 16.6031L43.7708 16.1114L43.4436 15.9976ZM13.6237 32.1864V22.9787L25.2 27.6179L36.5483 23.0701V32.1928L25.167 36.8188L13.6237 32.1864Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const School = defineComponent({
    name: 'QSchool',
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

  School.install = (app) => {
    app.component(School.name, School);
  }

  export default School;
</script>
