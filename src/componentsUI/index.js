/**
 * Created by millet on 18/2/2.
 */
import toast from './toast';
import Masker from './masker';
import loading from './loading';

const components ={
  toast,
  Masker,
  loading
}

export default{
  install (Vue){
    Object.keys(components).forEach((element,index) => {
      Vue.component(element, components[element])
    });
   
  }
  
}


