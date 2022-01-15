import  {ref} from '@nuxtjs/composition-api'

export function useToggle(){
  console.log("use toggle")

  let isVisible = ref(false)

  function show(){
    console.log("show")
    isVisible.value = true
  }

  function hide(){
    console.log("hide")

    isVisible.value = false
  }

  function toggle(){
    console.log("toggle")

    isVisible.value == true ? hide() : show()
  }

  return {
    isVisible,
    show,
    hide,
    toggle
  }
}
