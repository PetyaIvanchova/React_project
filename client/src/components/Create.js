import { useForm } from '../hooks/useForm';

export const Create = ({
    onCreateGameSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    }, onCreateGameSubmit);

    return (
        <div className='register'>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form id="create" method='POST' onSubmit={onSubmit}>


                <h3>Create Game</h3>

                <label htmlFor="leg-title">Title:</label>
                <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter game title..." />

                <label htmlFor="category">Category:</label>
                <input  value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

                <label htmlFor="game-img">Image:</label>
                <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="summary">Description:</label>
                <textarea className='txtarea' name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                <input className="loginp" type="submit" value="Create Game" />

            </form>

        </div>

    );
};

