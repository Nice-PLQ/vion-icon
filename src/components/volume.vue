
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6891 29.0541L14.7113 28.4375H13.5554H8.5V21.1187H13.6859H14.9481L15.9817 20.3944L22.34 15.938V33.2484L15.6891 29.0541ZM13.6859 17.1187L22.34 11.0534L26.34 8.25V13.1346V35.771V40.5L22.34 37.9774L13.5554 32.4375H6.06C5.19844 32.4375 4.5 31.7391 4.5 30.8775V18.6787C4.5 17.8172 5.19844 17.1187 6.06 17.1187H13.6859ZM35.86 24.753C35.86 21.7838 34.8258 19.0516 33.0971 17.0406L30.4429 19.3222C31.6057 20.6748 32.36 22.5894 32.36 24.753C32.36 26.9165 31.6057 28.8312 30.4429 30.1838L33.0971 32.4654C34.8258 30.4543 35.86 27.7222 35.86 24.753Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Volume = defineComponent({
    name: 'Volume',
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

  Volume.install = (app) => {
    app.component(Volume.name, Volume);
  }

  export default Volume;
</script>
