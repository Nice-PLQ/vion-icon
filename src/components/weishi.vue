
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0844 39.3958L11 37.121V10.879L15.0844 8.60422L37 21.3915V26.6085L15.0844 39.3958ZM41 19.0943L15.1304 4L7 8.5283V39.4717L15.1304 44L41 28.9057V19.0943ZM30 24L16 33V16L30 24Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Weishi = defineComponent({
    name: 'QWeishi',
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

  Weishi.install = (app) => {
    app.component(Weishi.name, Weishi);
  }

  export default Weishi;
</script>
