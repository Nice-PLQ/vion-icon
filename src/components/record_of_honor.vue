
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.252 14.7257L36.8195 17.2359L38.408 15.9276V24.6C38.408 32.226 32.226 38.4081 24.6 38.4081C20.842 38.4081 17.4414 36.9121 14.9479 34.4743L12.3804 31.9641L10.7919 33.2723V24.6182L10.7945 24.325C10.9403 16.8268 17.0658 10.7919 24.6 10.7919C28.358 10.7919 31.7585 12.2879 34.252 14.7257ZM42.408 7.45146L38.408 10.7457L37.0483 11.8655C33.8377 8.7266 29.4448 6.7919 24.6 6.7919C14.8753 6.7919 6.97127 14.5867 6.79488 24.2692L6.79187 24.6V36.5666V41.7485L10.7919 38.4542L12.1516 37.3344C15.3622 40.4734 19.7551 42.4081 24.6 42.4081C34.4351 42.4081 42.408 34.4351 42.408 24.6V12.6334V7.45146ZM27.8551 24.6C27.8551 26.3978 26.3977 27.8551 24.6 27.8551C22.8022 27.8551 21.3448 26.3978 21.3448 24.6C21.3448 22.8022 22.8022 21.3448 24.6 21.3448C26.3977 21.3448 27.8551 22.8022 27.8551 24.6ZM31.8551 24.6C31.8551 28.6069 28.6069 31.8551 24.6 31.8551C20.5931 31.8551 17.3448 28.6069 17.3448 24.6C17.3448 20.5931 20.5931 17.3448 24.6 17.3448C28.6069 17.3448 31.8551 20.5931 31.8551 24.6Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const RecordOfHonor = defineComponent({
    name: 'QRecordOfHonor',
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

  RecordOfHonor.install = (app) => {
    app.component(RecordOfHonor.name, RecordOfHonor);
  }

  export default RecordOfHonor;
</script>
