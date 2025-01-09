<template>
  <section class="contacts">
    <div class="contacts__list container">
      <div class="contacts__cube">
        <h1 class="main-title title">КОНТАКТНАЯ <span>ИНФОРМАЦИЯ</span></h1>
        <p class="contacts__text">«Digital Project»</p>
        <p class="contacts__subtext">г. Караганда, ул. Телевизионная 10</p>
        <p class="contacts__tel">+7 (701) 77 76 811</p>
        <p class="contacts__mail">Galym.sultanov@mail.ru</p>
        <button class="contacts__btn link" href="#">Орабтная связь</button>
      </div>
      <div class="contacts__map" id="map"></div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .contacts {
    padding-top: 0;
    padding-bottom: 120px;

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 34px;
      justify-content: space-between;
      margin-right: 0;
      padding-right: 0;
      max-width: 1305px;
    }

    &__cube {
      padding-top: 60px;
    }

    &__title {
      margin-bottom: 34px;
    }

    &__text,
    &__tel {
      font-size: 18px;
      font-weight: 700;
    }

    &__subtext {
      margin-bottom: 43px;
      line-height: 141%;
    }

    &__tel {
      margin-bottom: 52px;
    }

    &__mail {
      margin-bottom: 32px;
    }

    &__btn {
      color: #fff;
      background: #333;
    }

    &__map {
      width: 790px;
      height: 500px;
    }

    [class*="copyrights-pane"] {
      display: none;
    }
  }
</style>