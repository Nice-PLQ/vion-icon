
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6H11.4286H36.5714H40V6.57143V9.42857V10H36.5714H11.4286H8V9.42857V6.57143V6ZM12.0154 25.1239L14.8438 27.9524L17.6722 25.1239L21.2078 21.5884L22.0154 20.7808V22V38V42H26.0154V38V22V20.7392L26.8646 21.5884L30.4002 25.1239L33.2286 27.9524L36.057 25.1239L33.2286 22.2955L26.8646 15.9315L24.0362 13.1031L21.2078 15.9315L14.8438 22.2955L12.0154 25.1239Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const SetTop = defineComponent({
    name: 'QSetTop',
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

  SetTop.install = (app) => {
    app.component(SetTop.name, SetTop);
  }

  export default SetTop;
</script>
