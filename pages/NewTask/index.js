import UserBar from '../../components/UserBar';
import Title from '../../components/Title';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';

export default function NewTask(){

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);
    const [description, setDescription] = useState('');

    function handleNewTask(){

    }

    function handleChangePriority(){

    }

    return(
        <div className='container-logged'>
            
            <UserBar/>

            <div className='content'>

                <Title name="New Task">
                    <FaPlus size={25}/>
                </Title>

                <div className='area-form-new-task'>
                    <form onSubmit={handleNewTask}>

                        <div className='form-pt1'>
                            <div className='title-area'>
                                <label>Title</label>
                                <input type="text" placeholder='Task name' onChange={ (e) => {setTitle(e.target.value)} }/>
                            </div>

                            <div className='priority-area'>
                                <label>Priority</label>
                                <select onChange={handleChangePriority}>
                                    <option selected value={0}>Low</option>
                                    <option value={1}>Medium</option>
                                    <option value={2}>High</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-pt2'>
                            <label>Description</label>
                            <textarea type="text" placeholder='Task description' onChange={(e) => {setDescription(e.target.value)}}></textarea>
                        </div>

                        <button type='submit' className='btn-add-task'>submit</button>
                    </form>
                </div>

            </div>

        </div>
    );

}