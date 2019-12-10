<template>
  <div class="login">
    <el-card>
      <el-form>
        <el-form-item label-width="60px" label-position="left" label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label-width="60px" label-position="left" label="密码">
          <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleLogin">登 陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { adminLogin } from '@/api/admin'

  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handleLogin() {
        console.log('此处调用后端登陆接口验证')
        adminLogin(this.loginForm).then(response => {
          // 登陆成功跳转
          this.$router.push('/admin')
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;

    .el-card {
      margin: 10% auto;
      width: 500px;

      .el-form {
        margin: 20px 0;
      }
    }
  }
</style>
