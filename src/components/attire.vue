
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4807 10.1755C12.4738 10.1749 12.4667 10.1749 12.4597 10.1755L12.4524 10.1762L12.4454 10.1779C12.4366 10.1799 12.4291 10.1829 12.4225 10.1865C12.4163 10.1899 12.4087 10.1952 12.3995 10.2043L5.82842 16.7754L11.128 22.075L13.693 19.5055L13.693 36.9844H34.3323L34.3319 19.4062L37.0027 22.0765L42.3037 16.7754L35.7647 10.2364L35.7225 10.1979L35.7038 10.1837C35.6897 10.1773 35.6719 10.1736 35.6514 10.1755L35.5583 10.1843L30.2976 10.1846C29.3225 12.7049 26.877 14.4914 24.0127 14.4914C21.1484 14.4914 18.7029 12.7049 17.7278 10.1846L12.5738 10.1843L12.4807 10.1755ZM38.3321 26.4039L38.3324 40.9844H9.69302L9.693 26.2968L0.17157 16.7754L9.57108 7.37591C10.0874 6.85955 10.7119 6.50749 11.3731 6.32419C11.6373 6.23149 11.9098 6.18692 12.1772 6.18523L12.1818 6.18517C12.3695 6.17198 12.5579 6.17168 12.7457 6.18428L21.1231 6.18482L21.287 8.0054C21.4124 9.39836 22.586 10.4914 24.0127 10.4914C25.4394 10.4914 26.613 9.39836 26.7384 8.0054L26.9023 6.18482L35.3865 6.18428C36.2866 6.12391 37.208 6.36009 37.9888 6.89883L38.0261 6.92457L38.2858 7.12172L38.529 7.34386L47.9606 16.7754L38.3321 26.4039Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Attire = defineComponent({
    name: 'QAttire',
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

  Attire.install = (app) => {
    app.component(Attire.name, Attire);
  }

  export default Attire;
</script>
