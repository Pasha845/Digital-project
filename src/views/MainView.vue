<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__item">
        <h1 class="main-title title">PROJECT <span>NURTOWN</span></h1>
        <div class="hero__fraction flex"></div>
      </div>
      <div>
        <swiper class="hero__slider"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          :modules="modules"
        >
          <div class="hero__cube flex">
            <button class="hero__btn hero__prev" ref="prev">
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.5C18 4.22386 17.7761 4 17.5 4L1.5 4C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5L17.5 5C17.7761 5 18 4.77614 18 4.5Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.35355 0.646447C5.15829 0.451184 4.84171 0.451184 4.64645 0.646447L0.792894 4.5L4.64645 8.35355C4.84171 8.54882 5.15829 8.54882 5.35355 8.35355C5.54882 8.15829 5.54882 7.84171 5.35355 7.64645L2.20711 4.5L5.35355 1.35355C5.54882 1.15829 5.54882 0.841709 5.35355 0.646447Z" fill="currentColor" />
              </svg>
            </button>
            <button class="hero__btn hero__next" ref="next">
              <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.935303 4.5C0.935303 4.22386 1.15916 4 1.4353 4L17.4353 4C17.7114 4 17.9353 4.22386 17.9353 4.5C17.9353 4.77614 17.7114 5 17.4353 5L1.4353 5C1.15916 5 0.935303 4.77614 0.935303 4.5Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5817 0.646447C13.777 0.451184 14.0936 0.451184 14.2889 0.646447L18.1424 4.5L14.2889 8.35355C14.0936 8.54882 13.777 8.54882 13.5817 8.35355C13.3865 8.15829 13.3865 7.84171 13.5817 7.64645L16.7282 4.5L13.5817 1.35355C13.3865 1.15829 13.3865 0.841709 13.5817 0.646447Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <swiper-slide class="hero__image">
            <picture>
              <source srcset="/img/hero.webp" media="(min-width: 320px) and (max-width: 576px)">
              <source srcset="/img/hero.avif" media="(min-width: 577px)">
              <img loading="eager" srcset="/img/hero.avif" alt="Hero image" src="#" width="770" height="829">
            </picture>
            <a class="hero__link link" href="#">
              <span class="flex">
                ВЗГЛЯНУТЬ
                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="currentColor" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="currentColor" />
                </svg>
              </span>
            </a>
          </swiper-slide>
          <swiper-slide class="hero__image">
            <picture>
              <source srcset="/img/hero.webp" media="(min-width: 320px) and (max-width: 576px)">
              <source srcset="/img/hero.avif" media="(min-width: 577px)">
              <img loading="eager" srcset="/img/hero.avif" alt="Hero image" src="#" width="770" height="829">
            </picture>
            <a class="hero__link link" href="#">
              <span class="flex">
                ВЗГЛЯНУТЬ
                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="currentColor" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="currentColor" />
                </svg>
              </span>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container">
      <div class="about__div">
        <ul class="about__list flex">
          <li class="about__images">
            <picture>
              <source srcset="/img/about-1.webp" media="(min-width: 320px) and (max-width: 576px)">
              <source srcset="/img/about-1.avif" media="(min-width: 577px)">
              <img loading="lazy" srcset="/img/about-1.avif" alt="About image" src="#" width="270" height="265">
            </picture>
            <picture>
              <source srcset="/img/about-2.webp" media="(min-width: 320px) and (max-width: 576px)">
              <source srcset="/img/about-2.avif" media="(min-width: 577px)">
              <img loading="lazy" srcset="/img/about-2.avif" alt="About image" src="#" width="270" height="140">
            </picture>
          </li>
          <li>
            <picture>
              <source srcset="/img/about-3.webp" media="(min-width: 320px) and (max-width: 576px)">
              <source srcset="/img/about-3.avif" media="(min-width: 577px)">
              <img loading="lazy" srcset="/img/about-3.avif" alt="About image" src="#" width="270" height="345">
            </picture>
          </li>
        </ul>
        <div class="about__cube">
          <h2 class="title mb-20">О компании</h2>
          <p class="about__text mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <a class="about__link link" href="#">
            <span class="flex">
              ЧИТАТЬ
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="tasks">
    <div class="container">
      <h2 class="title mb-60">Основные задачи</h2>
      <ol class="tasks__list flex">
        <li class="tasks__item">
          <p>Создание комфортных условий и повышение качества обслуживания клиентов</p>
        </li>
        <li class="tasks__item">
          <p>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="projects">
    <div class="container">
      <h2 class="projects__title title mb-60">Наши проекты</h2>
      <ul class="projects__list">
        <li class="projects__item">
          <picture>
            <source srcset="/img/projects-1.webp" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/projects-1.avif" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/projects-1.avif" alt="Projects image" src="#" width="570" height="255">
          </picture>
          <div class="projects__cube">
            <h3 class="projects__subtitle">ДОСУГОВЫЙ ЦЕНТР</h3>
            <a class="projects__sublink" href="#">
              <span class="flex">
                ПОДРОБНЕЕ
                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="currentColor"/>
                </svg>
              </span>                
            </a>
          </div>
        </li>
        <li>
          <picture>
            <source srcset="/img/projects-2.webp" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/projects-2.avif" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/projects-2.avif" alt="Projects image" src="#" width="570" height="255">
          </picture>
        </li>
        <li>
          <picture>
            <source srcset="/img/projects-3.webp" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/projects-3.avif" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/projects-3.avif" alt="Projects image" src="#" width="270" height="255">
          </picture>
        </li>
        <li>
          <picture>
            <source srcset="/img/projects-4.webp" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/projects-4.avif" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/projects-4.avif" alt="Projects image" src="#" width="470" height="255">
          </picture>
        </li>
        <li>
          <picture>
            <source srcset="/img/projects-5.webp" media="(min-width: 320px) and (max-width: 576px)">
            <source srcset="/img/projects-5.avif" media="(min-width: 577px)">
            <img loading="lazy" srcset="/img/projects-5.avif" alt="Projects image" src="#" width="370" height="255">
          </picture>
        </li>
      </ul>
      <div class="projects__link-div">
        <router-link class="projects__link link" to="/projects">
          <span class="flex">
            ВСЕ ПРОЕКТЫ
            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="white" />
            </svg>
          </span>
        </router-link>
      </div>
    </div>
  </section>

  <section class="contact">
    <div class="container">
      <h2 class="contact__title title">Связаться с нами</h2>
      <div class="contact__list">
        <form class="contact__form" @submit.prevent="userForm">
          <label class="contact__label">
            <input class="contact__input" type="text" id="name" name="name" placeholder="Имя">
          </label>
          <label class="contact__label">
            <input class="contact__input" type="tel" name="tel">
            <span class="contact__span">Номер телефона<span>*</span></span>
          </label>
          <label class="contact__label">
            <input class="contact__input" type="text" name="email">
            <span class="contact__span">E-mail<span>*</span></span>
          </label>
          <label class="contact__label">
            <input class="contact__input" type="text" name="product" placeholder="Интересующий товар/услуга">
          </label>
          <label class="contact__label">
            <textarea class="contact__input contact__textarea" name="message"></textarea>
            <span class="contact__span">Сообщение<span>*</span></span>
          </label>
          <label class="contact__checkbox">
            <input type="checkbox" value="value-1" checked>
            <span>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</span>
          </label>
          <button class="contact__btn link" type="submit">
            <span class="flex">
              ОТПРАВИТЬ
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="white" />
              </svg>
            </span>
          </button>
        </form>
        <picture class="contact__img">
          <source srcset="/img/contact.webp" media="(min-width: 320px) and (max-width: 576px)">
          <source srcset="/img/contact.avif" media="(min-width: 577px)">
          <img loading="lazy" srcset="/img/contact.avif" alt="Contact image" src="#" width="749" height="369">
        </picture>
      </div>
    </div>
  </section>

  <ModalOpen :isModalOpen = "isModalOpen" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import 'swiper/css/navigation';
  import { Navigation } from 'swiper';

  
  import ModalOpen from '@/components/ModalOpen.vue';

  const isModalOpen = ref(false);

  const userForm = () => {
    isModalOpen.value = true;
  };
</script>

<style lang="scss">

  /* hero */

  .hero {
    padding-top: 3px;
    padding-bottom: 60px;

    &__container {
      display: flex;
      justify-content: space-between;
      gap: 70px;
    }

    &__slider {
      width: 770px;
    }

    &__item {
      margin-top: 329px;
    }

    &__cube {
      margin-bottom: 90px;
    }

    &__btn {
      border: 1px solid #F2F2F2;
      padding: 21px 16.5px;
      line-height: 1px;
      background: #F9F9F9;
      cursor: pointer;
      transition: color .3s, background-color .3s;
    }

    &__btn:hover {
      color: #fff;
      background-color: #00b6c3;
    }

    &__dis {
      background: #fff;
      pointer-events: none;
    }

    &__prev {
      margin-right: 22.5px;
    }

    &__fraction {
      font-size: 24px;
      line-height: 1;
      font-weight: 400;
      color: #bdbdbd;
    }

    &__arrow {
      margin-left: 26px;
      margin-right: 32px;
    }

    &__image {
      position: relative;
    }

    &__link {
      position: absolute;
      bottom: 0;
      left: 0;

      svg {
        margin-left: 7px;
      }
    }
  }

  @media (max-width: 1024px) {
    .hero {
      &__container {
        flex-wrap: wrap;
      }

      &__item {
        margin-top: 0;
      }
      
      &__title,
      &__cube {
        margin-bottom: 20px;
      }
    }
  }

  /* about */

  .about {
    padding-top: 60px;
    padding-bottom: 60px;

    &__div {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      padding-top: 30px;
      padding-left: 100px;
      background: #fbfbfb;
    }

    &__list {
      flex-wrap: wrap;
      gap: 30px;
    }

    &__images {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__cube {
      max-width: 400px;
    }
  }

  @media (max-width: 1024px) {
    .about {
      &__div {
        flex-direction: column-reverse;
        padding: 0;
      }

      &__list {
        flex-direction: column;
      }
    }
  }

  /* tasks */

  .tasks {
    padding-top: 60px;
    padding-bottom: 60px;

    &__list {
      counter-reset: num;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 40px;
    }

    &__item {
      position: relative;
      font-size: 22px;
      line-height: 164%;
      font-weight: 400;
      color: #333;
    }

    &__item:before {
      content: counter(num); 
      counter-increment: num;
      display: inline-block;	
      position: absolute;
      left: 0;
      top: 50%;
      font-family: "SFProDisplay", sans-serif;
      font-size: 200px;
      font-weight: 900;
      color: #f2f2f2;
      transform: translateY(-50%);
    }

    &__item p {
      padding-left: 134px;
    }

    &__item:first-child p {
      max-width: 279px;
    }

    &__item:last-child p {
      padding-left: 150px;
      max-width: 420px;
    }
  }

  /* projects */

  .projects {
    padding-top: 60px;
    padding-bottom: 60px;

    &__title {
      margin-bottom: 64px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      margin-bottom: 30px;
    }

    &__item {
      position: relative;
      img {
        filter: brightness(50%);
      }
    }

    &__cube {
      position: absolute;
      top: 44px;
      left: 50%;
      transform: translateX(-50%);
    }

    &__subtitle {
      margin-bottom: 18px;
      font-size: 64px;
      line-height: 1;
      font-weight: 700;
      color: #fff;
    }

    &__sublink {
      display: inline-block;
      font-size: 12px;
      line-height: 1;
      letter-spacing: 0.2em;
      color: #fff;
      transition: color .3s;
      svg {
        margin-left: 13px;
      }
    }

    &__sublink:hover {
      color: rgb(93, 197, 238);
    }

    &__link-div {
      display: flex;
      justify-content: flex-end;
    }

    &__link {
      padding-left: 39px;
      padding-right: 42px;
      color: #fff;
      background: #333;
      svg {
        margin-left: 9px;
      }
    }
  }

  @media (max-width: 576px) {
    .projects {
      &__subtitle {
        font-size: 30px;
      }  
    }
  }

  /* contact */

  .contact {
    padding-top: 55px;
    padding-bottom: 120px;

    &__title {
      margin-bottom: 26px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      width: 391px;
      gap: 10px;
    }

    &__label {
      position: relative;
      display: inline-block;
      overflow: hidden;
      padding: 10px 19px;
      background: #f3f3f3;
    }

    &__input {
      border: none;
      width: 100%;
      background: #f3f3f3;
    }

    &__input::placeholder {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.04em;
      color: #8d8d8d;
    }

    &__span {
      position: absolute;
      z-index: 0;
      top: 10px;
      left: 21px;
      display: none;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.04em;
      color: #8d8d8d;
      cursor: text;
      span {
        color: #c30000;
      }
    }

    &__input:invalid + &__span {
      display: inline;
    }

    &__textarea {
      padding-top: 4px;
      height: 114px;
      resize: none;
    }

    &__checkbox {
      margin-top: 12px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    &__checkbox > input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &__checkbox > span {
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.03em;
      user-select: none;
    }

    &__checkbox > span::before {
      content: '';
      display: inline-block;
      width: 24px;
      height: 23.26px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #F3F3F3;
      border-radius: 4px;
      margin-right: 16px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }

    &__checkbox > input:checked + span::before {
      background-color: #F3F3F3;
      background-image: url("../img/check.svg");
    }

    &__btn {
      padding: 29px 40px;
      width: 140px;
      color: #fff;
      background: #333;
      svg {
        margin-left: 9px;
      }
    }

    &__input:focus {
      outline: none;
    }
  }

  @media (max-width: 576px) {
    .contact {
      &__list {
        flex-direction: column-reverse;
      }

      &__form,
      &__img {
        width: 100%;
      }
    }
  }
</style>