<template>
    <div id="myheader">
        <div class="container">
            <a  href="/" class="logo">
                <img data-v-343b9b71="" src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg" alt="掘金" class="mobile">
            </a>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li class="main-nav-list">
                        <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item>双皮奶</el-dropdown-item>
                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
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
<style lang="scss">
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
</style>
