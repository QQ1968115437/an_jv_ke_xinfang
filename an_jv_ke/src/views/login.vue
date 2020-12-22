<template>
  <div id="app">
    <div class="col-12 p-0">
      <div class="my_title">安居客</div>
    </div>
    <div id="zhong">
      <div class="login" v-if="isShow">
        <div class="row">
          <p>账号密码登录</p>
          <div>
            <a href="" @mouseover="shouji">手机登录 |</a>
            <a href="">客户登录</a>
          </div>
        </div>
        <div>
          <mt-field type="text" label="账号" placeholder="请输入账号" v-model="username" class="my_input" @blur.native.capture="checkUsername" :state="usernameState"></mt-field>
          <mt-field type="password" label="密码" placeholder="请输入密码" v-model="password" class="my_input" @blur.native.capture="checkPassword" :state="passwordState"></mt-field>
        </div>
        <button @click="handle">立即登录</button>
        <a href="">忘记密码？</a>
        <div>
          <p>其他方式登录</p>
          <div><img src="img/wechat.png" alt="" /></div>
        </div>
        <div class="row">
          <p>我已阅读并接受</p>
          <a href="">《安居客用户服务协议》</a>
          <p>及</p>
          <a href="">《安居客隐私政策》</a>
        </div>
      </div>
      <div class="login" v-else>
        <div class="row">
          <p>手机登录</p>
          <div>
            <a href="" @mouseover="zhanghao">账号密码登录 |</a>
            <a href="">客户登录</a>
          </div>
        </div>
        <div>
          <mt-field
            type="text"
            label="手机号"
            placeholder="请输入手机号码"
            v-model="userphone"
            class="my_input"
            @blur.native.capture="checkUserphone"
            :state="userphoneState"
          >
          </mt-field>
          <mt-field
            type="text"
            label="验证码"
            placeholder="请输入验证码"
            v-model="usercode"
            class="my_input"
            @blur.native.capture="checkUsercode"
            :state="usercodeState"
          >
          </mt-field>
        </div>
        <button @click="handle()">立即登录</button>
        <a href="">收不到验证码？</a>
        <div>
          <p>其他方式登录</p>
          <div><img src="img/wechat.png" alt="" /></div>
        </div>
        <div class="row">
          <p>我已阅读并接受</p>
          <a href="">《安居客用户服务协议》</a>
          <p>及</p>
          <a href="">《安居客隐私政策》</a>
        </div>
      </div>
    </div>
    <div id="dibu">
      <ul class="row">
        <li v-for="(v, i) of li" :key="i">
          <a href="">{{ v.li }}</a>
        </li>
      </ul>
      <ul class="row">
        <li><a href="">客服服务中心</a></li>
        <li>违法信息举报： 4006209008</li>
        <li><a href=""> yinsibaohu@58.com</a></li>
        <li>Copyright © 2007-2020 www.anjuke.com All Rights Reserved</li>
        <li><a href="">ICP号：沪 B2-20090008</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user1:[],
      li: {},
      isShow: false,
      username: "",
      password: "",
      userphone: "",
      usercode: "",
      usernameState: "",
      passwordState: "",
      userphoneState: "",
      usercodeState: "",
    };
  },
  mounted() {
    this.axios.get("/login").then((result) => {
      this.li = result.data;
    });
    this.axios.get("/user1").then((result) => {
     this.user1=result.data;
    //  console.log(this.user1)
    });
  },
  methods: {
    shouji() {
      this.isShow = false;
    },
    zhanghao() {
      this.isShow = true;
    },
    checkUsername() {
      let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.$toast({
          message: "用户名错误",
          position: "middle",
          duration: 2500,
        });
        this.usernameState = "error";
        return false;
      }
    },
    checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z]{8,16}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 2500,
        });
        this.passwordState = "error";
        return false;
      }
    },
    checkUserphone() {
      let userphoneRegExp = /^1[3-9]\d{9}$/;
      if (userphoneRegExp.test(this.userphone)) {
        this.userphoneState = "success";
        return true;
      } else {
        this.$toast({
          message: "手机号格式错误",
          position: "middle",
          duration: 2500,
        });
        this.userphoneState = "error";
        return false;
      }
    },
    checkUsercode() {
      let usercodeRegExp = /^\d{6}$/;
      if (usercodeRegExp.test(this.usercode)) {
        this.usercodeState = "success";
        return true;
      } else {
        this.$toast({
          message: "验证码格式错误",
          position: "middle",
          duration: 2500,
        });
        this.usercodeState = "error";
        return false;
      }
    },
    handle() {
      
      for(var k=0;k<this.user1.length;k++){
        console.log(this.username.value);
        // if(this.user1[k].id==this.username.value && this.user1[k].password==this.password.value){
        //   console.log("登录成功")
        // }else {console.log("失败")}
      };

      // if (this.checkUsername() && this.checkPassword()) {
      //   let obj = {
      //     username: this.username,
      //     password: this.password,
      //   };
        
      //   // let str = this.qs.stringify(obj);
      //   // this.axios.get("/user1").then((res) => {
      //   //   console.log(res.data);
      //   //   if (res.data.code == 201) {
      //   //     this.$messagebox
      //   //       .confirm("登录失败,请核对账号密码是否正确", "提示信息")
      //   //       .then(() => {
                
      //   //       })
      //   //       .catch((error) => {});
      //   //   }
      //   //   if (res.data.code == 304) {
      //   //     this.$store.commit("loginMutation", res.data.info);
      //   //     localStorage.setItem("isLogined", 1);
      //   //     localStorage.setItem("info", JSON.stringify(res.data.info));
      //   //     this.$router.push("/");
      //   //   }
      //   // });
      // }
    },
  },
};
</script>
<style scoped>
#dibu > ul {
  display: flex;
  justify-content: center;
  margin: 10px 0px;
}
#dibu > ul > li {
  font-size: 14px;
  margin: 0px 10px;
}
#dibu > ul > li > a {
  color: rgb(44, 43, 43);
}
#dibu > ul > li > a:hover {
  color: rgb(192, 98, 11);
}
#zhong {
  width: 100%;
  padding: 70px 0 220px 0;
  /* background-image: url("../../public/img/bg.jpg"); */
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-size: 75%;
}
.login {
  width: 500px;
  height: 450px;
  position: relative;
  z-index: 1;
  border: 1px solid rgb(196, 190, 190);
  margin: auto;
  border-radius: 5px;
  background-color: #fff;
}
.my_title {
  padding: 10px 0 6px 300px;
  font-size: 50px;
  font-family: 隶书;
  color: #00a25a;
  border-bottom: 2px solid #00cf56;
}
.login > div:first-child > p {
  font-size: 24px;
  margin: 30px 50px;
}
.login > div:first-child > div {
  font-size: 14px;
  margin: 38px 20px 25px 100px;
}
.login > div > div > a {
  color: rgb(71, 69, 69);
}
.my_input {
  width: 440px;
  height: 50px;
  margin: 10px 30px;
  border: 1px solid rgb(224, 219, 219);
  border-radius: 5px;
}
.login > button {
  width: 440px;
  height: 50px;
  margin: 10px 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #08d87a;
  color: blanchedalmond;
}
.login > a {
  font-size: 14px;
  margin: 30px 30px;
}
.login > div:nth-child(5) > p {
  font-size: 14px;
  text-align: center;
}
.login > div:nth-child(5) > div {
  text-align: center;
  margin-top: 20px;
}
.login > div:nth-child(5) > div > img {
  width: 35px;
  height: 35px;
}
.login > div:nth-child(6) {
  font-size: 14px;
  margin: 20px 50px;
}
</style>