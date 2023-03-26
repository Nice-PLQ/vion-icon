
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.7109 22.285L24 12.7147L14.2891 22.285L7.20763 20.0133L9.20746 35.0913L38.7925 35.0979L40.7926 20.0132L33.7109 22.285ZM45.5886 14.274L42.7578 35.6236C42.4941 37.6125 40.7979 39.0983 38.7917 39.0979L9.20657 39.0913C7.20105 39.0909 5.50587 37.6053 5.24219 35.6172L2.41138 14.274L13.2057 17.7367L24 7.09863L34.7943 17.7367L45.5886 14.274Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const SuperMember = defineComponent({
    name: 'QSuperMember',
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

  SuperMember.install = (app) => {
    app.component(SuperMember.name, SuperMember);
  }

  export default SuperMember;
</script>
