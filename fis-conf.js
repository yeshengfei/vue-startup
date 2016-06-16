// npm install -g fis-parser-less-2.x
fis.match('**/*.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    })
});

fis.match('**/*.{css,less, js}',{
    useHash : true
})

fis.hook('commonjs', {
    ignoreDependencies : [

    ]
});

fis.match('page/**/*.js', {
    isMod : true,
    useSameNameRequire : true
});


/**
 * hash模式下,由于cache的关系,变动的是内部文件,所以,外部没有变动的html,因缓存,并不发生变化
 * 
 */
fis.match('**.html', {
    useCache: false
});


// 因为是纯前段项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
});