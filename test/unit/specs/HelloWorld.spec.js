import Vue from 'vue'
import SignIn from '@/components/SignIn'

describe('SignIn.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SignIn)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      
  })
})
