import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateNote = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();

        const note = { title, content }

        fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    })
    .then(() => console.log('Note Added'))
    .catch(error => console.log(error.message))

        setTitle('')

        setContent('')

        history.push('/')

    }

    return (
        <form onSubmit={handleSubmit} className='form-box'>
            {/* <p>{title}</p>
            <p>{content}</p> */}
            <div className="title">
                <label>Title:</label>
                <input value={title} className="input-style" placeholder='Add A Title' type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <textarea value={content} className='textarea-style' placeholder='Write something....' onChange={(e) => setContent(e.target.value)}></textarea>
            <button type='submit'>Add Note</button>
        </form>

    )
}

export default CreateNote
