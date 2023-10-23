<template>
  <header>
    <nav>
      <ul class="main-nav">
        <li><router-link to="/"><img src="../assets/logo.png"></router-link></li>
        <li><router-link to="/">ホーム</router-link></li>
        <li><router-link to="/schedule">スケジュール</router-link></li>
        <li><router-link to="/group">出展</router-link></li>
        <li><router-link to="/map">マップ</router-link></li>
        <li><router-link to="/notice">注意事項</router-link></li>
      </ul>
    </nav>
  </header>
</template>
  
  <script>
export default {
  data() {
    return {
      title: "ヘッダー",
    };
  },
};
</script>
  
  <style scoped>
</style>