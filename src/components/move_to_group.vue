
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.2301 13L22.8384 7H8L7.80036 7.0049C5.68397 7.10892 4 8.8578 4 11V33L4.0049 33.1996C4.10892 35.316 5.8578 37 8 37H20.5714V33H8V11H20.504L23.8964 17H40V26.4286H43.7143C43.8145 26.4286 43.9106 26.4458 44 26.4773V17L43.9951 16.8004C43.8911 14.684 42.1422 13 40 13H26.2301ZM33.8995 39.3467L31.567 37.0142H44V33.0142H31.7467L33.8995 30.8614L31.0711 28.033L26.8284 32.2757L24 35.1041L26.8284 37.9325L31.0711 42.1751L33.8995 39.3467Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MoveToGroup = defineComponent({
    name: 'QMoveToGroup',
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

  MoveToGroup.install = (app) => {
    app.component(MoveToGroup.name, MoveToGroup);
  }

  export default MoveToGroup;
</script>
