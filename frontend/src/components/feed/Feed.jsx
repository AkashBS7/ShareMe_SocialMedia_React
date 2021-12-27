import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/Data';
import MasonryLayout from '../masonryLayout/MasonryLayout';
import Spinner from '../spinner/Spinner';


export default function Feed() {

    const [pins, setPins] = useState(null);
    const [loading, setloading] = useState(false);
    const {catergoryId} = useParams();

    useEffect(() => {
        setloading(true);
        if(catergoryId){
            const query = searchQuery(catergoryId);

            client.fetch(query)
            .then((data) => {
                setPins(data);
                setloading(false);
            })
        } else {
            client.fetch(feedQuery)
            .then((data) => {
                setPins(data);
                setloading(false);
            })
        }
    }, [catergoryId])

    if(loading) return <Spinner message='We are adding new ideas to your feed!' />

    return (
        <div>
            {pins && <MasonryLayout pins={pins}/>}
        </div>
    )
}
