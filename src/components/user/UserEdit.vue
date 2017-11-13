<template>
    <div>
        <h3>Edit the User</h3>
        <div style="height:700px"></div>
        <p>{{$route.query.locale}}</p>
        <button @click="confirmed = true" class="btn btn-primal">Confirm</button>
        <p id="data">dasdas</p>
    </div>
</template>

<script>
    export default {

        data: function () {
            return {confirmed: false}
        },
        beforeRouteLeave(to, from, next) {
            console.log('LEAVE');
            if (this.confirmed === true) {
                next();
            } else {
                next(false);
            }

        },
    }
</script>