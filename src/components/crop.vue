
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1429 8H11.1429V32.2857C11.1429 34.3008 12.633 35.9679 14.5714 36.2452V36.2857H15.134L15.1429 36.2857L30.7714 36.2857V32.2857H15.1429V8ZM9.42857 12.2857H6V16.2857H9.42857V12.2857ZM42.1429 32.2857H38.7143V36.2857H42.1429V32.2857ZM17.2857 12.2857H33C35.0151 12.2857 36.6822 13.7758 36.9595 15.7143H37L37 16.2857L37 40.4643H33V16.2857H17.2857V12.2857Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Crop = defineComponent({
    name: 'QCrop',
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

  Crop.install = (app) => {
    app.component(Crop.name, Crop);
  }

  export default Crop;
</script>
