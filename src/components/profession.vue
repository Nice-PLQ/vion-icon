
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.875 11V13H30.125V11H17.875ZM17.3036 7C15.41 7 13.875 8.53502 13.875 10.4286V13.1663H9.42857C7.53502 13.1663 6 14.7013 6 16.5949V37.3714C6 39.265 7.53502 40.8 9.42857 40.8H38.5714C40.465 40.8 42 39.265 42 37.3714V16.5949C42 14.7013 40.465 13.1663 38.5714 13.1663H34.125V10.4286C34.125 8.53502 32.59 7 30.6964 7H17.3036ZM10 17.1663V36.8H38V17.1663H10ZM20.2705 22.9216L18.6984 21.6852L16.2257 24.8294L17.7978 26.0657L22.7637 29.9712L23.9983 30.9422L25.2343 29.9728L30.214 26.0674L31.7877 24.8332L29.3193 21.6857L27.7455 22.9199L24.0017 25.856L20.2705 22.9216Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Profession = defineComponent({
    name: 'QProfession',
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

  Profession.install = (app) => {
    app.component(Profession.name, Profession);
  }

  export default Profession;
</script>
