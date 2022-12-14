import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Spinner } from 'phosphor-react'
import '@vime/core/themes/default.css'
import React from 'react'
import { gql, useQuery } from '@apollo/client';





interface GETLESSONS {
      lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
          bio: string;
          avatarUrl: string;
          name: string;
        }
      }
}

const GET_LESSON_BY_SLUG = gql `
  query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    description
    videoId
    teacher {
      bio
      avatarURL
      name
    }
  }
}



`

interface VideoProps {
  lessonSlug: string;
}


function Video(props : VideoProps) {


    const {data} = useQuery<GETLESSONS>(GET_LESSON_BY_SLUG, {
      variables: {
        slug: props.lessonSlug,
      }
    })

    console.log(data)

    if (!data || !data?.lesson) {
      return (
          <div className="flex-1 flex flex-col justify-center items-center gap-2 text-gray-400 bg-reactIcon bg-center bg-no-repeat bg-contain">
              <Spinner size={64}>
                  <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="5s"
                      from="0 0 0"
                      to="360 0 0"
                      repeatCount="indefinite"
                  />
              </Spinner>
              <p className="text-lg">Carregando...</p>
          </div>
      )
  }    


  return (
    <div className='flex-1 text-white'>
      <div className='bg-black'>

        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
         <Player>
          <Youtube videoId={data?.lesson.videoId}/>
          <DefaultUi />
         </Player>
        </div>

      </div>

      <div className='p-8 max-w-[1100px] mx-auto'> 

        <div className='flex items-start gap-16'>
          <div className='flex-1'>
        <h1 className='text-2xl font-bold'>{data?.lesson.title}</h1>

        <p className='mt-4 text-gray-200 leading-relaxed'>{data?.lesson.description}</p>
         
         <div className='flex items-center gap-4 mt-6'>
            <img src="https://avatars.githubusercontent.com/u/37488416?v=4" alt=""  className='h-16 w-16 rounded-full border-2 border-blue-500'/>
            <div className='flex flex-col'>
              <strong className='font-bold text-2xl block'>{data?.lesson.teacher.name}</strong>

              <span className='text-gray-200 text-sm block'>{data?.lesson.teacher.bio}</span>
            </div>
         </div>
         
          </div>

          <div className='flex flex-col gap-4'>
              <a href="" className='p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center'>
                <DiscordLogo size={24}/>
                Comunidade Discord</a>
              <a href="" className='p-4 text-sm border border-blue-500 flex text-blue-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors'>
                <Lightning size={24}/>
                Acesse o Desafio</a>
          </div>

        </div>

        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
          <div className='bg-green-700 h-full p-6 flex items-center'>

            <FileArrowDown size={40} />
          </div>
          <div className='py-6 leading-relaxed'>
            <strong className='text-2xl'>Material complementar</strong>
            <p className='text-sm text-gray-200 mt-2'>
              Acesse o material complementar para acelerar o seu desenvolvimento

            </p>
          </div>
          <div className='h-full p-6 flex items-center'>
            <CaretRight size={24}/>
          </div>
          </a>
          <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
          <div className='bg-green-700 h-full p-6 flex items-center'>

            <FileArrowDown size={40} />
          </div>
          <div className='py-6 leading-relaxed'>
            <strong className='text-2xl'>Wallpapers exclusivos</strong>
            <p className='text-sm text-gray-200 mt-2'>
              Acesse o material complementar para acelerar o seu desenvolvimento

            </p>
          </div>
          <div className='h-full p-6 flex items-center'>
            <CaretRight size={24}/>
          </div>
          </a>
      

        </div>


      </div>

    </div>
  )
}

export default Video