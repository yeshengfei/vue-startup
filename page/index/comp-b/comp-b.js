require('../comp-c/comp-c.js');

var CompB = Vue.extend({
    template : '<div>' +
                    'comp-bb' +
                    '<comp-c></comp-c>' +
                '</div>'
});

Vue.component('comp-b', CompB);