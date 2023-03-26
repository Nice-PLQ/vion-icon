
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="49" height="1em" viewBox="0 0 49 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98962 3.66116L5.16119 6.48959L44.7592 46.0876L47.5876 43.2591L40.3975 36.069L47.5509 31.451L47.6808 31.3597C48.7203 30.5658 48.6913 28.9597 47.5792 28.2139L41.8624 24.3803L39.7041 27.5987L42.975 29.792L37.5943 33.2658L34.9072 30.5787C34.9371 30.6 34.9669 30.6214 34.9966 30.6429L37.3368 27.3988L36.9461 27.1232C34.1938 25.2245 31.0825 23.9764 27.7997 23.4712L24.5987 20.2702C28.983 20.2174 32.5209 16.6468 32.5209 12.25C32.5209 7.82021 28.9298 4.22916 24.5 4.22916C20.1032 4.22916 16.5326 7.76701 16.4798 12.1513L7.98962 3.66116ZM24.5 8.22916C22.2794 8.22916 20.4792 10.0294 20.4792 12.25C20.4792 14.4706 22.2794 16.2708 24.5 16.2708C26.7207 16.2708 28.5209 14.4706 28.5209 12.25C28.5209 10.0294 26.7207 8.22916 24.5 8.22916ZM17.5212 24.3496L20.7736 27.602C18.49 28.0848 16.3236 29.0136 14.368 30.3429L13.9973 30.6015L11.6695 27.3486C13.4771 26.055 15.446 25.0464 17.5212 24.3496ZM33.6176 40.446L30.8145 37.6429L24.538 41.695L6.05702 29.807L9.48802 27.5578L7.36302 24.3172L1.43752 28.2029L1.30742 28.2957C0.266914 29.103 0.317547 30.7231 1.45183 31.4527L23.4918 45.6296L23.6424 45.7172C24.2565 46.0383 25.0013 46.0085 25.5909 45.6278L33.6176 40.446Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const VirtualChattingOff = defineComponent({
    name: 'QVirtualChattingOff',
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

  VirtualChattingOff.install = (app) => {
    app.component(VirtualChattingOff.name, VirtualChattingOff);
  }

  export default VirtualChattingOff;
</script>
