
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"  d="M18 10C18 8.89543 18.8954 8 20 8H28C29.1046 8 30 8.89543 30 10V40H18V10Z" stroke="currentColor" stroke-width="4"/>
<path fill-rule="evenodd" clip-rule="evenodd"  d="M30 26C30 24.8954 30.8954 24 32 24H40C41.1046 24 42 24.8954 42 26V38C42 39.1046 41.1046 40 40 40H30V26Z" stroke="currentColor" stroke-width="4"/>
<path fill-rule="evenodd" clip-rule="evenodd"  d="M6 18C6 16.8954 6.89543 16 8 16H16C17.1046 16 18 16.8954 18 18V40H8C6.89543 40 6 39.1046 6 38V18Z" stroke="currentColor" stroke-width="4"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const RankingList = defineComponent({
    name: 'QRankingList',
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

  RankingList.install = (app) => {
    app.component(RankingList.name, RankingList);
  }

  export default RankingList;
</script>
