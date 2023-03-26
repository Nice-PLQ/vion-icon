
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.8056C7 13.8523 14.3734 7 24 7C33.6266 7 41 13.8523 41 21.8056V29.0384C40.4582 29.0053 39.8076 29.0007 39 29.0001L38.6 29H35V33V39V43H38.6L39 42.9999C40.9767 42.9984 42.0128 42.9732 42.816 42.564C43.5686 42.1805 44.1805 41.5686 44.564 40.816C44.8979 40.1606 44.9761 39.3501 44.9944 38H45V36.6V35.4V21.8056C45 11.1959 35.3602 3 24 3C12.6398 3 3 11.1959 3 21.8056V35.4V36.6V38H3.00559C3.02389 39.3501 3.10205 40.1606 3.43597 40.816C3.81947 41.5686 4.43139 42.1805 5.18404 42.564C5.98717 42.9732 7.0233 42.9984 9 42.9999L9.4 43H13V39V33V29H9.4L9 29.0001C8.19243 29.0007 7.54184 29.0053 7 29.0384V21.8056ZM7 35.4V36.6C7 37.7861 7.00311 38.4351 7.04121 38.9015L7.0458 38.9542L7.09854 38.9588C7.50956 38.9924 8.06249 38.9988 9 38.9998V33.0002C8.06249 33.0012 7.50956 33.0076 7.09854 33.0412L7.0458 33.0458L7.04121 33.0985C7.00311 33.5649 7 34.2139 7 35.4ZM41 36.6V35.4C41 34.2139 40.9969 33.5649 40.9588 33.0985L40.9542 33.0458L40.9015 33.0412C40.4904 33.0076 39.9375 33.0012 39 33.0002V38.9998C39.9375 38.9988 40.4904 38.9924 40.9015 38.9588L40.9542 38.9542L40.9588 38.9015C40.9969 38.4351 41 37.7861 41 36.6ZM23.0568 27.1781L24.4224 31.3821L25.7506 35.4705L26.1434 34.8854L26.7377 34H27.804H32V38H28.8703L26.7798 41.1146L24.4877 44.5295L23.217 40.6179L21.9838 36.8219L21.8657 37.0209L21.2845 38H20.1459H16V34H19.0072L20.8005 30.9791L23.0568 27.1781Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const MusicTogether = defineComponent({
    name: 'QMusicTogether',
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

  MusicTogether.install = (app) => {
    app.component(MusicTogether.name, MusicTogether);
  }

  export default MusicTogether;
</script>
