<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>
              <i class="ion-compose" />&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>
              <i class="ion-gear-a" />&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- content -->
    <nuxt />
    <!-- footer -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
