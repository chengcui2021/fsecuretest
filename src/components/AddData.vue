<template>
<div>
  <div class="box">
    <button class="btn" @click="showAddDataModal = true">Add</button>
  </div>
  <AddDataModal 
    v-if="showAddDataModal" 
    @cancel="cancel" 
    @inputValue="(val)=>$emit('inputValue', val)" 
  />
</div>
</template>

<script>
import AddDataModal from './AddDataModal.vue'
export default {
  components: {
    AddDataModal
  },
  data () {
    return {
      showAddDataModal: false
    }
  },
  methods: {
    cancel () {
      this.showAddDataModal=false
    }
  }
}
</script>

<style scoped>
.btn {
  width: 150px;
  height: 30px;
  background-color: #2B6697;
  border: none;
  color: white;
  margin-top: 30px;
  margin-left: 60px;

}
</style>