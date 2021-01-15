//开发环境
var baseURL='http://api-breakingnews-web.itheima.net'
//测试环境
// var baseURL='http://api-breakingnews-web.itheima.net'
//生产环境
// var baseURL='http://api-breakingnews-web.itheima.net'
//在发送Ajax()post()get()之前会触发
$.ajaxPrefilter(function(options){
    //获取到ajax所以参数信息
    options.url=baseURL+options.url
    // alert(options.url)
})