<template>
  <transition>
    <div class="banner" v-if="isModalOpen">
      <button class="banner-exit exit" @click.prevent="closeModal">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999887 1.00097L13.9997 14.0006" stroke="#969696" stroke-width="2" />
          <path d="M1.00011 13.9998L13.9997 0.999979" stroke="#969696" stroke-width="2" />
        </svg>
      </button>
      <svg class="banner-image" width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71 112C93.6437 112 112 93.6437 112 71C112 48.3563 93.6437 30 71 30C48.3563 30 30 48.3563 30 71C30 93.6437 48.3563 112 71 112Z" fill="#0DC332" />
        <path d="M133.5 71C133.5 105.518 105.518 133.5 71 133.5C36.4822 133.5 8.5 105.518 8.5 71C8.5 36.4822 36.4822 8.5 71 8.5C105.518 8.5 133.5 36.4822 133.5 71Z" stroke="#D1D1D1" />
        <path d="M92 56L66.1538 85L50 72.1111" stroke="white" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p class="banner-title">Спасибо !</p>
      <p class="banner-text">Ваше сообщение отправлено мы свяжемся с вами в ближайшее время</p>
      <button class="banner-btn link" @click.prevent="closeModal">ВЕРНУТСЯ НАЗАД</button>
    </div>
  </transition>
</template>

<script setup lang="ts">
  const emit = defineEmits(['close']);
  defineProps({isModalOpen: Boolean});

  const closeModal = () => {
    emit('close');
  };
</script>
