
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 10V6H42V25H38V10H23ZM30 28C30 33.5228 25.5228 38 20 38C14.4772 38 10 33.5228 10 28C10 22.4772 14.4772 18 20 18C25.5228 18 30 22.4772 30 28ZM34 28C34 35.732 27.732 42 20 42C12.268 42 6 35.732 6 28C6 20.268 12.268 14 20 14C27.732 14 34 20.268 34 28Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Male = defineComponent({
    name: 'Male',
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

  Male.install = (app) => {
    app.component(Male.name, Male);
  }

  export default Male;
</script>
