<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h3>會員註冊</h3>
            <form id="registerForm" novalidate @submit.prevent="validate">
                <div class="input-group">
                    <label for="account" class="input-group-text">帳號</label>
                    <input type="text" class="form-control" v-model.trim="userData.username" id="account" required autofocus autocomplete="off">
                    <span  v-if="!validity.userNameRequired" class="input-group-text bg-danger text-white" ><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3"><small v-if="!validity.userNameRequired" class="text-danger">帳號一定要輸入</small></div>
                <div class="input-group">
                    <label for="pwd1" class="input-group-text">密碼</label>
                    <input type="password" class="form-control" v-model.trim="userData.pwd1" id="pwd1" autocomplete="off">
                    <span v-if="!validity.pwdRequired" class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3"><small v-if="!validity.pwdRequired" class="text-danger">密碼一定要輸入</small></div>

                <div class="input-group">
                    <label for="pwd2" class="input-group-text">密碼確認</label>
                    <input type="password" class="form-control" v-model="userData.pwd2" id="pwd2" autocomplete="off">
                    <span v-if="!validity.pwdConfirm" class="input-group-text bg-danger text-white hide"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3">
                    <small v-if="!validity.pwdConfirm" class="text-danger hide">密碼不一致</small>
                </div>
                <div class="input-group">
                    <label for="email" class="input-group-text">電子郵件</label>
                    <input type="email" v-model.trim="userData.useremail" class="form-control" id="email">
                    <span v-if="!validity.emailRequired || !validity.emailFormat" class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3">
                    <small v-if="!validity.emailRequired" class="text-danger">電子郵件要輸入</small><br>
                    <small v-if="!validity.emailFormat" class="text-danger">電子郵件格式不正確</small>
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
import { ref } from 'vue';



const userData = ref({
    "username":"",
    "pwd1":"",
    "pwd2":"",
    "useremail":""
})

const validity = ref({
    "userNameRequired":true,
    "pwdRequired":true,
    "pwdFormat":true,
    "emailRequired":true,
    'pwdConfirm':true,
    'emailFormat':true,
    'isValid':false
})

//new RegExp("^[^@\s]+@[^@\s]+\.[^@\s]+$")
const emailRule = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const pwdRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const validate = ()=>{
    //解構賦值
    const { username, pwd1, pwd2, useremail } = userData.value
   
    //驗證資料正確性

    //資料一定要輸入的驗證
    validity.value.userNameRequired = username.length > 0
    validity.value.pwdRequired = pwd1.length > 0
    validity.value.emailRequired = useremail.length > 0

    //密碼跟密碼確認需一致
    validity.value.pwdConfirm = pwd1 === pwd2

    //Email格式是否正確
    validity.value.emailFormat = emailRule.test(useremail)


    // console.log(validity.value)
    // console.log(userData.value)

    validity.value.isValid = validity.value.userNameRequired  && validity.value.pwdRequired && validity.value.emailRequired && validity.value.pwdConfirm && validity.value.emailFormat 

    if(validity.value.isValid){
        //todo 將userData資料透過fecth()傳送到API
        alert('送出')
    }
}

</script>