
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10H38V38H10L10 10ZM6 10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10ZM18.5714 17.1429H14.5714V31.7143H18.5714V17.1429ZM22.2857 21.4286H26.2857V31.7143H22.2857V21.4286ZM34 25.7143H30V31.7143H34V25.7143Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Vote = defineComponent({
    name: 'QVote',
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

  Vote.install = (app) => {
    app.component(Vote.name, Vote);
  }

  export default Vote;
</script>
