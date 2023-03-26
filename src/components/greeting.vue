
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 34H15.3296L14.3438 34.6309L8 38.6909V34V30V11H40V34H16.5ZM8 7C5.79086 7 4 8.79086 4 11V30V34V42.3455C4 43.926 5.74689 44.882 7.07811 44.03L16.5 38H40C42.2091 38 44 36.2091 44 34V11C44 8.79086 42.2091 7 40 7H8ZM18.8571 14.8571H15.4286V30.2857H18.8571V24.2857H23.1429V30.2857H26.5714V14.8571H23.1429V20.8571H18.8571V14.8571ZM32.5714 20H29.1429V30.2857H32.5714V20ZM29.1429 14.8571H32.5714V18.2857H29.1429V14.8571Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Greeting = defineComponent({
    name: 'QGreeting',
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

  Greeting.install = (app) => {
    app.component(Greeting.name, Greeting);
  }

  export default Greeting;
</script>
