/**
 * Created by millet on 18/2/2.
 */
import toast from './toast';
import Masker from './masker';

const components ={
  toast,
  Masker
}

export default{
  install (Vue){
    Object.keys(components).forEach((element,index) => {
      Vue.component(element, components[element])
    });
   
  }
  
}


