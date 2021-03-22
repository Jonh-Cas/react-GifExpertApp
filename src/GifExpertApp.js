import React, {useState} from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
import './index.css'

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch Man']);

    // setCategories([...categories, 'Shingueki no kyojin'])
    // const handleAdd = () => {
    //     setCategories(elemento =>[...elemento, 'Shingueki no kyojin']);
    // }

    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories} />
           <hr /> 

            <ol>
                {categories.map( category => 
                    <GifGrid 
                        key={category}
                        category={category}
                     />
                )}
            </ol>

        </>
    )
}

export default GifExpertApp;


