<template>
  <div class="table">
    <table>
      <thead>
        <tr >
          <td v-for="(i, index) in tableNames" :key="index" class="table-header">
            <input type="checkbox" :checked="all" @click="selectedAll" v-if="i.name=='ID'">
            <span class="id">{{i.name}}</span>
            <span class="sortButton">
              <button @click="ascendingOrder(i.name)">
                <span v-if="!i.status"><svg t="1653902073355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4663" width="16" height="16"><path d="M1005.9 691c11.2 11.2 16.7 25.8 16.7 40.5 0 14.6-5.5 29.3-16.7 40.5-22.3 22.3-58.5 22.3-80.8 0L511.4 358.1 97.6 771.7c-22.3 22.3-58.5 22.3-80.8 0-22.3-22.3-22.3-58.5 0-80.8L446.7 261c17.3-17.3 40.2-26.7 64.7-26.7s47.4 9.5 64.7 26.7l429.8 430z m0 0" fill="" p-id="4664"></path></svg></span>
                <span v-if="i.status"><svg t="1653901974048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3160" width="16" height="16"><path d="M917.4 302.8c-14.2-14.2-37.2-14.2-51.4 0L518.6 650.3c-2.9 2.8-7.5 2.8-10.3 0L160.8 302.8c-14.2-14.2-37.2-14.2-51.4 0-14.2 14.2-14.2 37.2 0 51.4l347.4 347.4c15.6 15.6 36 23.4 56.5 23.4s41-7.8 56.5-23.4l347.4-347.4c14.3-14.2 14.3-37.2 0.2-51.4z" p-id="3161"></path></svg></span>
              </button>
            </span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in value" :key="index" class="table-content">
          <td>
            <input type="checkbox" @click="contentInput(i.id)" :checked="i.checked" ref="input">
            <span class="id">{{i.id}}</span>
          </td>
          <td>{{i.title}}</td>
          <td>{{i.content}}</td>
          <td>{{i.status}}</td>
        </tr>
      </tbody>
    </table>
    <AddBotton 
      @inputValue="(val)=>inputValue($emit('inputValue', val))"
    />
    <DeleteConfirmModal v-if="showDeleteConfirmModal" @confirmDetele="confirmDetele" @colse="close" />
  </div>
</template>

<script>
import DeleteConfirmModal from './DeleteConfirmModal.vue'
import AddBotton from './AddData.vue'
export default {
  name: 'HelloWorld',
  props: {
    value: Array,
    tableName: Array
  },
  data () {
    return {
      all: false,
      deleteSelectedIndex: '',
      slotStatus: {
        id: false,
        title: false,
        content: false
      }
    }
  },
  components: {
    DeleteConfirmModal,
    AddBotton
  },
  methods: {
    selectedAll () {
      if (!this.all) {
        this.all = true
        this.$emit('selectedAll', true)
      } else {
        this.all = false
        this.$emit('selectedAll', false)
      }
    },
    contentInput (id) {
      this.$emit('contentInputSelected', id)
      this.$nextTick(function () {
        let status = true
        this.value.forEach((item) => {
          if (item.checked === false) {
            status = false
          }
        })
        this.all = status
      })
    },
    ascendingOrder(i){
      if (i === 'ID') {
        const status = this.slotStatus.id
        this.value =  this.value.sort(function(a,b){
           return status ? a.id - b.id : b.id - a.id
        })
        this.slotStatus.id = !this.slotStatus.id
        this.slotStatus.title = false
        this.slotStatus.content = false
        return
      }
      if (i === 'Title') {
        const status = this.slotStatus.title
        this.value =  this.value.sort(function(a,b){
           return status ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
        })
        this.slotStatus.title = !this.slotStatus.title
        this.slotStatus.id = false
        this.slotStatus.content = false
      }
      if (i === 'Content') {
        const status = this.slotStatus.content
        this.value =  this.value.sort(function(a,b){
           return status ? b.content.localeCompare(a.title) : a.title.localeCompare(b.title)
        })
        this.slotStatus.content = !this.slotStatus.content
        this.slotStatus.title = false
        this.slotStatus.id = false
      }
    },
    confirmDetele () {
      if (this.value[0]) {
        this.all = false
      }
      this.$emit('deleteData')
    },
    close () {
      if (this.value[0]) {
        this.all = false
      }
      this.$emit('colse')
    }
  },
  computed: {
    showDeleteConfirmModal(){
      let data = false
      this.value.forEach((item)=>{
        if(item.checked === true) {
          data = true
        }
      })
      
      return data
    },
    tableNames () {
      const data = []
      this.tableName.forEach((item)=>{
        data.push({
          name: item,
          status: this.slotStatus[`${item.toLowerCase()}`]
        })
      })
      console.log(data)
      return data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    border-collapse:collapse;
    padding: 7px;
}
td{
    border-left:1px solid #ccc;
    border-top:1px solid #ccc;
    padding: 7px;
}
.table{
 margin-left: 60px;
}
.id{
  margin-left: 10px;
}
.table .table-header {
  width: 200px;
  color:aliceblue;
  text-align: left;
  padding-left: 11px;
  background-color: #989898;
}
.table-header .header-text {
  display: flex;
}
.table-header .sortButton {
  margin-left: 100px;
  text-align: right;
}
.table .table-content>td {
  text-align: left;
  padding-left: 10px;
    background-color: #fff;
}
.sortButton>button {
  border: none;
  background-color: #989898;
}

</style>
