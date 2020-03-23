<template>
  <div class="login">
    <el-button type="primary">11111</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  mounted() {
    this.axios.get('/users/info').then(res => {
      console.log(111, res)
    }).catch(err => {
        console.error(err);
    });
  }
}
</script>
