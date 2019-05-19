<template>
    <div id="myheader">
        <div class="container">
            <a  href="/" class="logo">
                <img data-v-343b9b71="" src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg" alt="掘金" class="mobile">
            </a>
            <nav class="main-nav main_title">
                <ul class="nav-list">
                    <li class="main-nav-list">
                        <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            首页
                            <i class="fa fa-caret-down"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="curr_type">
                            <el-dropdown-item>首页</el-dropdown-item>
                            <el-dropdown-item>沸点</el-dropdown-item>
                            <el-dropdown-item>话题</el-dropdown-item>
                            <el-dropdown-item>小册</el-dropdown-item>
                            <el-dropdown-item>活动</el-dropdown-item>
                            <el-dropdown-item>有奖征文</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>
            </nav>
            <form  role="search" class="search-form">
                <input  type="search" maxlength="32" placeholder="搜索更新啦" class="search-input">
            </form>
            <li  class="nav-item notification">
                <a  class="app-link" href="/notification" target="_blank">
                <i data-v-dffe3a5c="" class="fa fa-bell">
                    </i><!----></a>
            </li>
            <li class="nav-item menu user_icon">
                <!-- <div  class="lazy avatar avatar loaded immediate" style="background-image: url(&quot;https://mirror-gold-cdn.xitu.io/168e09ba6de793a0e54?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1&quot;);">
                </div> -->
            </li>
            <nav class="main-nav user_icon">
                <ul class="nav-list">
                    <li class="main-nav-list">
                        <el-dropdown trigger="click">
                            <div  class=" el-dropdown-link lazy avatar avatar loaded immediate" style="background-image: url(&quot;https://mirror-gold-cdn.xitu.io/168e09ba6de793a0e54?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1&quot;);">
                            </div>          
                        <!-- <span class="el-dropdown-link">
                            首页
                            <i class="fa fa-caret-down"></i>
                        </span> -->
                        <el-dropdown-menu slot="dropdown" class="set_bar">
                            <el-dropdown-item>写文章</el-dropdown-item>
                            <el-dropdown-item>写稿</el-dropdown-item>
                            <el-dropdown-item divided>我的主页</el-dropdown-item>
                            <el-dropdown-item >我赞过的</el-dropdown-item>
                            <el-dropdown-item>我的收藏集</el-dropdown-item>
                            <el-dropdown-item>已购</el-dropdown-item>
                            <el-dropdown-item>标签管理</el-dropdown-item>
                            <el-dropdown-item divided>设置</el-dropdown-item>
                            <el-dropdown-item>关于</el-dropdown-item>
                            <el-dropdown-item divided>登出</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    
</template>
<script type="text/javascript">
	
	export default {
		components:{

		},
		data(){
			return {
				flag:false
			}
		},
		methods:{
			toggle(){
				this.flag=!this.flag;
			}
		}
	}
</script>
<style lang="scss" scoped>

$sc : 50;
@function cal($num) {
  @return ($num/$sc) * 1rem;
}

#myheader{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    height: cal(60);
    z-index: 250;
}
.container{
    height: cal(60);
    margin: 0 auto;
    width: 96%;
    display: flex;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
}
.logo{
    display: block;
    margin-left: cal(8);
    min-width: cal(45);
    img{
        display: block;
        width: auto;
        height: auto;
        margin: 0 auto;
    }
}

.main_title{
    margin-left: cal(10);
}

.curr_type .el-dropdown-menu__item{
    width: cal(85);
    height: cal(48);
    text-align: center;
    padding: 0 3px;
    font-size: cal(16) !important;
}

.set_bar .el-dropdown-menu__item{
    width: cal(120);
    height: cal(35);
    text-align: center;
    padding: 0 3px;
    font-size: cal(16) !important;
}

.main-nav{
    height: 100%;
    width: cal(68);
    text-align: center;
    line-height:cal(60);
    font-size: cal(20);
    .el-dropdown-link{
        font-size: cal(16);
        color: rgb(0, 127, 255)

    }
}

.el-dropdown-menu__item--divided:before {
    content: "";
    height: 6px;
    display: block;
    margin: 0 0px;
    width: 100%;
    background-color: #FFFFFF;
}
.search-input{
    width: cal(120);
    height: cal(30);
    padding: cal(7.2);
    color: #666;
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
}

.search-form[data-v-43442ca6] {
    border: 1px solid hsla(0,0%,59.2%,.2);
    background-color: rgba(227,231,236,.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2px;
    margin:0 cal(14) 0 cal(18)
}

.notification{
    color: #71777c;
    padding: 0 cal(9.6);
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: cal(20);

    .fa-bell{
        color: #71777c;
    }
}
input::-webkit-input-placeholder{
    color:rgb(189, 187, 187) !important;
}
.immediate{
    width: cal(30);
    height: cal(30);
    border-radius: 50%;
    position: relative;
    display: inline-block;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #eee;
    margin-top: cal(14)
}

.user_icon{
    margin-left: cal(5)
}
</style>
