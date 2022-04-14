import NoteList from './NoteList'
import Spinner from './Spinner'
import useFetch from './useFetch'



const Home = () => {
    const { data: notes, isLoading } = useFetch('http://localhost:8000/notes/')
   
    return (
        <div className='noteList'>
            {notes && notes.map(note => <NoteList key={note.id} note={note} />)}
            {isLoading && <Spinner />}
        </div>
    )
}

export default Home
