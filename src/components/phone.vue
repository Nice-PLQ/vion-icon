
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8H35V40H13L13 8ZM9 8C9 5.79086 10.7909 4 13 4H35C37.2091 4 39 5.79086 39 8V40C39 42.2091 37.2091 44 35 44H13C10.7909 44 9 42.2091 9 40V8ZM19 32H22.4286H25.5714H29V32.5714V35.4286V36H25.5714H22.4286H19V35.4286V32.5714V32Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Phone = defineComponent({
    name: 'QPhone',
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

  Phone.install = (app) => {
    app.component(Phone.name, Phone);
  }

  export default Phone;
</script>
