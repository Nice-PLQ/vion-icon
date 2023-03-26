
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 10H10L10 38H24H31.3431L38 31.3431V24V10ZM10 6C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H24H31.3431C32.404 42 33.4214 41.5786 34.1716 40.8284L40.8284 34.1716C41.5786 33.4214 42 32.404 42 31.3431V24V10C42 7.79086 40.2091 6 38 6H10ZM22.3714 31.4H21.8V31.9714V34.8286V35.4H22.3714H25.2286H25.8V34.8286V31.9714V31.4H25.2286H22.3714ZM23.8249 13.4286C19.9767 13.4286 16.8571 16.5481 16.8571 20.3963H20.8571C20.8571 18.7573 22.1858 17.4286 23.8249 17.4286C25.4639 17.4286 26.7926 18.7573 26.7926 20.3963C26.7926 21.2982 26.3927 22.1045 25.7537 22.6518C25.7542 22.6514 25.754 22.6516 25.7531 22.6522L25.753 22.6523C25.7455 22.6579 25.6921 22.6978 25.5694 22.7637C25.4395 22.8334 25.2743 22.9098 25.0796 22.9892C24.6885 23.1486 24.2583 23.288 23.9102 23.3904C22.7226 23.7398 21.8249 24.8339 21.8249 26.1608V29.1429H25.8249V26.9784C26.071 26.8941 26.3313 26.7986 26.5899 26.6931C27.1049 26.4831 27.8103 26.157 28.3557 25.6899C29.8442 24.415 30.7926 22.5153 30.7926 20.3963C30.7926 16.5481 27.673 13.4286 23.8249 13.4286Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Feedback = defineComponent({
    name: 'QFeedback',
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

  Feedback.install = (app) => {
    app.component(Feedback.name, Feedback);
  }

  export default Feedback;
</script>
