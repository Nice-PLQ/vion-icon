
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM25.8 30.4V34.4H21.8V30.4H25.8ZM30.7926 19.3963C30.7926 15.5481 27.673 12.4286 23.8249 12.4286C19.9767 12.4286 16.8571 15.5481 16.8571 19.3963H20.8571L20.8622 19.2219C20.9524 17.6641 22.2444 16.4286 23.8249 16.4286C25.4639 16.4286 26.7926 17.7573 26.7926 19.3963C26.7926 20.2763 26.4099 21.0898 25.7537 21.6518C25.595 21.7877 25.2459 21.9626 24.7217 22.1471L24.3464 22.2713L23.9202 22.3963C22.6822 22.7388 21.8249 23.8654 21.8249 25.1499V28.1429H25.8249L25.824 25.996L25.9597 25.9519C26.9736 25.6028 27.7652 25.1956 28.3557 24.6899C29.8901 23.3757 30.7926 21.4571 30.7926 19.3963Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const QuestionMarkFilled = defineComponent({
    name: 'QQuestionMarkFilled',
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

  QuestionMarkFilled.install = (app) => {
    app.component(QuestionMarkFilled.name, QuestionMarkFilled);
  }

  export default QuestionMarkFilled;
</script>
