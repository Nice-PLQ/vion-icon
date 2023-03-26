
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.6564 27.282C35.3191 27.6187 33.919 27.7975 32.477 27.7975C23.0696 27.7975 15.4434 20.1863 15.4434 10.7975C15.4434 9.98222 15.5009 9.18035 15.6125 8.39683C15.6112 8.39655 15.6099 8.39628 15.6094 8.39487L15.6308 8.2658C15.6424 8.17884 15.6483 8.09012 15.6483 8C15.6483 6.89543 14.7529 6 13.6483 6C13.231 6 12.8434 6.12785 12.5219 6.34789L12.2079 6.56971C7.23144 10.2087 4 16.0845 4 22.7135C4 33.7592 12.972 42.7135 24.0395 42.7135C33.1671 42.7135 40.8694 36.623 43.2891 28.2916C43.3753 28.0683 43.4226 27.8256 43.4226 27.5718C43.4226 26.4672 42.5271 25.5718 41.4226 25.5718C41.3891 25.5718 41.3558 25.5726 41.3227 25.5743C41.3172 25.5745 41.3118 25.5748 41.3063 25.5751C40.9834 25.5937 40.681 25.689 40.4169 25.8448C40.4125 25.8474 40.4081 25.8501 40.4036 25.8528C40.4034 25.8529 40.4032 25.853 40.403 25.8531L40.4019 25.8494C40.4016 25.8495 40.4013 25.8497 40.401 25.8498C40.3952 25.8529 40.3893 25.856 40.3834 25.8591C39.2146 26.4715 37.9656 26.9524 36.6564 27.282ZM37.6708 31.1514C36.0076 31.5734 34.2669 31.7975 32.477 31.7975C21.5092 31.7975 12.4914 23.4122 11.5285 12.6994C9.31767 15.4435 8 18.9255 8 22.7135C8 31.5426 15.1737 38.7135 24.0395 38.7135C29.7926 38.7135 34.8403 35.6909 37.6708 31.1514Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const NightMode = defineComponent({
    name: 'QNightMode',
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

  NightMode.install = (app) => {
    app.component(NightMode.name, NightMode);
  }

  export default NightMode;
</script>
