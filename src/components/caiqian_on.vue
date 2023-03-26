
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12V36H40V12H8ZM7.42857 8C5.53502 8 4 9.53502 4 11.4286V36.5714C4 38.465 5.53502 40 7.42857 40H40.5714C42.465 40 44 38.465 44 36.5714V11.4286C44 9.53502 42.465 8 40.5714 8H7.42857ZM11 18H13H23H25V22H23H13H11V18ZM13 26H11V30H13H23H25V26H23H13Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const CaiqianOn = defineComponent({
    name: 'QCaiqianOn',
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

  CaiqianOn.install = (app) => {
    app.component(CaiqianOn.name, CaiqianOn);
  }

  export default CaiqianOn;
</script>
