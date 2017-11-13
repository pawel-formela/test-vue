<template>
    <div>

        <h3>Some User Details</h3>
        <p>id {{ $route.params.id }}</p>
        <router-link
                tag="button" :to="link"
                class="btn btn-primary"
        >Edit
        </router-link>
    </div>

</template>

<script>
    export default {

        data: function () {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'pl'
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            next();
        }
    }
</script>