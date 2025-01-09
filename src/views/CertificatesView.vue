<template>
  <section class="certificates">
    <div class="container">
      <h1 class="certificates__title main-title title">СЕРТИФИКАТЫ <span>КОМПАНИИ</span></h1>
      <swiper class="swiper">
        <swiper-slide class="certificates__list">
          <picture>
            <source srcset="/img/certificates-1.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-1.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-1.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-2.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-2.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-2.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-3.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-3.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-3.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
        </swiper-slide>
        <swiper-slide class="certificates__list">
          <picture>
            <source srcset="/img/certificates-1.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-1.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-1.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-2.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-2.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-2.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-3.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-3.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-3.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
        </swiper-slide>
        <swiper-slide class="certificates__list">
          <picture>
            <source srcset="/img/certificates-1.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-1.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-1.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-2.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-2.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-2.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-3.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-3.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-3.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
        </swiper-slide>
        <swiper-slide class="certificates__list">
          <picture>
            <source srcset="/img/certificates-1.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-1.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-1.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-2.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-2.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-2.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-3.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-3.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-3.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
        </swiper-slide>
        <swiper-slide class="certificates__list">
          <picture>
            <source srcset="/img/certificates-1.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-1.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-1.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-2.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-2.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-2.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
          <picture>
            <source srcset="/img/certificates-3.png" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/certificates-3.png" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/certificates-3.png" alt="Certificates image" src="#" width="337" height="450">
          </picture>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
</script>

<style lang="scss">
  .certificates {
    padding-top: 63px;
    padding-bottom: 120px;

    &__title {
      margin-bottom: 42px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 78px;
    }
  }
</style>