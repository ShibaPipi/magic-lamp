export default {
  plugins: ['umi-plugin-dva'],
  proxy: {
    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": {"^/api": ""}
    // },
    "/api/v1": {
      "target": "http://localhost:8000/",
      "changeOrigin": true,
      // "pathRewrite": {"^/api/v1": ""}
    }
  },
}
