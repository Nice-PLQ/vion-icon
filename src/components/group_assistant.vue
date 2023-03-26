
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8571 18.5C29.8571 21.5376 27.3947 24 24.3571 24V28C29.6038 28 33.8571 23.7467 33.8571 18.5H29.8571ZM24.3571 24C21.3196 24 18.8571 21.5376 18.8571 18.5H14.8571C14.8571 23.7467 19.1104 28 24.3571 28V24ZM18.8571 18.5C18.8571 15.4624 21.3196 13 24.3571 13V9C19.1104 9 14.8571 13.2533 14.8571 18.5H18.8571ZM24.3571 13C27.3947 13 29.8571 15.4624 29.8571 18.5H33.8571C33.8571 13.2533 29.6038 9 24.3571 9V13ZM24.3438 29.7588C18.7715 29.7588 13.7906 32.3035 10.4643 36.2901L13.5357 38.8527C16.1427 35.7281 20.02 33.7588 24.3438 33.7588V29.7588ZM24.3438 33.7588H24.6426V29.7588H24.3438V33.7588ZM24.6426 33.7588C28.9664 33.7588 32.8437 35.7281 35.4508 38.8527L38.5221 36.2901C35.1959 32.3035 30.2149 29.7588 24.6426 29.7588V33.7588Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const GroupAssistant = defineComponent({
    name: 'QGroupAssistant',
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

  GroupAssistant.install = (app) => {
    app.component(GroupAssistant.name, GroupAssistant);
  }

  export default GroupAssistant;
</script>
