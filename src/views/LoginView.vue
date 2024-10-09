<script setup>

</script>

<template>

    <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center mb-5">
                            <a href="#!">
                                <img src="https://www.ispan.com.tw/img/Logoslogan_sm.png" alt="BootstrapBrain Logo"
                                    width="175">
                            </a>
                        </div>
                    </div>
                </div>
                <form action="#!">
                    <div class="row gy-3 gy-md-4 overflow-hidden">
                        <div class="col-12">
                            <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope"></i>
                                </span>
                                <input type="email" class="form-control" name="email" id="email" required>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-key"></i>
                                </span>
                                <input type="password" class="form-control" name="password" id="password" value=""
                                    required>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-grid">
                                <button class="btn btn-primary btn-lg" type="submit">Log In</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <div class="col-12">
                        <hr class="mt-5 mb-4 border-secondary-subtle">
                        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">

                            <RouterLink :to="{ name: 'register' }" class="link-secondary text-decoration-none">Create
                                new
                                account</RouterLink>
                            <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="css" scoped></style>