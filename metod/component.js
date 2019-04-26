// GLOBAL

/*
Vue.component ('el-comp', {
    template: `
    <div>
    <h1>Hi! {{ name }} <slot></slot><another-component></anoter-component></h1>
    <div>
    `,
    data () {
        return {
            name: 'Frodo'
        }
    }
});

Vue.component('another-component', {
    template: '<i></i>'
  });
  */

 Vue.component('el-comp', {
    props: ['name'],
    template: '<h1>{{ name }}</h1>'
  });
  