
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.2277 14.5007V20.7928L39.942 18.2053V25.2737L34.2277 22.6862V28.9783V32.421H15.8853H14.6756L13.6634 33.0834L8.05797 36.7512V33.2137V28.6534V11.058H34.2277V14.5007ZM44 11.9132L42.3437 12.6632L39.942 13.7507L38.2857 14.5007V10.2653C38.2857 10.1927 38.2833 10.1207 38.2787 10.0492C38.1675 8.34659 36.7512 7 35.0204 7H7.26531C5.46193 7 4 8.46193 4 10.2653V28.6534V33.2137V41.5162C4 42.6937 5.30734 43.4006 6.29265 42.7559L15.8853 36.479H35.0204C36.7512 36.479 38.1675 35.1324 38.2787 33.4298C38.2833 33.3583 38.2857 33.2863 38.2857 33.2137V28.9783L39.942 29.7283L42.3437 30.8158L44 31.5658V27.1112V16.3678V11.9132ZM19.6957 14H11V18H19.6957V14Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Studio = defineComponent({
    name: 'QStudio',
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

  Studio.install = (app) => {
    app.component(Studio.name, Studio);
  }

  export default Studio;
</script>
