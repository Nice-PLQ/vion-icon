
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.4286 34.2858V30.8572H30V28.2858H37.7143V24.8572H30V22.2858H38.5714V8.57153H18.8571V22.2858H27.4286V24.8572H19.7143V28.2858H27.4286V30.8572H18V34.2858H39.4286ZM17.1429 36.8572V11.143H7.71429V36.8572H17.1429ZM35.1429 18.8572V12.0001H30V18.0001V18.8572H35.1429ZM32.5714 18.0001H30L31.7143 12.8572H34.2857L32.5714 18.0001ZM27.4286 18.0001L27.4286 18.8572H22.2857V12.0001H27.4286L27.4286 18.0001ZM24.8571 18.0001H27.4286L25.7143 12.8572H23.1429L24.8571 18.0001ZM11.1429 33.4287H13.7143V14.5715H11.1429V33.4287ZM20.5714 40.2858L22.2857 36.0001H18.8571L17.1429 40.2858H20.5714ZM26.5714 36.0001L28.2857 40.2858H24.8571L23.1429 36.0001H26.5714ZM40.2857 40.2858L38.5714 36.0001H35.1429L36.8571 40.2858H40.2857ZM32.5714 36.0001L34.2857 40.2858H30.8571L29.1429 36.0001H32.5714Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Hi = defineComponent({
    name: 'QHi',
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

  Hi.install = (app) => {
    app.component(Hi.name, Hi);
  }

  export default Hi;
</script>
