
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.4286 1H13.5714C6.62842 1 1 6.62842 1 13.5714V34.4286C1 41.3716 6.62842 47 13.5714 47H34.4286C41.3716 47 47 41.3716 47 34.4286V13.5714C47 6.62842 41.3716 1 34.4286 1ZM5 13.5714C5 8.83756 8.83756 5 13.5714 5H34.4286C39.1624 5 43 8.83756 43 13.5714V34.4286C43 39.1624 39.1624 43 34.4286 43H13.5714C8.83756 43 5 39.1624 5 34.4286V13.5714ZM9 15.8571C9 12.07 12.07 9 15.8571 9H24V24H9V15.8571ZM24 24H39V32.1429C39 35.93 35.93 39 32.1429 39H24V24Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MosaicSelected = defineComponent({
    name: 'QMosaicSelected',
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

  MosaicSelected.install = (app) => {
    app.component(MosaicSelected.name, MosaicSelected);
  }

  export default MosaicSelected;
</script>
