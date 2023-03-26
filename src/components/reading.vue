
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3368 13.3014L22.004 13.8967V28V36.4832L21.9364 36.4488L21.0815 36.0137H20.1223H7.84848L7.84848 11H18.7578L21.3368 13.3014ZM26.004 36.5198L26.1557 36.4432L27.0061 36.0137H27.9588L40.1515 36.0137L40.1515 11L29.5925 11L26.4773 13.4574L26.004 13.8308V28V36.5198ZM24.0255 42L20.1223 40.0137H7.84848C5.63934 40.0137 3.84848 38.2229 3.84848 36.0137V11C3.84848 8.79086 5.63934 7 7.84848 7H18.7578C19.7401 7 20.688 7.36146 21.421 8.01548L24 10.3169L27.1152 7.85948C27.821 7.30277 28.6937 7 29.5925 7H40.1515C42.3606 7 44.1515 8.79086 44.1515 11V36.0137C44.1515 38.2229 42.3607 40.0137 40.1515 40.0137H27.9588L24.0255 42Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Reading = defineComponent({
    name: 'QReading',
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

  Reading.install = (app) => {
    app.component(Reading.name, Reading);
  }

  export default Reading;
</script>
