
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98962 3.66119L5.16119 6.48962L44.7592 46.0876L47.5876 43.2592L45 40.6716V40.514V37V33H41V36.6716L29.9018 25.5733C31.78 24.1053 32.9875 21.8187 32.9875 19.25C32.9875 14.8202 29.3965 11.2292 24.9667 11.2292C22.398 11.2292 20.1114 12.4366 18.6434 14.3149L13.3285 9.00003H17.25V5.00003H13.25H9.48598H9.32846L7.98962 3.66119ZM9 33V37V41H13H13.25H17.25V45H13.25H9C6.79086 45 5 43.2092 5 41V37V33H9ZM33 45V42.171V41H34.171L37 43.829L38.171 45H37H34.171H33ZM12.5651 34.049L12.5861 34.0347C13.5493 33.38 14.5558 32.8045 15.5975 32.3122C18.0506 31.1528 20.6993 30.4544 23.4401 30.2678L24.9348 31.7624L27.5862 34.4139C26.7153 34.2834 25.8298 34.217 24.9348 34.217C23.9348 34.217 22.9469 34.2999 21.9778 34.4623C19.4814 34.8807 17.1103 35.8269 14.9832 37.2429C14.9335 37.276 14.884 37.3093 14.8346 37.3429L14.4639 37.6015L12.1361 34.3486L12.1378 34.3474C12.2793 34.2462 12.4217 34.1467 12.5651 34.049ZM24.9667 15.2292C27.1873 15.2292 28.9875 17.0294 28.9875 19.25C28.9875 20.674 28.2455 21.9278 27.1276 22.6423L21.5743 17.0893C22.2888 15.9713 23.5426 15.2292 24.9667 15.2292ZM41 9.00003H37H33V5.00003H37H41C43.2091 5.00003 45 6.79089 45 9.00003V13.25V17.25H41V13.25V13V9.00003ZM5 13.25V11.827L6.423 13.25L9 15.827V17.25H7.577H5V15.827V13.25Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const AlignCenterOff = defineComponent({
    name: 'QAlignCenterOff',
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

  AlignCenterOff.install = (app) => {
    app.component(AlignCenterOff.name, AlignCenterOff);
  }

  export default AlignCenterOff;
</script>
