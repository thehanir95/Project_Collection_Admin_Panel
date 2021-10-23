<template>
<img class="logo" alt="logo" src="../assets/logo.png">

<div class="container-fluid">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <h1>Sign In</h1>

            <form name="signinForm">
                <div class="form-group">
                    <input type="text" v-model="name" class="form-control" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" placeholder="Password">
                </div>

                <button type="submit" v-on:click="validateSignin" class="btn btn-success">Signin</button>
            </form>
        </div>
        <div class="col-4"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Signin',

    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        async validateSignin() {
            if (this.name == "admin" && this.password == "admin") {
                this.$router.push({
                    name: 'Home'
                })
                localStorage.setItem("user-info", JSON.stringify(this.name && this.password))
                this.$router.push({
                    name: 'Home'
                })

            } else {
                alert("Your User Name or Password")

            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'Home'
            })
        }
    }

}
</script>

<style>
.full-img {
    background-image: url("../assets/bg1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.logo {
    border-radius: 50rem;
    width: 20rem;
}

.form-group {
    padding: 2rem;
}
</style>
