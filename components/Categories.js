import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'
import client, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    try {
      client
        .fetch(
          `
*[_type == 'category']
`
        )
        .then((data) => {
          setCategories(data)
          // console.log('Data: ', data?.restaurants)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
