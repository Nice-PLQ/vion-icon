
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 4H22V8.14178C15.2154 9.11224 10 14.9471 10 22V32H4V36H10H14H34H38H44V32H38V22C38 14.9471 32.7846 9.11224 26 8.14178V4ZM34 22V32H14V22C14 16.4772 18.4772 12 24 12C29.5228 12 34 16.4772 34 22ZM31 44V40H17V44H31Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Remind = defineComponent({
    name: 'QRemind',
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

  Remind.install = (app) => {
    app.component(Remind.name, Remind);
  }

  export default Remind;
</script>
