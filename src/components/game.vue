
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.9977 40L28.9204 32.6667H19.8612L13.2619 40H6.35415H2.33334L2.74186 36L5.05096 13.3904C5.36365 10.3287 7.94224 8 11.0199 8H37.7715C40.8598 8 43.4437 10.3443 43.7432 13.4181L45.9436 36L46.3333 40H42.3144H34.9977ZM16.8879 29.991L11.4803 36H6.76267L9.03026 13.7968C9.13449 12.7762 9.99402 12 11.0199 12H37.7715C38.8009 12 39.6622 12.7814 39.7621 13.806L41.9246 36H36.8779L32.0002 30.1143L30.8005 28.6667H28.9204H19.8612H18.0796L16.8879 29.991ZM34 20C34 21.1046 33.1046 22 32 22C30.8954 22 30 21.1046 30 20C30 18.8954 30.8954 18 32 18C33.1046 18 34 18.8954 34 20ZM38 20C38 23.3137 35.3137 26 32 26C28.6863 26 26 23.3137 26 20C26 16.6863 28.6863 14 32 14C35.3137 14 38 16.6863 38 20Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Game = defineComponent({
    name: 'QGame',
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

  Game.install = (app) => {
    app.component(Game.name, Game);
  }

  export default Game;
</script>
