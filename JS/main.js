/**
 * @desc:
 * @author: zhoumingqiang@ruijie.com.cn
 * @date:   2017/10/30
 */
var myJquery = {
    a: 1,
    b: alert('欢迎来到编程世界!'),
    c: 'abc'
};
try {
    var test = document.getElementById('test');
    alert(test.innerHTML);
} catch (e) {
    console.error('文档未加载完，无法获取该节点');
}
