import React from 'react'

import {CheckCircle , Lock} from 'phosphor-react'

import {isPast , format} from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';



interface lessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

function Lesson(props: lessonProps) {

    const {slug} = useParams<{slug: string}>()

    const inLessoAvalaible = isPast(props.availableAt)
    const avalableDate =  format(props.availableAt, "EEEE' . 'd' de 'MMM' ' . ' 'k'h'mm' ", {locale: ptBR})
 
        const isActiveLesson = slug === props.slug


  return (
    <Link to={`/event/lesson/${props.slug}` } className="group">
        <span>{avalableDate}</span>

        <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : '' }`}>
            <header className='flex items-center justify-between'>
                {inLessoAvalaible ? (
                    <span className='text-sm flex gap-2 items-center text-blue-500 font-medium'>
                    <CheckCircle size={20}/>
                Conteudo Liberado</span>
                ): (
                    <span className='text-sm flex gap-2 items-center text-orange-500 font-medium'>
                        <Lock size={20}/>
                    Em breve</span>
                )}
                <span className='text-xs rounded px-2 py-[2px] text-white  border border-green-500 font-bold '>{props.title === 'live' ? 'AO VIVO' : 'AULA PRATICA' }</span>
            </header>

            <strong className='text-gray-200 mt-5 block'>{props.title}</strong>
        </div>

    </Link>
  )
}

export default Lesson