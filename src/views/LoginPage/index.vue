<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="username"
          placeholder="username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          v-model="password"
          placeholder="password"
          name="password"
          type="password"
        ></el-input>
        <span class="svg-container">
          <svg-icon icon="eye"></svg-icon>
        </span>
      </el-form-item>

      <el-button type="primary" style="width: 100%; margin-top: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<style scoped lang="less">
@bg: #2d3a4b;
@dark_gray: #889aa4;
@light_gray: #eee;
@cursor: #fff;

.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: @bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .title-container {
      text-align: center;
      color: #fff;
    }

    :deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      color: #454545;
    }

    :deep .el-input {
      display: inline-block;
      width: 85%;
      height: 47px;
      .el-input__wrapper {
        width: 100%;
        background: transparent;
        outline: none;
        height: 47px;
        box-shadow: 0 0 0 0;
      }
      input {
        border: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: @light_gray;
        caret-color: @cursor;
      }
    }
  }

  .svg-container {
    display: inline-block;
    padding: 6px 5px 6px 15px;
    color: @dark_gray;
    vertical-align: middle;
  }
  .title-container {
    position: reltaive;
    .title {
      font-size: 26px;
      color: @light_gray;
      margin: 0 auto 40px;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: @dark_gray;
    cursor: pointer;
  }
}
</style>
