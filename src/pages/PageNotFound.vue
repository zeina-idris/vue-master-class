<template>
  <div class="col-full">
    <h1 class="not-found-page-header">Not Found</h1>
    <p class="not-found-page-text-large">OOPS, we couldn't find what you're looing for. Why don't you 
      <router-link :to="{name: 'Home'}">
        go home instead?
      </router-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>

.col-full{
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
}

.not-found-page-header{
  font-size: 50px;
}

.not-found-page-text-large{
  font-weight: lighter;
  font-size: 20px;
}
</style>