
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 10H10L10 38H38V10ZM10 6C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6H10Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const SplitScreenCanceled = defineComponent({
    name: 'QSplitScreenCanceled',
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

  SplitScreenCanceled.install = (app) => {
    app.component(SplitScreenCanceled.name, SplitScreenCanceled);
  }

  export default SplitScreenCanceled;
</script>
