<template>
        <!--  -->
    <div id="register">
        <Head>用户注册</Head>
        <div class="register-from">
            <div class="inp-box">
                <input type="text" v-model="tel" @blur="judge" placeholder="手机号" class="num" />
            </div>
            <div class="inp-box">
                <input type="text" @blur="judge" v-model="imgCode" placeholder="图形码" class="graphic-code" />
                <div class="graphic-box">
                    <img class="graphic"  @click="getImgCode" alt="图形码"  :src="this.imgCodeContent" />
                </div>
            </div>
            <div class="inp-box">
                <input type="text"  v-model="telCode" @blur="judge" placeholder="验证码" class="verification-code"/>
                <button @click="sendTelCodeFn" :class="sendTelCode? 'get-verification-code active':'get-verification-code'" :disabled="!sendTelCode">{{getTelCodeTxt}}</button>
            </div>
            <div class="inp-box">
                <input type="password" @blur="judge" v-model="passWord" placeholder="密码" />
            </div>
            <p class="prompt">{{prompt}}</p>
            <p class="protocol">点击注册按钮，即表示您同意
                <a href="https://in.m.jd.com/help/app/register_info.html">
                    《M78星云高级次元保密协议》
                </a>
            </p>
            <button :class="telOK&imgOK&telCodeOK&pasOK? 'register-btn active':'register-btn'" @click="register"  :disabled="(!telOK|!imgOK|!telCodeOK|!pasOK)==1?true:false">注册</button>
            <p class="sub"><router-link to="/login">已有账号？</router-link></p>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Head from "@/components/common/header";
export default {
  components: {
    Head
  },
  data() {
    return {
      sendTelCode:false,
      telCodeInterval:60,
      getTelCodeTxt:'获取验证码',
      telOne: 0,
      tel: "",
      imgCode: "",
      telCode: "",
      passWord: "",
      prompt: "",
      imgCodeContent: "",
      imgCodeKey: "",
      telOK: false,
      telCodeOK:false,
      imgOK: false,
      pasOK:false
    };
  },
  mounted() {
    $("img").one("error", function(e) {
      $(this).attr(
        "src",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACyCAMAAACN3iZ+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDREMzMENGNUU4NzkxMUU4OEE4M0E5NTRDNTc4OUI2QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDREMzMENGNkU4NzkxMUU4OEE4M0E5NTRDNTc4OUI2QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEQzMwQ0YzRTg3OTExRTg4QTgzQTk1NEM1Nzg5QjZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEQzMwQ0Y0RTg3OTExRTg4QTgzQTk1NEM1Nzg5QjZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GoSJpgAAAwBQTFRF6dG1m5aJ5+PTzcu+29XF7+/n5LWM1su50VtY7+vXurOl6+PO+OfM6N/V5+PPpaKV+/Pf/O/exrqn8+vVpJyH++vj/vvnzce62riX+dvJppl43beKlI58sqN62ses7+vbyrac9OfWp6KLtKyb2+bOzMvEsp56/e3UtKaI15t/1byk9/bt8+fczsa09/f23NO7+dvXq6SU08/CpqSaxL2xvLOa8bWq9/Pf5+XbPT09zsOp0Y2D5NzDrKSc8+7sxsa77dzC/vPY/OXTxsO029rV7evP5dbCyKyXqp6W9+fi7vPq/u7p/Pb17JKQ3qma/Obd1cGc7tbC7ePGzLOO//rc5M3A/O722ayI9eK+7/Pb4tbM2e72zsu19/HUnsnopJ6a176x6P715cGd/M7Drqqc5OPF9vztpJRwyaqLtJ2B3np4vcW09P/95uvUi7fT/fHL9vv0/Ofk/ff89/f7naGTx8u87dbN3auk5uvP6cC36e7xuq+N7tzdyeHp0tPIsKqR/ebt9vvlxa+j8+bq7fbP3NCvwIZ65ezf1uzC0Ny876Ki/NLW//jW9fnas3Zlnohvv42H//fn9+/f4e7IyM2z8+vb+/PjpZGB8uvKztrc59/P6+PTnq+7///v//fj69/Ppp6W6+fXpqeS//vr///z///7sZ5v7+fX8+/jqaqj9/Pj7+fT7+PX9+/b//Pj//vv9+/j+/fj9+vj7+fb6+fT+/fr///3+///+/Pn//vz59/L//Pr//fr+/fn///r49/Q7+PT+Ovf+Ovb9+/n8+/f6+fgoZ6R8/Pnpp6R6+PX6+fb//v38+vj7+ff4dvL9/Pn8+/n8+vf6+Pb//fv8u/b+/Pr4t/L9+vo+/vv//v7oJqR59vL//Pn+//39/fn+/v78N/Q8OPb8/Pj//v/+/vr8+vn9/fj+/v38NvQ59vR69/K4tvQ+//7+/vz8eDJ+/fv8NvKoZ6XppqR69vL69vQ+//y+/v//PPk+Oni7+nZ9u3b//np9evi7uXW/v7+////hw5SsgAAAK1JREFUeNrszrENwCAMRUH238PTMAHL2KmIIEqRdBT33Fpf16ryUR8RFVWRtRazHu/tvxU/uifHci13wEG1PDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NLQPXQIMAOs/IXBnoUBVAAAAAElFTkSuQmCC"
      );
    });
  },
  methods: {
    //不考虑将验证写在同一函数,因为那样每次要判断所有的..  好吧  还是写在同一函数-.-
    judge() {
      //可以发送验证码?
      if(this.telOK&this.imgOK){
        this.sendTelCode = true;
      }else{
        this.sendTelCode = false;
      }

      //判断手机号
      if (this.tel == "") {
        this.prompt = "手机号不能为空";
        this.telOK = false;
        this.sendTelCode = false;
        return;
      } else if (!/^1[345678]\d{9}$/.test(this.tel)) {
        this.prompt = "请输入正确手机号码!";
        this.telOK = false;
        this.sendTelCode = false;
        return;
      } else {
        if (!this.telOK) {
          // 手机验证为false执行以下
          if (!this.telOne) {
            // 第一次验证成功return出,不执行其它判断;
            this.prompt = "";
            this.telOK = true;
            this.getImgCode();
            this.telOne++;
            if(this.imgOK&this.telOK)this.sendTelCode = true;
            return;
          } else {
            // 除第一次成功外,1次以上不return出,执行后面验证.(避免了重复执行)
            this.prompt = "";
            this.getImgCode();
            this.telOK = true;
            if(this.imgOK&this.telOK)this.sendTelCode = true;
          }
        }
      }

        /*
        * 感觉不对-.-
        * 图形验证码判断一次就会失效;那么
        * 既然在发送手机验证码时需要判断;
        * 那么为什么多出一个单独判断验证码的接口 -.- 
        * 让我写了那么多 -.-||
        */
      //判断图形验证码
      if (this.tel) {
        //手机验证为true，则执行图形码验证
        if (this.imgCode == "") {
          //判断为空
            this.prompt = "请输入图片验证码";
            this.imgOK = false;
            this.sendTelCode = false;
            return;
        }else if(this.imgCode.length != 6){
            this.prompt = "图形验证码错误";
            this.imgOK = false;
            this.sendTelCode = false;
            return
        }else{
          if(!this.imgOK){
            this.imgOK = true;
            this.prompt = "";
            if(this.imgOK&this.telOK)this.sendTelCode = true;
          }
        }
        /*else {
            //判断验证码正确性;  // 废弃了，因为这段代码判断完，验证码就会失效;从而使得手机验证码永远无法正确 /
            // this.judgeImgCode(ok => {
            //   if (ok) {      //这里会重复执行-.-
            //     this.imgOK = true;
            //     this.sendTelCode = true;
            //     this.prompt = "";
            //   } else {
            //     this.imgOK = false;
            //     this.sendTelCode = false;
            //     this.prompt = "图形验证码错误,请点击验证码刷新以重新验证";
            //     return;
            //   }
            // });
         }*/
      }
      if(this.telOK&this.imgOK){
        if(this.telCode == ""){
          this.prompt = "请输入验证码";
            this.telCodeOK = false;
          return;        
        }else if(this.telCode.length!=4){
          this.prompt = "请输入与正确验证码";
            this.telCodeOK = false;
          return;
        }else{
          if(!this.telCodeOK){
            this.telCodeOK = true;
            return;
          }
        }
      }

      
      //判断密码
      // console.log(this.telOK,this.imgOK,this.telCodeOK)
      if(this.passWord == ""){
        this.prompt = '密码不能为空';
        return;
      }else{
        if(this.passWord.length<=5|!(/^(?![^a-zA-Z]+$)(?!\D+$)/.test(this.passWord))){
          this.prompt = '密码应是长度为6-20位的数字、字母、下划线的组合';
          this.pasOK = false;
        }else{
          this.prompt = "";
          this.pasOK = true;
        }
      }
      
    },
    //设置图形验证key值
    setImgCodeKey() {
      this.imgCodeKey = Math.random() * 100;
    },
    //获取图形验证码
    getImgCode() {
      if (this.telOK) {
        this.setImgCodeKey();
        this.imgCodeContent =
          "https://api.it120.cc/small4/verification/pic/get/?key=" +
          this.imgCodeKey;
          this.sendTelCode = false;
      }
    },
    //图形验证码效验 (多次一举,因为验证只能判断一次-.-,在登陆时需要判断...) -.-
    judgeImgCode(callBack) {
      axios
        .post(
          "https://api.it120.cc/small4/verification/pic/check",
          "key=" + this.imgCodeKey + "&code=" + this.imgCode
        )
        .then(res => {
          if (res.data.code == 0) {
            this.telCodeOK = true;
            callBack(true);
          } else {
            callBack(false);
          }
        });
    },

    sendTelCodeFn(){
        //请求短信验证码
        axios.post('https://api.it120.cc/small4/verification/sms/get',
        'mobile='+this.tel+
        '&key='+this.imgCodeKey+
        '&picCode='+this.imgCode
        ).then(res => {
            if(res.data.code===0){
                 this.sendTelCode = false;
                var timer =  setInterval(() => {
                        this.telCodeInterval--;
                        this.getTelCodeTxt = this.telCodeInterval+'秒后重新获取';
                        if(this.telCodeInterval<=0){
                            clearInterval(timer);
                            //判断,有些用户在等待的过程中修改了手机号码等操作
                            if(!this.telOK|!this.imgOK){
                                return;
                            }
                            this.sendTelCode = true;
                            this.getTelCodeTxt = '重新获取';
                            this.telCodeInterval = 60;//初始化间隔时间
                        }
                },900)
            }else{
                if(res.data.msg == "请输入验证码"){
                    this.prompt = res.data.msg+('，请点击刷新验证码后重试')
                }else{
                  this.prompt = res.data.msg
                }
            }
        })
    },

    register(){
        axios.post('https://api.it120.cc/small4/user/m/register',
        'mobile='+this.tel+
        '&pwd='+this.passWord+
        '&code='+this.telCode
        ).then(res => {
          // console.log(res)
            if(res.data.code === 0){
              alert('注册成功!\n手机：+'+this.tel+'\n密码：'+this.passWord);
              this.loginFn();
            }
            if(res.data.msg === 10000){
              alert('该手机号已注册,请直接登陆！');
            }
        })
    },
    

    //自动登陆
    loginFn(num,pas){
      axios.post('https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey',
      'mobile='+this.tel+
      '&pwd='+this.passWord
      )
      .then(res => {
        if(res.data.code === 0){
          alert('已帮您自动登陆...');
          this.saveCookie("userToken",res.data.data.token,3)
          this.$store.commit('setUserToken',res.data.data.token);//保存token
          this.$router.push('/index/user')
        }
      })
    },
    saveCookie(cookieName,cookieValue,cookieDates){
        var d = new Date();
        d.setDate(d.getDate()+cookieDates);
        document.cookie = cookieName+"="+cookieValue+";expires="+d.toGMTString();
    }
  }
};
</script>

<style>
</style>
