<template>
    <div class="sign-in-page">
        <h3>로그인</h3>
        <signin-form @submit="onSubmit"/>
        <p>회원이 아니시나요? <router-link :to="{ name: 'Signup' }">회원가입하러 가기</router-link></p>        
    </div>
</template>

<script>
import SigninForm from '@/components/SigninForm'
// import api from '@/api'
import { mapActions } from 'vuex'

export default {
    name: 'Signin',
    components: {
        SigninForm
    },
    methods: {
        onSubmit(payload) {
            console.log(payload)
            this.signin(payload)
                .then(res => {
                    console.log("Login Success")
                    this.$router.push({name: 'PostListPage'})
                })
                .catch(err => {
                    console.log(err.response.data.msg)
                    alert(err.response.data.msg)
                })
        },
        ...mapActions(['signin'])
    }
}
</script>