
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7143 4.85718H13.7143H34.2857H36.2857V6.85718V11.7143H39.4286C41.4799 11.7143 43.1429 13.3773 43.1429 15.4286V30.8572C43.1429 32.9085 41.4799 34.5715 39.4286 34.5715H36.2857V41.1429V43.1429H34.2857H13.7143H11.7143V41.1429V34.5715H8.57143C6.52009 34.5715 4.85715 32.9085 4.85715 30.8572V15.4286C4.85715 13.3773 6.52009 11.7143 8.57143 11.7143H11.7143V6.85718V4.85718ZM11.7143 15.7143V15.7143H8.85715V30.5715H11.7143V27.4286V25.4286H13.7143H34.2857H36.2857V27.4286V30.5715H39.1429V15.7143L36.2857 15.7143H34.2857H13.7143H11.7143ZM32.2857 8.85718V11.7143L15.7143 11.7143V8.85718H32.2857ZM15.7143 39.1429V29.4286H32.2857V39.1429H15.7143ZM12.8571 18.5H15.8571H16.8571H19.8571V22.5H16.8571H15.8571H12.8571V18.5Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Printer = defineComponent({
    name: 'QPrinter',
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

  Printer.install = (app) => {
    app.component(Printer.name, Printer);
  }

  export default Printer;
</script>
