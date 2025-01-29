import Link from "next/link"
import Image from "next/image"

export function TestCard(
    {name: testName,imgPath,totalQuestions,totalComplited,lvl }: 
    {name:string
     imgPath: string
     totalQuestions: number
     totalComplited: number
     lvl: 'Легкий' | 'Средний' | 'Сложный'
    
    }){

        return(

            <div className="rounded-xl border">
                <Image src={imgPath} alt='Картинка'/>
                <div className="flex flex-col items-center justify-center">
                    <p>{testName}</p>

                    <div className="flex justify-between items-center"> 
                        
                        <div>
                            <Image src='ИЗМЕНИТЬ' alt="иконка"/>
                            <p>Вопросов:{totalQuestions}</p>
                        </div>

                    </div>

                    <div>
                        <Link href={'ССЫЛКА НА КУРС(СДЕЛАТЬ ДИНАМИКУ)'}>
                        
                            Пройти тест 
                        </Link>

                    </div>
                </div>

            </div>

        )
    }
