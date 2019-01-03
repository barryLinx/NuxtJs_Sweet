<template>
  <div>
    <div class="bannerArea">
      <div class="banner" style="background-image: url('./image/porduct.jpg');">
        <div class="banner-top-img" style="background-image:url('./image/lg-想吃甜點是不需要理由的.png')"></div>
      </div>
    </div>

    <div class="Menu">
      <ul class="Menu-list">
        <li class="Menu-item">甜點類別</li>
        <li class="Menu-item" :class="{'active': '' === tagName}">
          <a href @click.prevent="filterMenu = '',tagName=''">
            所有甜點
            <span>(48)</span>
          </a>
        </li>
        <li class="Menu-item" :class="{'active': 'Today' === tagName}">
          <a href @click.prevent="filterMenu = 'Today',tagName='Today'">
            本日精選
            <span>(26)</span>
          </a>
        </li>
        <li class="Menu-item" :class="{'active': 'recommend' === tagName}">
          <a href @click.prevent="filterMenu = 'recommend',tagName='recommend'">
            人氣推薦
            <span>(10)</span>
          </a>
        </li>
        <li class="Menu-item" :class="{'active': 'newProduct' === tagName}">
          <a href @click.prevent="filterMenu = 'newProduct',tagName='newProduct'">
            新品上市
            <span>(12)</span>
          </a>
        </li>
      </ul>
      <ul class="prod-list">
        <prodcard
          v-for="(item, index) in filterdata[currentPage]"
          :key="index"
          @point-favorite="changeSaveProd"
          :prodData="item"
          :saveobj="FavoriteProd"
          :routename="routenPath"
        />
      </ul>
    </div>

    <ul class="pagination">
       <li class="pagination-item"   
          v-for="(page, index) in filterdata.length" :key="index">
            <a class="pagination-link" 
            :class="{'active': (page-1) === currentPage }"
            @click.prevent="handleCurrentChange(page - 1)"
            >{{page}}</a> 
          </li>
    </ul>
      <!-- <el-pagination 
      background 
      small
      layout="prev, pager, next" 
      :total="proddata.length"
     
     
       @current-change="handleCurrentChange"
      >
   
      </el-pagination> -->
  
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
//import Paginate from 'vuejs-paginate';
//import selfPagination from '~/components/selfPagination.vue'
import prodcard from '~/components/prodcard.vue'
export default {
  components: {
    prodcard,
    //Paginate,
   // selfPagination
  },
  head() {
    return {
      title: 'product Nuxt',
      meta: [
        { name: 'description', content: '甜點電商' },
        { name: 'keywords', content: '甜點,好吃,蛋糕,頻果派,藍梅,草莓' }
      ]
    }
  },
  data() {
    return {
      proddata: [
        //假資料
        { id: 1, title: '頻果派', price: 450, imgname: 'prod1', tag: 'Today' },
        {
          id: 2,
          title: '藍梅派',
          price: 950,
          imgname: 'prod2',
          tag: 'recommend'
        },
        {
          id: 3,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod3',
          tag: 'newProduct'
        },
        { id: 4, title: '水果優格', price: 800, imgname: 'prod4', tag: 'recommend' },
        { id: 5, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' },
        { id: 6, title: '頻果派', price: 450, imgname: 'prod1', tag: 'Today' },
        {
          id: 7,
          title: '藍梅派',
          price: 950,
          imgname: 'prod2',
          tag: 'recommend'
        },
        {
          id: 8,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod3',
          tag: 'newProduct'
        },
        { id: 9, title: '水果優格', price: 800, imgname: 'prod4', tag: '' },
        { id: 10, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' },
        { id: 11, title: '頻果派', price: 450, imgname: 'prod2', tag: 'Today' },
        {
          id: 12,
          title: '藍梅派',
          price: 950,
          imgname: 'prod2',
          tag: 'recommend'
        },
        {
          id: 13,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod3',
          tag: 'newProduct'
        },
        { id: 14, title: '水果優格', price: 800, imgname: 'prod2', tag: 'recommend' },
        { id: 15, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' },
        { id: 16, title: '頻果派', price: 450, imgname: 'prod5', tag: 'Today' },
        {
          id: 17,
          title: '藍梅派',
          price: 950,
          imgname: 'prod5',
          tag: 'recommend'
        },
        {
          id: 18,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod5',
          tag: 'newProduct'
        },
        { id: 19, title: '水果優格', price: 800, imgname: 'prod5', tag: '' },
        { id: 20, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' }
      ],
      routenPath: this.$route.name,
      FavoriteProd: [],
      filterMenu: '',
      tagName: '',
      currentPage: 0,
      //totalpage:0,
      // BowerCart:[],//vue 的data  非vuex的
    }
  },
  created() {
    this.getFavoriteProd()
    /*
         Computed property "clientCart" was assigned to but it has no setter. 
         Vuex 的state.clientCart 還沒初始化 無法立即寫入
       */
    // this.getclientcart();
  },
  watch: {
    FavoriteProd() {
      const vm = this
      if (process.client) {
        localStorage.setItem('FavoriteProd', JSON.stringify(vm.FavoriteProd))
      }
    }
  },
  methods: {
    calcCurrentPage(currPage) {
      console.log('currPage', currPage)
      this.currentPage = currPage;
    },
    getFavoriteProd() {
      const vm = this
      //console.log(localStorage.FavoriteProd);
      if (process.client) {
        //require('external_library')

        if (window.localStorage) {
          vm.FavoriteProd = JSON.parse(
            window.localStorage.getItem('FavoriteProd')
          )
          console.log(' vm.FavoriteProd', vm.FavoriteProd)
        }
      }
    },
    changeSaveProd(prodname) {
      const vm = this
      let changeObj = new Set(vm.FavoriteProd)
      //console.log('changeObj',changeObj);
      if (changeObj.has(prodname)) {
        changeObj.delete(prodname)
        this.$toast.info('移除關注!!', {
          theme: 'outline',
          position: 'top-right',
          duration: 5000
        })
      } else {
        changeObj.add(prodname)
        this.$toast.success('加入關注!!', {
          theme: 'outline',
          position: 'top-right',
          duration: 5000
        })
        //console.log('加入關注');
      }
      vm.FavoriteProd = Array.from(changeObj)
      //console.log('FavoriteProd ', vm.FavoriteProd );
    },
    selectMenu() {},
    handleCurrentChange(val){
      this.currentPage = val;
      // console.log('目前頁',val);
    }
  },
  computed: {
    ...mapState('cartModules', ['vxCart']),

    filterdata() {
      const vm = this
      let items = []
      const newData = []
      items = vm.proddata
      if (vm.filterMenu !== '') {
        items = vm.proddata.filter(d => d.tag === vm.filterMenu);
        this.currentPage = 0;
       
      }
      items.forEach((item, i) => {
        // console.log('i',i);
        // console.log('Mod',i % 10);
        if (i % 6 === 0) {
          newData.push([])
          // console.log('newData',newData);
        }
        const pageSize = parseInt(i / 6)
        // console.log('page',page);
        // console.log('item',item);
        newData[pageSize].push(item) //將物件推入
        // console.log('newData[page]=>',newData[page]);
      })
      this.totalpage = newData.length;

      return newData
    }
  }
}
</script>
<style>
</style>

