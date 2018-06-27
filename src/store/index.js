import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },

  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },

  actions: {
    createPost ({commit, state}, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('setPost', {post, postId})
      commit('appendPostToThread', {threadId: post.threadId, postId})
      commit('appendPostToUser', {userId: post.userId, postId})
    },

    createThread ({state, commit}, {text, title, forumId}) {
      const threadId = 'greatThread' + Math.random()
      const userId = state.authId
      const publishedAt = Math.floor(Date.now() / 1000)

      const thread = { '.key': threadId, title, forumId, publishedAt, userId }

      commit('setThread', {threadId, thread})
    },

    updateUser ({commit}, user) {
      commit('setUser', {userId: user['.key'], user})
    }
  },

  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.posts, postId, post)
    },

    setUser (state, {user, userId}) {
      Vue.set(state.users, userId, user)
    },

    setThread (state, {thread, threadId}) {
      Vue.set(state.thread, threadId, thread)
    },

    appendPostToThread (state, {postId, threadId}) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },

    appendPostToUser (state, {postId, userId}) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }

})
