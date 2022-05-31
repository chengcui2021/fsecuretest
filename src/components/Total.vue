<template>
    <div class="container">
    <div>
      <div>Total</div>
      <div>{{value.length}}</div>
    </div>
    <div>
      <div>Compoleted</div>
      <div>{{compoleted}}</div>
    </div>
    <div>
      <div>Not Compoleted</div>
      <div>{{notCompoleted}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Array
  },
  computed:{
    compoleted(){
      return this.value.filter(item => item.status === "Completed").length
    },
    notCompoleted(){
      return this.value.filter(item => item.status === "Not Completed").length
    }
  }
}
</script>

<style scoped>
.container{
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: rgb(167, 165, 165);
  margin: 30px 0 30px 60px ;
}
</style>