<template>
 <div class="flex mt-5 w-full">
      <div class="flex w-5/12">
        <div class="flex justify-start">
          <input
                placeholder="مبدا (شهر)"
                type="text"
                name="source"
                id="a1"
                autocomplete="off"
                class="
                  rounded-md
                  ring-1 ring-gray-300
                  px-5
                  py-3
                  focus:bg-gray-50
                  w-full
                  focus:ring-2 focus:border-gray-400
                "
              />
            </div>
             <span>
              <button class="flex my-2 rounded-full  ring-gray-300 p-1">
                <span
                    <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                      <path
                        d="m16.96 12.157.07.063 3.75 3.75a.757.757 0 0 1 .06.067l-.06-.067a.748.748 0 0 1 .22.53v.025a.728.728 0 0 1-.003.039L21 16.5a.747.747 0 0 1-.147.446l-.01.014-.008.01-.055.06-3.75 3.75a.75.75 0 0 1-1.123-.99l.063-.07 2.469-2.47H8.25a.75.75 0 0 1-.087-1.495l.087-.005h10.189l-2.47-2.47a.75.75 0 0 1-.062-.99l.063-.07a.75.75 0 0 1 .99-.063ZM8.03 3.22a.75.75 0 0 1 .063.99l-.063.07-2.47 2.47h10.19a.75.75 0 0 1 .088 1.495l-.088.005H5.56l2.47 2.47a.75.75 0 0 1 .063.99l-.063.07a.75.75 0 0 1-.99.063l-.07-.063-3.75-3.75-.055-.06a.644.644 0 0 1-.005-.007l.06.067A.756.756 0 0 1 3 7.5v-.014a.47.47 0 0 1 .003-.053L3 7.5a.756.756 0 0 1 .22-.53l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                      ></path>
                    </svg>
              </button>
            </span>
            <div>
                  <input
                placeholder="مقصد (شهر)"
                type="text"
                name="source"
                id="a1"
                autocomplete="off"
                class="
                  rounded-md
                  ring-1 ring-gray-300
                  px-5
                  py-3
                  focus:bg-gray-50
                  w-full
                  focus:ring-2 focus:border-gray-400
                "
              />
            </div>
          </div>
         <div class="flex w-3/12 mr-1.5">
            <div class="flex justify-start">
                 <input
                placeholder="تاریخ رفت"
                type="text"
                name="source"
                autocomplete="off"
                class="
                  rounded-r-md
                  ring-1 ring-gray-300
                  px-5
                  focus:bg-gray-50
                  w-full
                  focus:ring-2 focus:border-gray-400
                "
              />
            </div>
            <div class="pr-1">
                  <input
                placeholder="تاریخ برگشت"
                type="text"
                name="source"
                autocomplete="off"
                class="
                  rounded-l-md
                  ring-1 ring-gray-300
                  px-5
                  py-3
                  focus:bg-gray-50
                  w-full
                  focus:ring-2 focus:border-gray-400
                "
              />
            </div>
          </div>
          <div class="w-2/12 my-auto mr-1.5">
          <span>
          <input
                placeholder="1 مسافر"
                type="text"
                name="source"
                id="a1"
                autocomplete="off"
                class="
                  rounded-md
                  ring-1 ring-gray-300 placeholder-gray-800
                  px-5
                  py-3
                  focus:bg-gray-50
                  w-full
                  focus:ring-2 focus:border-gray-400
                "
              />           </span>
          </div>
          <div class="w-2/12 mr-1.5">
            <button class="bg-yellow-400 w-full py-2.5 text-black text-lg rounded-lg hover:bg-yellow-500 ring-1 ring-red-400" type="button">جستجو</button>
          </div>
        </div>
</template>
