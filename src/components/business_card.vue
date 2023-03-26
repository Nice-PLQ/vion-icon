
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12H40V36H8V12ZM4 12C4 9.79086 5.79086 8 8 8H40C42.2091 8 44 9.79086 44 12V36C44 38.2091 42.2091 40 40 40H8C5.79086 40 4 38.2091 4 36V12ZM24 22.5714C25.578 22.5714 26.8571 21.2922 26.8571 19.7143C26.8571 18.1363 25.578 16.8571 24 16.8571C22.422 16.8571 21.1429 18.1363 21.1429 19.7143C21.1429 21.2922 22.422 22.5714 24 22.5714ZM24 26.5714C27.7871 26.5714 30.8571 23.5014 30.8571 19.7143C30.8571 15.9272 27.7871 12.8571 24 12.8571C20.2129 12.8571 17.1429 15.9272 17.1429 19.7143C17.1429 23.5014 20.2129 26.5714 24 26.5714ZM12.5334 31.8874C15.7779 29.5136 19.7193 28.1143 23.9719 28.1143C28.2519 28.1143 32.2165 29.5317 35.4728 31.9332L33.0986 35.1524C30.4901 33.2287 27.3491 32.1143 23.9719 32.1143C20.6161 32.1143 17.4938 33.2145 14.8952 35.1157L12.5334 31.8874Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const BusinessCard = defineComponent({
    name: 'QBusinessCard',
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

  BusinessCard.install = (app) => {
    app.component(BusinessCard.name, BusinessCard);
  }

  export default BusinessCard;
</script>
