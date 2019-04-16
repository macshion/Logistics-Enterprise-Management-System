<template>
<div class="login-bg">
    <div class="login-wrap">
        <h1 class="pb20"><Icon type="ios-globe" size="30"/><span class="ml10">物流企业管理系统</span></h1>
        <Form ref="loginForm" :model="loginForm" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="loginForm.user" placeholder="账号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="loginForm.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('loginForm')">登陆</Button>
            </FormItem>
        </Form>
    </div>
</div>
</template>
<style lang="less">
.login-bg{
    height:100vh;
    background: url(./../assets/img/bg.png) no-repeat;
    // background: linear-gradient(#ddf,#aac,#668)
}
.login-wrap{
    width:440px;
    margin:0 50%;
    transform: translate(-50%,200%);
}
</style>

<script>
export default {
  data () {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码至少6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
