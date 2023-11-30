import { useState } from 'react'
import { GifGrid, Header, NavForm } from './components'

function App () {
  const [categories, setCategories] = useState([])

  const onAddCategory = category => {
    const inputCategory = category.trim()

    if (inputCategory.length < 1) return
    if (categories.includes(inputCategory)) return

    setCategories(categories => [inputCategory, ...categories])
  }

  return (
    <>
      {/* Title area */}
      <header className='grid grid-cols-4 gap-10 py-6 px-10'>
        <Header />
        <NavForm onAddCategory={onAddCategory} />
      </header>
      {/* Categories area */}
      <div className='max-w-7xl mx-auto'>
        {categories.map(category => (
          <GifGrid key={category} categoryName={category} />
        ))}
      </div>
      {/* Gif list */}
    </>
  )
}

export default App
