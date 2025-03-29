import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
    // 导航数据列表
    const categoryList = ref([]);

    // 获取导航数据
    const getCategory = async ()=>{
      const res = await getCategoryAPI();
      categoryList.value = res.result;
    }

    return {
        categoryList,
        getCategory
    }
})
