
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.9063 11.8946L33.9236 8.87737L39.1231 14.0768L36.1417 17.0581L30.9063 11.8946ZM28.0778 14.7231L10.69 32.1105L8.66027 39.3396L15.8896 37.3099L33.3132 19.8866L28.0778 14.7231ZM41.9831 11.2799L36.7205 6.01736C35.1758 4.47272 32.6714 4.47273 31.1268 6.01737L7.49171 29.652L7.12179 30.0219L6.98037 30.5256L4.31707 40.0111C3.68886 42.2484 5.75142 44.311 7.98881 43.6828L17.4745 41.0196L17.9781 40.8782L18.3481 40.5082L41.9831 16.8737C43.5278 15.329 43.5278 12.8245 41.9831 11.2799Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Edit = defineComponent({
    name: 'Edit',
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

  Edit.install = (app) => {
    app.component(Edit.name, Edit);
  }

  export default Edit;
</script>
