/* --------------------------------
*  JavaScript Document
* -------------------------------- */

const app = new Vue({
  el: '#app',

  components: {
    'the-header': httpVueLoader('assets/components/the-header.vue'),
    'the-footer': httpVueLoader('assets/components/the-footer.vue'),
  },
});
