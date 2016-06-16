require('../comp-a/comp-a.js');
require('../comp-b/comp-b.js');

var Index = Vue.extend({
    template : __inline('index.tpl')
});

Vue.component('index', Index);

