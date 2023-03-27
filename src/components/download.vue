
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.0154 6.10315H22.0154V10.1031V26.1031V27.3224L21.2078 26.5147L17.6722 22.9792L14.8438 20.1508L12.0154 22.9792L14.8438 25.8076L21.2078 32.1716L24.0362 35L26.8646 32.1716L33.2286 25.8076L36.057 22.9792L33.2286 20.1508L30.4002 22.9792L26.8646 26.5147L26.0154 27.364V26.1031V10.1031V6.10315ZM8 38H11.4286H36.5714H40V38.5715V41.4286V42H36.5714H11.4286H8V41.4286V38.5715V38Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Download = defineComponent({
    name: 'Download',
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

  Download.install = (app) => {
    app.component(Download.name, Download);
  }

  export default Download;
</script>
