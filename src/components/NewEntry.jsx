import React, {useState} from 'react'
import { useParams} from 'react-router-dom'

const NewEntry = ({addEntry}) => {
    const {category} = useParams()
    const [entry, setEntry] = useState('')

    
    function submit(evt){
        evt.preventDefault()
        addEntry(category, entry)
        // const id = entries.length
        // const newEntry={
        //     category: category,
        //     content: entry
            
        // }
        // setEntries([...entries, newEntry])
        // nav(`/entry/${id}`)
    }
    

  return (
    <>
        <h2>New entry in {category} Category:</h2>
        <form onSubmit={submit} className="container">
            <div>
                <textarea value={entry} onChange={evt => setEntry(evt.target.value)} className="form-control" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mt-3">Create Entry</button>
        </form>
    </>
  )
}

export default NewEntry