
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 34H15.3296L14.3438 34.6309L8 38.6909V34V30V11H40V34H16.5ZM8 7C5.79086 7 4 8.79086 4 11V30V34V42.3455C4 43.926 5.74689 44.882 7.07811 44.03L16.5 38H40C42.2091 38 44 36.2091 44 34V11C44 8.79086 42.2091 7 40 7H8ZM22 15.5H26V20.5H31V24.5H26V29.5H22V24.5H17V20.5H22V15.5Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const FaceToFaceGroupBuilding = defineComponent({
    name: 'QFaceToFaceGroupBuilding',
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

  FaceToFaceGroupBuilding.install = (app) => {
    app.component(FaceToFaceGroupBuilding.name, FaceToFaceGroupBuilding);
  }

  export default FaceToFaceGroupBuilding;
</script>
