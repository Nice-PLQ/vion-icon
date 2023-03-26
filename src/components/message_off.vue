
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11091 3.78247L4.28249 6.6109L39.6378 41.9662L42.4663 39.1378L41.1582 37.8298C42.8026 37.3331 44 35.8064 44 34V11C44 8.79086 42.2091 7 40 7H10.3284L7.11091 3.78247ZM14.3284 11L37.3284 34H40V11H14.3284ZM4 30V11.8284L8 15.8284V30V34V38.6909L14.3438 34.6309L15.3296 34H16.5H26.1716L30.1716 38H16.5L7.07811 44.03C5.74689 44.882 4 43.926 4 42.3455V34V30Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MessageOff = defineComponent({
    name: 'QMessageOff',
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

  MessageOff.install = (app) => {
    app.component(MessageOff.name, MessageOff);
  }

  export default MessageOff;
</script>
