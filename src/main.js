let log = console.log
let html = document.querySelector('#html')
let style = document.querySelector('#style')
let animationWrap = document.querySelector('#animationWrap')
let n = 1
let str = `/*我是个前端开发学习者
下面就让我给你画个八卦吧*/

/*先画个圆*/
.bagua{
    width:200px;
    height:200px;
    border-radius:50%;
    box-shadow: 0 0 10px rgba(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}

/*画个小圆*/
.bagua::before{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:50%;
    height:100px;
    width:100px;
    margin-left:-50px;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

/*再画个小圆*/
.bagua::after{
    content:'';
    display:block;
    position:absolute;
    bottom:0;
    right:50%;
    width:100px;
    height:100px;
    border-radius:50%;
    margin-right:-50px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/*加点空格展示下自动拖动效果




















行吧*/
`
let str2 = ''

log(str.length)
function step() {
    setTimeout(() => {

        if (str[n] === '\n') {
            str2 += '<br>'
        } else if (str[n] === ' ') {
            str2 += '&nbsp;'
        }
        else {
            str2 += str[n]
        }
        html.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0,999999)
        if (n < str.length - 1) {
            n++
            step()
        }
    }, 50)
}
step()


