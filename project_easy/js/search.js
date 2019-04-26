Vue.component('search',{
    props: ['userSaearch'],
    template: `
    <form action="#" class="search-form" @submit.prevent="$emit('filter', userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            `
}) 