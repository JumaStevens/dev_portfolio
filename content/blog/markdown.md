# Custom Vue.js delimiters

The use of custom Vue.js delimiters (use `[[ ]]` instead of default `{{ }}`), helpful on platforms like Shopify where delimiters conflict.

Add the custom delimiters as an option to the Vue instance.
```js
new Vue({
  el: '#app',
  data: {
    return {}
  },
  delimiters: ['[[', ']]']
})
```
