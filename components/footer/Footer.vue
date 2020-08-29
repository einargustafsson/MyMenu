<template>
  <div class="footer">
    <div class="columns container">
      
    <div class="column has-text-center">
      <h2>Please leave a review</h2>
      <ul>
        <li><a href="https://www.tripadvisor.com/Restaurant_Review-g189970-d1960952-Reviews-Cafe_Loki-Reykjavik_Capital_Region.html" target="_blank">Tripadvisor</a></li>
        <li><a href="https://facebook.com/cafeloki" target="_blank">Facebook</a></li>
        </ul>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VmFooter',
}
</script>

<style lang="scss" scoped>
 .footer {
   background: #ccc;
   color: #333;
 }
 .footer a {
    color: #613916; 
    text-decoration: underline;
}
.footer li {display: inline-block; margin-right: 20px;}
.footer ul {
    margin-bottom: 40px;
}

.footer h2 {
    font-size: 20px;
    font-weight: bold;
}
</style>
