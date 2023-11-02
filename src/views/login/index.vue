<template>
  <div h-full w-full flex-center class="login">
    <div h-xl w-xl b-rd-2 p-4 class="form">
      <HelloWorld />
      <span> Emo-Template </span>
      <a-form
        :model="formState"
        name="horizontal_login"
        layout="inline"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit"
            >Log in</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style lang="scss" scoped>
.login {
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
  .form {
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    background-color: #d3b7d8;
    transition: 0.5s ease-in-out;
  }
}
</style>
