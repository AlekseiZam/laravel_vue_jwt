<template>
    <div class="container">
        <div class="d-flex p-3">
            <router-link :to="{ name:'users.UsersList'}">UsersList</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
