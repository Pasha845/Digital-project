<template>
  <section class="project">
    <div class="container">
      <h1 class="project__title main-title title">НАШИ <span>ПРОЕКТЫ</span></h1>
      <swiper class="swiper">
        <swiper-slide>
          <ul class="project__list">
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-1.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-1.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-1.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Общеобразовательная школа</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-2.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-2.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-2.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Паркинг на 500 автомобилей</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-3.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-3.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-3.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Проект интерьера офиса</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="project__list">
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-1.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-1.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-1.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Общеобразовательная школа</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-2.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-2.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-2.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Паркинг на 500 автомобилей</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-3.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-3.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-3.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Проект интерьера офиса</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="project__list">
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-1.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-1.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-1.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Общеобразовательная школа</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-2.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-2.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-2.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Паркинг на 500 автомобилей</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-3.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-3.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-3.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Проект интерьера офиса</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="project__list">
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-1.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-1.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-1.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Общеобразовательная школа</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-2.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-2.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-2.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Паркинг на 500 автомобилей</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-3.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-3.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-3.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Проект интерьера офиса</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="project__list">
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-1.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-1.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-1.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Общеобразовательная школа</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-2.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-2.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-2.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Паркинг на 500 автомобилей</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
            <li class="project__item flex">
              <picture>
                <source srcset="/img/project-3.png" media="(min-width: 320px) and (max-width: 576px)">
                <source srcset="/img/project-3.png" media="(min-width: 577px)">
                <img loading="lazy" srcset="/img/project-3.png" alt="Project image" src="#" width="670" height="435">
              </picture>
              <div class="project__cube">
                <h3 class="project__subtitle">Проект интерьера офиса</h3>
                <p class="project__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a class="link" href="#">
                  <span class="flex">
                    СМОТРЕТЬ
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
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
  .project {
    padding-top: 63px;
    padding-bottom: 120px;

    &__title {
      margin-bottom: 60px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 60px;
    }

    &__item {
      background: #FBFBFB;
    }

    &__cube {
      padding: 30px;
    }

    &__subtitle {
      margin-bottom: 20px;
      font-size: 40px;
      line-height: 1;
      font-weight: 300;
      color: #bdbdbd;
    }

    &__text {
      margin-bottom: 64px;
      color: #000;
    }
  }
</style>