<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h3>會員註冊</h3>
            <form id="registerForm" novalidate>
                <div class="input-group">
                    <label for="account" class="input-group-text">帳號</label>
                    <input type="text" class="form-control" id="account" required autofocus autocomplete="off">
                    <span class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3"><small class="text-danger">帳號一定要輸入</small></div>
                <div class="input-group">
                    <label for="pwd1" class="input-group-text">密碼</label>
                    <input type="password" class="form-control" id="pwd1" autocomplete="off">
                    <span class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3"><small class="text-danger">密碼一定要輸入</small></div>

                <div class="input-group">
                    <label for="pwd2" class="input-group-text">密碼確認</label>
                    <input type="password" class="form-control" id="pwd2" autocomplete="off">
                    <span class="input-group-text bg-danger text-white hide"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3">
                    <small class="text-danger hide">密碼不一致</small>
                </div>
                <div class="input-group">
                    <label for="email" class="input-group-text">電子郵件</label>
                    <input type="email" class="form-control" id="email">
                    <span class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3">
                    <small class="text-danger">電子郵件要輸入</small><br>
                    <small class="text-danger">電子郵件格式不正確</small>
                </div>

                <button type="submit" class="btn btn-primary" id="buttonSubmit">送出</button>

            </form>

        </div>
        <div class="col-3">

        </div>
    </div>
</template>

<style></style>
<script setup>
const emailRule = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;



</script>