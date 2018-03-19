<template lang="html">
  <div class="m-login">
    <h1 class="headTitle">
      平方树管理登录
    </h1>
    <p class="headText">
      欢迎使用平方树管理系统，请使用淘宝号授权登录!
    </p>
    <div class="formText">
      <div class="form-top">
        <div class="form-top-text">
          <h2 class="title">登录我们的网站</h2>
          <p class="text">输入您的用户名和密码登录：</p>
        </div>
        <div class="img">
          <i class="icon-img"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
#app{
  width: 100%;
  height: 100%;
}
.m-login{
  width: 100%;
  height: 100%;
  background: url(./loginBack.jpg) 0 0 no-repeat;
  background-size: 100% 100%;
  .formText{
    margin: 30px auto;
    width: 485px;
    height: 355px;
    background: #fff;
    border-radius: 5px;
    .form-top{
      padding: 25px 20px;
    };
    .form-top-text{
      float: left;
      overflow: hidden;
      .title{
        line-height: 25px;
        font-size: 22px;
      };
      .text{
        margin-top: 15px;
        color: #888
      }
    }
  };
  .headTitle{
    padding-top: 50px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
    letter-spacing: 2px;
  };
  .headText{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #ccc - 5;
  }
}
</style>
