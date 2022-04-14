import useFetch from "./useFetch"
import Spinner from './Spinner'
import { useParams, useHistory } from 'react-router-dom'

const Read = () => {
    const history = useHistory()
    const { id } = useParams()
    const { data: note, isLoading } = useFetch(`http://localhost:8000/notes/${id}`)

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete?')) {
            fetch(`http://localhost:8000/notes/${note.id}`, {
                method: 'DELETE'
            })
            .then(() => {
                console.log('Note Deleted!');
                history.push('/');
            })
        }
    }

    return (
        <div>
            {note && <div className='note'>
                        <h2>Title: {note.title}</h2>
                        <p>{note.content}</p>
                        <button className='primary_btn' onClick={handleDelete}>Delete Note</button>
                    </div>}
            {isLoading && <Spinner />}
        </div>
    )
}

export default Read
