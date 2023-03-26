
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0152 6.7516L28.9024 2.06104L30.2705 5.81981L17.3833 10.5104L16.0152 6.7516ZM37.7143 13.7143H42.8571V17.7143H37.479L36.1898 39.6299C36.0832 41.4421 34.5825 42.8571 32.7672 42.8571H15.2328C13.4175 42.8571 11.9168 41.4421 11.8102 39.6299L10.521 17.7143H5.14285V13.7143H10.2857H14.2926H33.7074H37.7143ZM14.5279 17.7143L15.7716 38.8571H32.2284L33.4721 17.7143H14.5279Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const DeleteActivated = defineComponent({
    name: 'QDeleteActivated',
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

  DeleteActivated.install = (app) => {
    app.component(DeleteActivated.name, DeleteActivated);
  }

  export default DeleteActivated;
</script>
