
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.43007 38.8571L24 10.1127L39.5699 38.8571H8.43007ZM20.9853 7.27991C22.2821 4.88578 25.7179 4.88578 27.0147 7.27991L43.5441 37.7956C44.7815 40.0801 43.1274 42.8571 40.5293 42.8571H7.47068C4.87261 42.8571 3.21854 40.0801 4.45596 37.7956L20.9853 7.27991ZM22 37H26V33H22V37ZM22 31H26V17H22V31Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Complaint = defineComponent({
    name: 'Complaint',
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

  Complaint.install = (app) => {
    app.component(Complaint.name, Complaint);
  }

  export default Complaint;
</script>
