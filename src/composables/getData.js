import { ref } from 'vue'
import axios from 'axios'

export function useGetData () {
  const data  = ref(null)
  const loading = ref(true)
  const errorData = ref(null)

  const getData = async(url)=>{
    loading.value = true
    try{      
        const response = await axios.get(url)
        data.value = response.data
        //console.log(response.data)        
    }
    catch(err){
      console.log(err)
      errorData.value = "Error del servidor"
    }finally{
      loading.value = false
    }
   
  }
  return { 
    loading,           
    getData,
    data,
    errorData 
  }
}