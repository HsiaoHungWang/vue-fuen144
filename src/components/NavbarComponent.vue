<script setup>
import { useTodoStore } from '@/stores/todo';
const todoStore = useTodoStore()

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://www.ispan.com.tw/img/Logoslogan_sm.png" alt="Bootstrap" width="60">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'home' }">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'about' }">關於</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'contact' }">聯絡</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'tabs' }">Tabs</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'animations' }">Animations</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'directives' }">Directives</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" :to="{ name: 'member', params: { id: 3 } }">會員中心
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="d-lg-flex col-lg-3 justify-content-lg-end">
        <RouterLink to="/todos" class="mx-2 btn btn-primary position-relative">
          <i class="bi bi-stickies"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{todoStore.qty}}
            <span class="visually-hidden">unread messages</span>
          </span>
        </RouterLink>
        <button class="mx-2 btn btn-primary"><i class="bi bi-cart4"></i></button>
        <RouterLink class="mx-2 btn btn-primary" to="/login">
          <i class="bi bi-box-arrow-in-right" @click="signin"></i>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped></style>