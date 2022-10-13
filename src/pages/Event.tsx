import { useQuery } from '@apollo/client'
import { ArrowRight } from 'phosphor-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Video from '../components/Video'



function Event() {
  const {slug} = useParams<{slug: string}>()

  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>

    <main className='flex flex-1'>

      {slug ? <Video  lessonSlug={slug} /> : <div  className='flex-1'> 
          <h1 className='text-white text-center font-bold text-4xl mt-8 flex gap-3 items-center justify-center' >Clique nas Aulas ao Lado <ArrowRight size={32}/></h1>
      </div>}
   
    <Sidebar/>
    </main>
   
    </div>
  )
}

export default Event