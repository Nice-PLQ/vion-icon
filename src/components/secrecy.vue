
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4496 38.8978C17.2417 42.0159 20.7585 44.05 24 45C27.2415 44.05 30.7583 42.0159 34.5504 38.8978C38.231 35.8713 40.6786 32.8544 41.893 29.8472C41.9637 29.6722 42 29.4852 42 29.2963V10.9028C42 9.09332 40.7853 7.5092 39.0378 7.03975L24 3L8.96223 7.03975C7.21473 7.5092 6 9.09332 6 10.9028V29.2963C6.00001 29.4852 6.03633 29.6722 6.10697 29.8472C7.32144 32.8544 9.76897 35.8713 13.4496 38.8978ZM24 7.14182L10 10.9028L10 28.7765C10.9451 30.8412 12.8216 33.2027 15.9901 35.8082C19.0303 38.308 21.6977 39.9061 24 40.7817C26.3023 39.9061 28.9697 38.308 32.0099 35.8082C35.1784 33.2027 37.0549 30.8412 38 28.7765V10.9028L24 7.14182Z" fill="currentColor"/>
<circle cx="24" cy="20" r="5" fill="currentColor"/>
<path d="M24 19L24 30" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Secrecy = defineComponent({
    name: 'QSecrecy',
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

  Secrecy.install = (app) => {
    app.component(Secrecy.name, Secrecy);
  }

  export default Secrecy;
</script>
