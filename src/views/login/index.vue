<template>
  <div class="login-container flex-center full">
    <div class="content flex-center">
      <div class="form">
        <span class="title"> L O G I N </span>
        <a-form
          :model="formState"
          name="horizontal_login"
          layout="inline"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" v-focus>
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <!-- :disabled="disabled" -->
            <a-button
              type="primary"
              html-type="submit"
              v-loading
            >
              Log in</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { Sha1 } from "@/utils/crypto";
import { login } from "@/api/login";
const { proxy }: any = getCurrentInstance();
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
});
const onFinish = async (data: any) => {
  const { username, password } = data;
  await login({
    username,
    password: Sha1(password),
  });
};

const onFinishFailed = (errorInfo: any) => {
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style lang="scss" scoped>
// .login-container {
//   background: linear-gradient(200deg, #f3e7e9, #e3eeff);
//   .content {
//     border-radius: 8px;
//     background-color: $white;
//     position: relative;
//     height: 500px;
//     width: 800px;
//     .left {
//     }
//     .right {
//     }
//     .form {
//       position: absolute;
//       padding: 60px 20px 0 20px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       border-radius: 8px;
//       box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
//       background-color: #d3b7d8;
//       transition: 0.5s ease-in-out;
//       height: 540px;
//       width: 400px;
//       left: 20px;
//       .title {
//         font-size: 30px;
//         font-weight: bold;
//         color: $white;
//         margin-bottom: 20px;
//       }
//       :deep(.ant-form) {
//         flex-direction: column;
//         .ant-form-item {
//           margin-bottom: 20px;
//           .ant-form-item-label > label {
//             color: $white;
//           }
//         }
//       }
//     }
//   }
// }
</style>
