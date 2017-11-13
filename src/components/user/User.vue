<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded Id: {{id}} </p>
        <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

        data: function () {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) {
                console.log(from)
                console.log(to)
                this.id = to.params.id
            }

        },
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>