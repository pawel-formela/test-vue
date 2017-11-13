<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class="list-group-item" style="cursor: pointer" tag="li" to="/user/1" exact
                         active-class="active">User 1
            </router-link>
            <router-link class="list-group-item" style="cursor: pointer" tag="li" to="/user/2" exact
                         active-class="active">User 2
            </router-link>
            <router-link class="list-group-item" style="cursor: pointer" tag="li" to="/user/3" exact
                         active-class="active">User 3
            </router-link>
        </ul>
    </div>
</template>