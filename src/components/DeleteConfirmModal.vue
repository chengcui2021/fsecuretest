<template>
  <div class="delete-container">
        <div class="text-content">
          <div>
            <svg t="1653893592181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7078" width="32" height="32"><path d="M512 179.2l390.4 627.2H128l384-627.2m0-64c-19.2 0-44.8 12.8-51.2 32l-390.4 627.2c-25.6 44.8 6.4 96 51.2 96H896c51.2 0 83.2-57.6 51.2-96l-384-627.2c-6.4-19.2-32-32-51.2-32z" fill="#ffffff" p-id="7079"></path><path d="M512 640c-19.2 0-32-12.8-32-32v-192c0-19.2 12.8-32 32-32s32 12.8 32 32v192c0 19.2-12.8 32-32 32z" fill="#ffffff" p-id="7080"></path><path d="M512 723.2m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#ffffff" p-id="7081"></path></svg>
            </div>
             <div>Do you want to delete this note?</div>
              </div>
        <div class=".btn-group">
          <button @click="colse" class="No">No</button>
        <button @click="confirmDetele" class="Yes">Yes</button>
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirmDetele () {
      this.$emit('confirmDetele')
    },
    colse () {
      this.$emit('colse')
    }
  }
}
</script>

<style scoped>
  .delete-container{
    width: 500px;
    height: 35px;
    background-color: #EA3323;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin: 50px 0 0 0
  }
  .btn-group{
    display: flex;
  }
  .text-content{
    display: flex;
    align-items: center;
  }
  .No{
    width: 60px;
    height: 30px;
    border: 1px solid #fff;
    background-color: #EA3323;
    color: white;
    border-radius: 5px;
    padding: 1px;
    font-size: 12px;
  }
  .Yes{
    width: 60px;
    height: 30px;
    border: 1px solid #fff;
    background-color: #fff;
    color: white;
    border-radius: 5px;
    color: black;
    font-size: 12px;
    margin: 0 5px;
  }
</style>