
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5714 3.42871C27.36 3.42871 30.4286 6.49728 30.4286 10.2859C30.4286 14.0744 27.36 17.143 23.5714 17.143C19.7829 17.143 16.7143 14.0744 16.7143 10.2859C16.7143 6.49728 19.7829 3.42871 23.5714 3.42871ZM23.5714 7.42871C25.1509 7.42871 26.4286 8.70642 26.4286 10.2859C26.4286 11.8653 25.1509 13.143 23.5714 13.143C21.992 13.143 20.7143 11.8653 20.7143 10.2859C20.7143 8.70642 21.992 7.42871 23.5714 7.42871Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4898 20.7408C28.618 18.0804 33.2953 18.2385 36.2395 21.2149V21.2169C39.3487 24.3583 39.3487 29.4557 36.2395 32.599L24.9788 43.9831C24.2024 44.7679 22.9404 44.7679 22.1641 43.9831L10.9034 32.599C7.79411 29.4557 7.79411 24.3583 10.9034 21.2149C13.8508 18.2352 18.5351 18.0801 21.6634 20.7496C21.8351 20.8962 22.0022 21.0513 22.1641 21.2149L23.5694 22.6377L24.9788 21.2149C25.1439 21.048 25.3144 20.89 25.4898 20.7408ZM27.8226 24.0279C29.3407 22.4931 31.7698 22.4677 33.3181 23.9516L33.3966 24.0308C34.9625 25.613 34.9638 28.2007 33.3957 29.786L23.5714 39.7179L13.7472 29.786C12.1795 28.2012 12.1795 25.6128 13.7472 24.0279C15.2906 22.4676 17.7755 22.4673 19.3193 24.0269L23.5654 28.3256L27.8226 24.0279Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const CareMode = defineComponent({
    name: 'QCareMode',
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

  CareMode.install = (app) => {
    app.component(CareMode.name, CareMode);
  }

  export default CareMode;
</script>
