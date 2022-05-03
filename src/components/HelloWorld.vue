<script>
import BigTitle from "@/components/BigTitle";

export default {
  name: 'HelloWorld',
  components: {
    BigTitle
  },
  data() {
    return {
      title: ''
    }
  },
  computed:{
    setTitle: ()=>{
      console.log(this.message)
    }
  }
}
</script>

<template>
  <div>
    <template v-if="!!title">
      <BigTitle :message="title"></BigTitle>
    </template>
    <template v-else>
      <BigTitle></BigTitle>
    </template>
    <textarea class="textarea" v-model="title"></textarea>
  </div>
</template>

<style scoped>
.textarea {
  margin-top: 1rem;
}
</style>
