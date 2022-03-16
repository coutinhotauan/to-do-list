import UserBar from '../../components/UserBar';
import Title from '../../components/Title';
import { FaPlus } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from "../../contexts/auth";

export default function NewTask(){

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);
    const [description, setDescription] = useState('');

    const {userData} = useContext(AuthContext);

    console.log(userData);

    async function handleNewTask(e){

        e.preventDefault();

        let uid = userData.uid;
        let date = new Date();
        let todayDate = date.getDay() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();
        let todayHour = data.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let today = todayDate + ' ' + todayHour;

        if( !title || !description){
            toast.warning('Fill in all fields!');
            return;
        }

        await firebase.firestore().collection('tasks')
        .add({
            title: title,
            priority: priority,
            description: description,
            status: 0,
            createdAt: today,
            user: uid,
        })
        then(() => {
            console.log('task created with success');
            setTitle('');
            setPriority(0);
            setDescription('');
            toast.success('Task created with success!');
        })
        .catch((err)=>{
            console.log('error during task creation: ' + err);
            toast.error('Error during task creation');
        })

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
                                <select onChange={(e) => {setPriority(e.target.value)}}>
                                    <option value={0}>Low</option>
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

                <ToastContainer autoClose={3000}/>

            </div>

        </div>
    );

}