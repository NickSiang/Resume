<script>

</script>

<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

nav {
    width: 100%;
    background: rgb(120, 120, 120);
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
}

ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

li {
    list-style: none;
}

a {
    color: white;

}

a:hover {
    text-decoration: underline;
}

</style>