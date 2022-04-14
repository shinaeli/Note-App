import spinner from './assets/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="Loading..." style={{width: '20%', margin: '150px auto', display: 'block'}} />
        </div>
    )
}

export default Spinner
