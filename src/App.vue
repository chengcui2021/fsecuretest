<template>
  <div id="app">
    <Total v-model="data" />
    <Table 
      v-model="data" 
      :tableName="tableName"
      @deleteData="deleteData"
      @selectedAll="selectedAll"
      @contentInputSelected="contentInputSelected"
      @colse="colse"
      @inputValue="inputValue"
    />
  </div>
</template>

<script>
import Total from './components/Total.vue'
import Table from './components/Table.vue'
export default {
  name: 'App',
  components: {
    Table,
    Total
  },
  data () {
    return {
      tableName: ['ID', 'Title', 'Content', 'Status'],
      data: [
        {
          id: 1,
          title: 'Fbiola Esther',
          content: 'Computer Science',
          status: 'New',
          checked: false
        },
        {
          id: 2,
          title: 'Abiola Esther',
          content: 'Computer Science',
          status: 'Completed',
          checked: false
        },
        { 
          id: 3, 
          title: 'fugiat veniam minus', 
          content: 'Lorem ipsum', 
          status: 'Not Completed',
          checked: false
        } 
      ]
    }
  },
  methods: {
    deleteData() {
      this.data = this.data.filter(item => item.checked == false)
    },
    selectedAll(data) {
      this.data.forEach(item => {
        item.checked = data
      })
    },
    inputValue (val){
      this.data.push(
        {
          id: this.data.length+1,
          title: val.titleInput,
          content: val.contentInput,
          status: "New",
          checked: false
        }
      )
    },
    contentInputSelected (val) {
      this.data.forEach(item => {
        if (item.id === val) {
          item.checked = !item.checked
        }
      })
    },
    colse () {
      this.data.forEach(item => {
        item.checked = false
      })
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
}
body{
    background-color:#F7F7F7;
}
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
</style>
