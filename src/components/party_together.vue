
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.24591 5V9.09292V21.9121V24.5828V26.8047V38.2117C3.24591 40.2828 4.92484 41.9617 6.99591 41.9617H34.8234C36.5154 41.9617 37.9456 40.8412 38.4125 39.3017C38.5171 38.9568 38.5734 38.5908 38.5734 38.2117V34.947L45.3382 38.1725V13.9212L38.5734 17.1468V13.882C38.5734 13.5029 38.5171 13.137 38.4125 12.792C37.9456 11.2526 36.5154 10.132 34.8234 10.132L26.9178 10.132L21.6062 8.98046L7.24591 5.86719L3.24591 5ZM7.24591 37.9617V23.9874L21.2386 14.132H34.5734V23.4854L41.3382 20.2599V31.8338L34.5734 28.6083V37.9617H7.24591ZM7.24591 9.96011V19.0948L17.1628 12.1101L7.24591 9.96011ZM25.473 28.7723L26.948 24.9258L30.7879 23.4482L26.948 21.9707L25.473 18.1241L23.9979 21.9707L20.158 23.4482L23.9979 24.9258L25.473 28.7723Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const PartyTogether = defineComponent({
    name: 'QPartyTogether',
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

  PartyTogether.install = (app) => {
    app.component(PartyTogether.name, PartyTogether);
  }

  export default PartyTogether;
</script>
