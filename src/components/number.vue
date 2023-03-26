
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7143 20.5715V7.71436H10.2857V20.5715H37.7143ZM34.2857 17.1429H13.7143V11.1429H34.2857V17.1429ZM38.5714 29.1429L37.2857 40.2858H17.1429L15.4286 36.8572H33.8571L34.2857 32.5715H11.1429L12.8571 26.5715H7.71429V23.1429H40.2857V26.5715H16.2857L15.4286 29.1429H38.5714Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Number = defineComponent({
    name: 'QNumber',
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

  Number.install = (app) => {
    app.component(Number.name, Number);
  }

  export default Number;
</script>
