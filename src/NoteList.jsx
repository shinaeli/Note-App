import {Link} from 'react-router-dom'

const NoteList = ({note}) => {
  const shortened = note.content.substr(0, 180);
    return (
      <div className='note'>
          <h2>{note.title}</h2>
          <p>{shortened}...</p>
          <Link to={`/notes/${note.id}`}>Read Note</Link>
      </div>
    )
}

export default NoteList
