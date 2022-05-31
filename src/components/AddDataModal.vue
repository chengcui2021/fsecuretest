<template>
  <div class="container add-box">
    <div class="box">
      <div class="box-header">Add note</div>
      <input type="text" class="title-input" :placeholder="placeholderInput" ref="titleInput" />
      <textarea type="text" class="content-input"  ref="contentInput" />
      <div class="btn">
        <button class="btn-save" @click="save">Save</button>
        <button class="btn-cancel" @click="cancel">Cancel</button>
      </div>
      <div v-show="showTest" style="color: red" class="not-empty">Can not be empty</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placeholderInput: "Add title",
      showTest: false
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    save() {
      if (this.$refs.titleInput.value&&this.$refs.contentInput.value) {
        const data ={
          titleInput: this.$refs.titleInput.value,
          contentInput: this.$refs.contentInput.value
        }
        this.$emit('inputValue', data)
        this.$emit('cancel')
        return
      }
      this.showTest = true
    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 250px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 2px 2px #ccc;
  background-color: #fff;
}
.container .box {
  padding: 20px;
  display: flex;
  flex-flow: wrap;
}
.box .title-input {
  margin-top: 20px;
  width: 360px;
  padding: 5px 0;
  border: 1px solid #ccc;
}
.box .content-input {
  margin-top: 20px;
  width: 360px;
  padding: 15px 0;
  border: 1px solid #ccc;
}
.box .btn {
  display: flex;
}
.btn .btn-save {
  padding: 10px 30px ;
  margin-top: 20px;
  margin-right: 20px;
  background-color: #2B6697;
  color: aliceblue;
  border: none;
}
.btn .btn-cancel {
  margin-top: 20px;
  margin-right: 20px;
  border: none;
  color:rgb(17, 120, 223);
  background-color: #fff;
}
</style>