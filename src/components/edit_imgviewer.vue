
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7143 13.0555H35V17.1111H39V13.0555V9.99999V9.05554H9V9.99999V13.0555V17.1111H13V13.0555H22.2857V34.9841H17V38.9841H31V34.9841H25.7143V13.0555Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const EditImgviewer = defineComponent({
    name: 'QEditImgviewer',
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

  EditImgviewer.install = (app) => {
    app.component(EditImgviewer.name, EditImgviewer);
  }

  export default EditImgviewer;
</script>
