<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-4 full-img"></div>
        <div class="col-4">
            <h1>Project-5</h1>
            <p class="demo-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat ab? Repellendus, eligendi odit? Quidem, dolorum dolorem ea animi eius cumque quod nemo. Quas, ipsa fugiat cupiditate quia explicabo nobis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat ab? Repellendus, eligendi odit? Quidem, dolorum dolorem ea animi eius cumque quod nemo. Quas, ipsa fugiat cupiditate quia explicabo nobis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat ab? Repellendus, eligendi odit? Quidem, dolorum dolorem ea animi eius cumque quod nemo. Quas, ipsa fugiat cupiditate quia explicabo nobis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat
            </p>
        </div>
        <div class="col-4"></div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Projectfive',
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'Signin'
            })
        }
    }
}
</script>

<style scoped>
.container-fluid {
    text-align: justify;
}

.full-img {
    background-image: url("../assets/p1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
