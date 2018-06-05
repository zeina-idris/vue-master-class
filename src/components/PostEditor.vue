<template>
<form @submit.prevent="save" >
  <div class="form-group">
    <textarea 
      name="" 
      id="" 
      cols="30" 
      rows="10" 
      class="form-input"
      v-model="text" 
    ></textarea>
  </div>
  <div class="form-actions">
    <button class="btn-blue" type="submit">Submit post</button>
  </div>
</form>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true
    }
  },

  data () {
    return {
      text: ''
    }
  },

  methods: {
    save () {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
      }
      this.text = ''

      this.$emit('save', {post})
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>