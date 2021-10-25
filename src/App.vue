<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <router-link to="/">
              <a-icon type="home" />
              <span>Home</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">
              <a-icon type="border" />
              <span>index</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu key="ga">
            <span slot="title">
              <a-icon type="rise" />
              <span>调价选品</span>
            </span>
            <a-menu-item key="3">
              <router-link to="/bi/fields">
                <span>Field Explain</span>
              </router-link>
            </a-menu-item>
            <a-sub-menu key="field">
              <span slot="title">
                <span>维度管理</span>
              </span>
              <a-menu-item key="4">
                <router-link to="/bi/dimsite">
                  <span>Site</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="5">
                <router-link to="/bi/dimpaymethod">
                  <span>PayMethod</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="6">
                <router-link to="/bi/dimshoppingstate">
                  <span>ShoppingState</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="7">
                <router-link to="/bi/dimedium">
                  <span>SourceMedium</span>
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="selection">
              <span slot="title">
                <span>活动选品</span>
              </span>
            </a-sub-menu>
            <a-sub-menu key="adjust">
              <span slot="title">
                <span>商品调价</span>
              </span>
              <a-menu-item key="8">
                <router-link to="/bi/adjust">
                  <span>调价建议</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="9">
                <router-link to="/bi/adjust">
                  <span>调价记录</span>
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="rules">
              <span slot="title">
                <span>规则管理</span>
              </span>
              <a-menu-item key="11">
                <router-link to="/bi/adjust">
                  <span>选品规则</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="12">
                <router-link to="/bi/adjust">
                  <span>调价规则</span>
                </router-link>
              </a-menu-item>
              <a-menu-item key="13">
                <router-link to="/bi/adjust">
                  <span>价格规则</span>
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="bi">
              <span slot="title">
                <span>BI</span>
              </span>
              <a-menu-item key="9">
                <router-link to="/bi/adjust">
                  <span>站点综合指标</span>
                </router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
          <div id="sub"></div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
<style>
  .ant-layout {
    height: 100vh;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>