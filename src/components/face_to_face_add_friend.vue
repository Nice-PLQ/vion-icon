
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5546 7.28687C7.83895 10.73 4.00006 16.9345 4.00006 24.0374C4.00006 31.0835 7.77795 37.2458 13.418 40.7049L15.5093 37.2951C10.9833 34.5193 8.00006 29.6101 8.00006 24.0374C8.00006 18.42 11.0315 13.4765 15.6187 10.7132L13.5546 7.28687ZM44 24.466C44 17.3813 40.1808 11.1904 34.4894 7.74202L32.4166 11.163C36.9841 13.9305 40 18.863 40 24.466C40 29.9525 37.1087 34.7953 32.7 37.5932L34.8433 40.9705C40.3383 37.4832 44 31.4026 44 24.466ZM30.09 14.7325C33.4447 16.7441 35.7109 20.3879 35.7109 24.5705C35.7109 28.478 33.7318 31.9175 30.736 33.9918L28.459 30.7032C30.4402 29.3314 31.7109 27.0889 31.7109 24.5705C31.7109 21.8765 30.2554 19.4957 28.0329 18.163L30.09 14.7325ZM12.2891 24.5705C12.2891 20.4284 14.5118 16.8143 17.813 14.7912L19.9031 18.2017C17.7166 19.5417 16.2891 21.9024 16.2891 24.5705C16.2891 27.1056 17.5769 29.3614 19.5808 30.7305L17.3242 34.0333C14.2947 31.9634 12.2891 28.5042 12.2891 24.5705ZM27 24.3672C27 26.024 25.6569 27.3672 24 27.3672C22.3431 27.3672 21 26.024 21 24.3672C21 22.7103 22.3431 21.3672 24 21.3672C25.6569 21.3672 27 22.7103 27 24.3672Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const FaceToFaceAddFriend = defineComponent({
    name: 'QFaceToFaceAddFriend',
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

  FaceToFaceAddFriend.install = (app) => {
    app.component(FaceToFaceAddFriend.name, FaceToFaceAddFriend);
  }

  export default FaceToFaceAddFriend;
</script>
