export default {
  install(Vue, options) {
    Vue.prototype.$eventBus = new Vue()
    Vue.prototype.$cloneObj = function(object) {
      return JSON.parse(JSON.stringify(object))
    }
    Vue.prototype.$moveItem = function(arr, from, to) {
      if (to < 0 || to > arr.length - 1) {
        return
      }
      const item = arr[from]
      arr.splice(from, 1)
      arr.splice(to, 0, item)
    }
    Vue.prototype.$scrollTo = function(
      id = false,
      offset = 0,
      refs = false,
      ref = false
    ) {
      try {
        let target = false
        if (id) {
          target = document.querySelector(id)
          if (!target) {
            return false
          }
        }
        if (refs && ref) {
          target = refs[ref]
          if (!target) {
            return false
          }
        }
        let top = target.offsetTop
        if (!top && refs && ref) {
          top = refs[ref][0].offsetTop
        }
        if (!top) {
          return false
        }
        window.scrollTo({
          top: top + offset,
          behavior: 'smooth',
        })
        return true
      } catch (error) {
        return false
      }
    }
    Vue.prototype.$scrollToTop = function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    Vue.prototype.$switchArray = function(i, arr, keyName) {
      for (const key in arr) {
        if (i !== key) {
          Vue.set(arr[key], keyName, false)
        }
      }
      Vue.set(arr[i], keyName, true)
    }
    Vue.prototype.$switchActive = function(i, arr) {
      for (const key in arr) {
        if (i !== key) {
          Vue.set(arr[key], 'active', false)
        }
      }
      Vue.set(arr[i], 'active', true)
    }
    Vue.prototype.$switchActiveReverse = function(i, arr) {
      for (const key in arr) {
        if (i !== key) {
          Vue.set(arr[key], 'active', true)
        }
      }
      Vue.set(arr[i], 'active', false)
    }
    Vue.prototype.$toggleArray = function(i, arr, keyName) {
      for (const key in arr) {
        if (i !== key) {
          Vue.set(arr[key], keyName, false)
        }
      }
      if (arr[i][keyName]) {
        Vue.set(arr[i], keyName, false)
      } else {
        Vue.set(arr[i], keyName, true)
      }
    }
    Vue.prototype.$setUrlParameter = function(name, value) {
      const url = new URL(document.location.href)
      const params = new URLSearchParams(url.search.slice(1))

      params.set(name, value)
      const paramsString = url.pathname + '?' + params.toString()

      history.pushState(null, null, paramsString)
      window.dispatchEvent(new Event('popstate'))
    }
    Vue.prototype.$appendUrlParameter = function(name, value) {
      const url = new URL(document.location.href)
      const params = new URLSearchParams(url.search.slice(1))

      params.append(name, value)
    }
    Vue.prototype.$getUrlParameter = function(name) {
      const params = new URLSearchParams(document.location.search.substring(1))
      const param = params.get(name)
      return param
    }
    Vue.prototype.$delUrlParameter = function(name) {
      const url = new URL(document.location.href)
      const params = new URLSearchParams(url.search.slice(1))

      params.delete(name)
      const paramsString = url.pathname + '?' + params.toString()

      history.pushState(null, null, paramsString)
      window.dispatchEvent(new Event('popstate'))
    }
    Vue.prototype.$getRandom = function(arr = []) {
      return arr[Math.floor(Math.random() * arr.length)]
    }
    Vue.prototype.$validate = function(form) {
      debugger
      let valid = true

      for (const key in form) {
        if (typeof form[key].error === 'undefined') {
          continue
        }
        if (typeof form[key].value === 'string') {
          form[key].value = form[key].value.trim()
        } else if (form[key].value === null) {
          form[key].value = ''
        } else {
          continue
        }
        let error = ''
        switch (key) {
          case 'name':
            if (form[key].value.length < 1) {
              error = 'Please enter correct name'
            }
            break
          case 'in':
          case 'out':
            if (form[key].value.length < 1) {
              error = '???????????????? ????????'
            }
            break
          case 'phone':
            if (form[key].value.length < 18) {
              error = '???????????????? ?????????? ????????????????'
            }
            break
          // case 'contract':
          //   if (form[key].value.length < 6) {
          //     error = '???????????????? ?????????? ???? ?????????????? ???????????? ???? ??????????????'
          //   }
          //   break
          case 'email':
            if (form[key].value.length < 4) {
              error = 'Please enter correct address'
            } else if (
              !form[key].value.includes('@') ||
              !form[key].value.includes('.')
            ) {
              error = 'Please enter correct address'
            }
            break
          case 'message':
          case 'text':
            if (form[key].value.length < 4) {
              error = 'error'
            }
            break
          case 'discord':
            if (form[key].value.length < 4) {
              error = 'Please enter correct address'
            }
            break
          case 'tokens':
            if (form[key].value === '') {
              error = 'Please choose your collection`s blockchain'
            }
            break
          case 'twitter':
            if (form[key].value.length < 4) {
              error = 'Please enter correct address'
            }
            break

          case 'number':
            if (form[key].value === '') {
              error = 'Please enter correct number'
            }
            break
          case 'price':
            if (form[key].value === '') {
              error = 'Please enter correct number'
            }
            break
          case 'date':
            if (
              form[key].value === '' ||
              form[key].minutesVal === '' ||
              form[key].hoursVal === ''
            ) {
              error = 'Please enter correct information'
            }
            break
          case 'info':
            if (form[key].value.length < 4) {
              error = 'Please add necessary information'
            } else if (form[key].value.length > 160) {
              error = 'Please use 160 characters maximum'
            }
            break
          case 'links':
            if (form[key].value.length < 4) {
              error = 'Please add necessary information'
            }
            break
          case 'accept':
            if (!form[key].value) {
              error = 'error'
            }
            break
        }
        if (error !== '') {
          valid = false
        }
        form[key].error = error
        // if (form[key].id == 'email') {
        form[key].success = 'Thanks for subscribing!'
        // }
      }
      setTimeout(() => {
        for (let key in this.form) {
          if (typeof this.form[key].error !== 'undefined') {
            this.form[key].error = ''
          }
          if (typeof this.form[key].success !== 'undefined') {
            this.form[key].success = ''
          }
        }
      }, 3000)
      return valid
    }
  },
}
