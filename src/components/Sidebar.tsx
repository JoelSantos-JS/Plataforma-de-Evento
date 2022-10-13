import { gql, useQuery } from '@apollo/client'
import React from 'react'
import Lesson from './Lesson'

const GET_LESSON_QUERY = gql `
    query  {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}

`

interface GetLesson {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'

    }[]
}

function Sidebar() {

    const {data} = useQuery<GetLesson>(GET_LESSON_QUERY)




  return (
<aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600' >

    <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-white text-center'>
        Cronograma de aulas
    </span>

    <div className='flex flex-col gap-8 text-white'>
        {data?.lessons.map(lesson => {
            return (
                <Lesson title={lesson.title} slug={lesson.slug}  key={lesson.id} availableAt={ new Date(lesson.availableAt)} type={lesson.lessonType}/>
            )
        })}
      
    </div>

</aside>
  )
}

export default Sidebar