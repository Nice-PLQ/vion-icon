
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 11H40V31H8V11ZM4 11C4 8.79086 5.79086 7 8 7H40C42.2091 7 44 8.79086 44 11V31C44 33.2091 42.2091 35 40 35H29.9539L30.5539 38H33V42H29H19H15V38H17.4461L18.0461 35H8C5.79086 35 4 33.2091 4 31V11ZM22.1253 35L21.5253 38H26.4747L25.8747 35H22.1253Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Computer = defineComponent({
    name: 'Computer',
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

  Computer.install = (app) => {
    app.component(Computer.name, Computer);
  }

  export default Computer;
</script>
