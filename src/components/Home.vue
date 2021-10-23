<template>
<ProjectPageOne />
</template>

<script>
import ProjectPageOne from './ProjectPageOne.vue'
export default {
    name: 'Home',
    components: {
        ProjectPageOne
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
