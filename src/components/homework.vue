
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 40V8H29.8612L36 13.2499V40H12ZM11.3016 4H31.3383L40 11.4074V40.6984C40 42.5218 38.5218 44 36.6984 44H11.3016C9.47817 44 8 42.5218 8 40.6984V7.30159C8 5.47817 9.47817 4 11.3016 4ZM25.0286 13.5714H16.2857V17.5714H25.0286V13.5714ZM16.2857 29.5714H30.8571V33.5714H16.2857V29.5714ZM30.8571 21.5714H16.2857V25.5714H30.8571V21.5714Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Homework = defineComponent({
    name: 'QHomework',
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

  Homework.install = (app) => {
    app.component(Homework.name, Homework);
  }

  export default Homework;
</script>
