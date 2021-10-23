<template>
<Header />

<div class="container-fluid">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="wrapper">
                <div class="row">
                    <div class="col-4"><img src="../assets/p1.jpg" alt="p1"></div>
                    <div class="col-8">
                        <h1>Project-11</h1>

                        <div class="para" v-for="content in contents" :key="content">
                            <div v-if="content.contentone.length<=110">Welcome, {{ content.contentone }}</div>
                            <div v-else>Welcome, {{ content.contentone.substring(0,110)+".." }}</div>
                        </div>

                        <div class="button">
                            <button v-on:click="$router.push({name:'Projecteleven'})">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>

    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="wrapper">
                <div class="row">
                    <div class="col-4"><img src="../assets/p1.jpg" alt="p1"></div>
                    <div class="col-8">
                        <h1>Project-12</h1>

                        <div class="para" v-for="content in contents" :key="content">
                            <div v-if="content.contentone.length<=110">Welcome, {{ content.contentone }}</div>
                            <div v-else>Welcome, {{ content.contentone.substring(0,110)+".." }}</div>
                        </div>

                        <div class="button">
                            <button v-on:click="$router.push({name:'Projecttwelve'})">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>

    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="wrapper">
                <div class="row">
                    <div class="col-4"><img src="../assets/p1.jpg" alt="p1"></div>
                    <div class="col-8">
                        <h1>Project-13</h1>

                        <div class="para" v-for="content in contents" :key="content">
                            <div v-if="content.contentone.length<=110">Welcome, {{ content.contentone }}</div>
                            <div v-else>Welcome, {{ content.contentone.substring(0,110)+".." }}</div>
                        </div>

                        <div class="button">
                            <button v-on:click="$router.push({name:'Projectthirteen'})">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>

    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="wrapper">
                <div class="row">
                    <div class="col-4"><img src="../assets/p1.jpg" alt="p1"></div>
                    <div class="col-8">
                        <h1>Project-14</h1>

                        <div class="para" v-for="content in contents" :key="content">
                            <div v-if="content.contentone.length<=110">Welcome, {{ content.contentone }}</div>
                            <div v-else>Welcome, {{ content.contentone.substring(0,110)+".." }}</div>
                        </div>

                        <div class="button">
                            <button v-on:click="$router.push({name:'Projectfourteen'})">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>

    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="wrapper">
                <div class="row">
                    <div class="col-4"><img src="../assets/p1.jpg" alt="p1"></div>
                    <div class="col-8">
                        <h1>Project-15</h1>

                        <div class="para" v-for="content in contents" :key="content">
                            <div v-if="content.contentone.length<=110">Welcome, {{ content.contentone }}</div>
                            <div v-else>Welcome, {{ content.contentone.substring(0,110)+".." }}</div>
                        </div>

                        <div class="button">
                            <button v-on:click="$router.push({name:'Projectfifteen'})">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'ProjectPageThree',
    components: {
        Header
    },
    data() {
        return {
            contents: [{
                contentone: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum d',
                contenttwo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum d',
                contentthree: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum d',
                contentfour: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit',
                contentfive: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati placeat ab Repellendus eligendi odit Lorem ipsum d'
            }]
        }
    },
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
@media (min-width:100px) and (max-width:800px) {
    .wrapper {
        width: 400px;
    }

    .wrapper h1,
    button {
        margin-left: 2rem;
    }

    .para {
        margin-left: 1.5rem;
    }
}

@media (max-width:1000px) {
    .wrapper {
        width: 350px;
    }

    .wrapper h1,
    button {
        margin-left: 1.5rem;
    }

    .para {
        margin-left: 1.5rem;
    }
}

.wrapper {
    padding: 20px;
    background: #eaeaea;
    margin: 50px auto;
    border-radius: 1rem;

}

.demo-11,
.demo-12,
.demo-13,
.demo-14,
.demo-15 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 80px;
    max-lines: 3;
}

.container-fluid {
    text-align: left;
}

.card {
    margin-bottom: 1rem;
    border-radius: 1rem;
}

.container-fluid button {
    margin-bottom: 1rem;
    background-color: blueviolet;
    padding: 0.5rem;
    color: white;
    font-weight: bold;
    text-align: center;
    border: none;
    width: 10rem;
}

.container-fluid img {
    width: 80px;
    height: 80px;
    border-radius: 0.5rem;
    margin-top: 3rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
}

.container-fluid h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
}
</style>
