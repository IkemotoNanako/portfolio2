<template>
    <div class="share">
        <p>シェア</p>
        <textarea></textarea>
        <div>
          <button>シェアする</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      share:"",
      massage:"シェアする"
    };
  },
  methods: {
    send() {
      if (this.share === "") {
        alert("シェアする内容を入力してください");
      } else {
         axios
          .post("https://limitless-crag-44462.herokuapp.com/shares", {
            user_id: this.$store.state.user.id,
            share: this.share
          })
          .then(response => {
            console.log(response);
            alert("シェアしました");
            this.share = "";
          });
      }
    }
  }
}
</script>

<style scoped>
.share {
  margin: 15px;
}
.share textarea {
  width: 96%;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: #15202b;
  color: white;
  resize: none;
}
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  display:block;
  margin: 0 0 0 auto;
}
@media screen and (max-width: 480px) {
  button {
    font-size: 10px;
    width: 70px;
    border-radius: 25px;
  }
}
</style>
