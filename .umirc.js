export default {
  plugins: ['umi-plugin-dva'],
  proxy: {
    // '/api': {
    //   'target': 'http://jsonplaceholder.typicode.com/',
    //   'changeOrigin': true,
    //   'pathRewrite': {'^/api': ''}
    // },
    '/api/v1': {
      'target': 'http://localhost:8000/',
      'changeOrigin': true,
      // 'pathRewrite': {'^/api/v1': ''}
    }
  },
  routes: [
    {
      path: '/',
      component: '../../src/layouts/index',
      routes: [
        { path: '/', component: '../../src/pages/index' },
        { path: '/users', component: '../../src/pages/users' },
        { path: '/login', component: '../../src/pages/login' },
        { path: '/posts/:id', component: '../../src/pages/posts/$id' },
      ],
    },
  ],
}
