
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.1109 4.20007L4.28247 7.0285L41.052 43.7981L43.8805 40.9696L42.3896 39.4788C43.3568 38.8726 44 37.7972 44 36.5715V11.4286C44 9.53508 42.465 8.00006 40.5714 8.00006H10.9109L7.1109 4.20007ZM14.9109 12.0001L20.9109 18.0001H25V22.0001H24.9109L38.9109 36.0001H40V12.0001H14.9109ZM4 36.5715V12.3285L8 16.3285V36.0001H27.6716L31.6716 40.0001H7.42857C5.53502 40.0001 4 38.465 4 36.5715ZM11 22.0001V19.3285L13.6716 22.0001H11ZM11 26.0001H17.6716L21.6716 30.0001H11V26.0001Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const CaiqianOff = defineComponent({
    name: 'QCaiqianOff',
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

  CaiqianOff.install = (app) => {
    app.component(CaiqianOff.name, CaiqianOff);
  }

  export default CaiqianOff;
</script>
