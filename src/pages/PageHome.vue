<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>

    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList
  },

  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  }
}
</script>


<style scoped>
h1,
h2 {
  font-weight: bold;
}

p {
  color: rgb(40, 64, 85);
}
</style>
