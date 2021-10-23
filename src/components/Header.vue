<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">

            <div class="navbar-nav ms-auto">
                <a v-on:click="logout" class="nav-item nav-link" href="#">Logout</a>
            </div>
        </div>
    </div>
</nav>

<h1>Projects</h1>
<div class="pagination justify-content-center">
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" v-on:click="$router.push({name:'ProjectPageOne'})">1</a></li>
            <li class="page-item"><a class="page-link" v-on:click="$router.push({name:'ProjectPageTwo'})">2</a></li>
            <li class="page-item"><a class="page-link" v-on:click="$router.push({name:'ProjectPageThree'})">3</a></li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'Signin'
            })
        }
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>
