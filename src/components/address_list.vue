
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8H37V40H13V37H16V36.4286V33.5714V33H13V15H16V14.4286V11.5714V11H13V8ZM9 40V37H6V36.4286V33.5714V33H9V15H6V14.4286V11.5714V11H9V8C9 5.79086 10.7909 4 13 4H37C39.2091 4 41 5.79086 41 8V40C41 42.2091 39.2091 44 37 44H13C10.7909 44 9 42.2091 9 40ZM30 12H30.5714H33.4286H34V15.4286V32.5714V36H33.4286H30.5714H30V32.5714V15.4286V12Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const AddressList = defineComponent({
    name: 'QAddressList',
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

  AddressList.install = (app) => {
    app.component(AddressList.name, AddressList);
  }

  export default AddressList;
</script>
