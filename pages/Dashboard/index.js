import { FaClipboardList, FaPlus } from 'react-icons/fa';
import UserBar from "../../components/UserBar";
import Title from "../../components/Title";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard(){

    return(
        <div className="container-logged">

            <UserBar/>

            <div className="content">

                <Title name="Dashboard">
                    <FaClipboardList size={25}/>
                </Title>

                <button className='btn-new-task'>
                    <Link href="/NewTask">
                        <div>
                            <FaPlus size={25} color="#fff"/>
                        </div>
                    </Link>
                </button>

                <div className='tasks'>
                    <table>
                        <thead>
                            <th scope='col'>Task</th>
                            <th scope='col'>Created at</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>#</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Buy milk</td>
                                <td>16/03/2022</td>
                                <td>Low</td>
                                <td>done</td>
                                <td>buttons</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            
        </div>
    );

}