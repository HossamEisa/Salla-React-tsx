import { ChangeEvent } from 'react';

type FilterProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSelect: (event: ChangeEvent<HTMLSelectElement>) => void
}
function Filter({ handleChange, handleSelect }: FilterProps) {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
      <div className="w-full sm:w-auto mb-4 sm:mb-0 flex flex-col gap-1 flex-1">
        <label htmlFor="product_query" className="hidden">ابحث عن منتج</label>
        <input
          type="text"
          id="product_query"
          name="product_query"
          className="w-full p-2 bg-white appearance-none rounded-md border text-md focus-visible:outline-none focus-within:border-primary transition-colors"
          placeholder="ادخل اسم المنتج..."
          v-model="inputData"
          onInput={handleChange}
        />
      </div>
      <div className="w-full flex flex-col gap-1 shrink-0 sm:w-auto sm:min-w-[200px]">
        <label htmlFor="categories" className="hidden">اختر تصنيف</label>
        <select
          id="categories"
          name="categories"
          className="focus-visible:outline-none bg-white border text-md rounded-md focus:border-primary focus-within:border-primary block w-full px-2 py-1"
          defaultValue={'all'}
          onChange={handleSelect}
        >
          <option value="all">الكل</option>
          <option value="cat_1">تصنيف ١</option>
          <option value="cat_2">تصنيف ٢</option>
          <option value="cat_3">تصنيف ٣</option>
          <option value="cat_4">تصنيف ٤</option>
        </select>
      </div>
    </div>
  )
}

export default Filter