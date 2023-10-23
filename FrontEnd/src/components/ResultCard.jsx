import { PhotoIcon } from '@heroicons/react/24/outline'

const ResultCard = () =>{

    return(
        <div className=" container max-w-6xl px-2 py-6 rounded-sm">
            <div className="relative grid md:grid-cols-2 gsp-4">
                
                <PhotoIcon className="flex ml-5 max-h-5 max-w-5"/>
                <PhotoIcon className="flex  ml-5 max-h-5 max-w-5"/>
                
            </div>

        </div>
    )
}
export default ResultCard;