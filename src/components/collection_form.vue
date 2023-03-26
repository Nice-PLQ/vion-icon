
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 40V8H29.8612L36 13.2499V40H12ZM11.3016 4H31.3383L40 11.4074V40.6984C40 42.5218 38.5218 44 36.6984 44H11.3016C9.47817 44 8 42.5218 8 40.6984V7.30159C8 5.47817 9.47817 4 11.3016 4ZM15.1741 24.1516L22.4549 31.4325L22.4809 31.4066L22.6829 31.6086L33.6328 20.6587L30.8043 17.8303L22.657 25.9777L18.0025 21.3232L15.1741 24.1516Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const CollectionForm = defineComponent({
    name: 'QCollectionForm',
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

  CollectionForm.install = (app) => {
    app.component(CollectionForm.name, CollectionForm);
  }

  export default CollectionForm;
</script>
