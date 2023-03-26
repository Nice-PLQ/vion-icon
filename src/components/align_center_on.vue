
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 5.79086 5.79086 4 8 4H12.25H16.25V8H12.25H12H8V12V12.25V16.25H4V12.25V8ZM4 32V36V40C4 42.2091 5.79086 44 8 44H12.25H16.25V40H12.25H12H8V36V32H4ZM32 40V44H36H40C42.2091 44 44 42.2091 44 40V36V32H40V36V40H36H32ZM40 16.25H44V12.25V8C44 5.79086 42.2091 4 40 4H36H32V8H36H40V12V12.25V16.25ZM24.9667 23.2708C27.1873 23.2708 28.9875 21.4706 28.9875 19.25C28.9875 17.0294 27.1873 15.2292 24.9667 15.2292C22.746 15.2292 20.9458 17.0294 20.9458 19.25C20.9458 21.4706 22.746 23.2708 24.9667 23.2708ZM24.9667 27.2708C29.3964 27.2708 32.9875 23.6798 32.9875 19.25C32.9875 14.8202 29.3964 11.2292 24.9667 11.2292C20.5369 11.2292 16.9458 14.8202 16.9458 19.25C16.9458 23.6798 20.5369 27.2708 24.9667 27.2708ZM12.1361 34.3486C15.7728 31.7461 20.1824 30.217 24.9348 30.217C29.7177 30.217 34.1534 31.7659 37.8034 34.3988L35.4633 37.6429C32.461 35.4771 28.8371 34.217 24.9348 34.217C21.0572 34.217 17.4548 35.4611 14.4639 37.6015L12.1361 34.3486Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const AlignCenterOn = defineComponent({
    name: 'QAlignCenterOn',
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

  AlignCenterOn.install = (app) => {
    app.component(AlignCenterOn.name, AlignCenterOn);
  }

  export default AlignCenterOn;
</script>
