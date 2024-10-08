<script setup>
    
</script>

<template>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="https://www.ispan.com.tw/img/Logoslogan_sm.png" alt="Bootstrap" width="60">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">        
          <RouterLink class="nav-link" activeClass="active"  :to="{name:'home'}">首頁</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link"  activeClass="active"  :to="{name:'about'}">關於</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active"  :to="{name:'contact'}">聯絡</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active"  :to="{name: 'member', params:{id:3}}">會員中心</RouterLink>
        </li>
      </ul>
    </div>

    <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button class="btn btn-primary"><i class="bi bi-cart4"></i></button>
    </div>
  </div>
</nav>
</template>

<style lang="css" scoped>

</style>