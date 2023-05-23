<template>
    <header>
        <a class="logo" href="#">WSR</a>
        <ul class="nav-menu">
            <li><a href="#">About</a></li>
        </ul>
    </header>
</template>

<script>

export default {
  name: 'WHeader',
}
</script>

<style scoped> 
header {
    background-color: var(--color-bg);
    box-shadow: 0 -1em 1em var(--color-accent);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: sticky;
}
.logo {
    color: var(--color-text);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.4rem;
}
.logo::before {
    content: '<';
    color: var(--color-accent)
}
.logo::after {
    content: '/>';
    color: var(--color-accent)
}
.nav-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.nav-menu a {
    color: var(--color-text);
    text-decoration: none;
    transition: .25s;
}
.nav-menu a:hover {
    color: var(--color-accent);
}
</style>