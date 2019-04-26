
  Vue.component('search', {
    props: ['value'],
    template: `
    <form action="#" class="search-form" @submit.prevent="$emit('filter')">
    <input type="text" class="search-field" :value="value"
    @input="$emit('input', $event.target.value)">
    <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
</form>
      
    `
  })