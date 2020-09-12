import React, { useState } from 'react';
import './NewItem.css';
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase';


function NewItem() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [description, setDescription] = useState('');
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allImputs);

    const onSubmit = (event) => {
        event.preventDefault();
        const user = auth.currentUser;

        if (name && brand && size && description) {

            console.log(imageAsFile)
            const handleImageAsFile = (e) => {
                const image = e.target.files[0]
                setImageAsFile(imageFile => (image))
            }

            console.log('Form is full')
            console.log(user.uid)

            db.collection('users')
                .doc(user.uid)
                .collection('items')
                .doc()
                .set({
                    name: name,
                    brand: brand,
                    size: size,
                    description: description,
                    sold: false,
                    createdAt: Date()
                })
                .then(function() {
                    console.log('Document successfully added')
                })
                .then(function() {
                    history.push('/dashboard/items')
                })
                .catch(function(error) {
                    console.log('There was an error writing document')
                })
            
                
        } else {
            alert('Please fill in all fields')
        }
    }
    
    return (
        <div className="newItem">
            <h1>Add Your New Item</h1>
            <div className="newItem__form">
                <form className="grid">
                    <h3 className="newItem__formTitle">Item Name</h3>
                    <input 
                    value={name} onChange={event => setName(event.target.value)}
                    className="newItem__formInput" type="text" required/>

                    <h3 className="newItem__formTitle">Item Brand</h3>
                    <select 
                    value={brand} onChange={event => setBrand(event.target.value)}
                    className="newItem__formInput" name="brands" id="brands" required>
                        <option>Choose a Brand</option>
                        <option value="Adidas">Adidas</option>
                        <option value="H&M">H&M</option>
                        <option value="JCrew">JCrew</option>
                        <option value="Nike">Nike</option>
                    </select>

                    <h3 className="newItem__formTitle">Item Size</h3>
                    <select 
                    value={size} onChange={event => setSize(event.target.value)}
                    className="newItem__formInput" name="size" id="size" required>
                        <option>Choose a Size</option>
                        <option value="xsmall">X-Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <h3 className="newItem__formTitle">Item Description</h3>
                    <textarea 
                    value={description} onChange={event => setDescription(event.target.value)}
                    className="newItem__formInput" required/>

                    <h3 className="newItem__formTitle">Item Images</h3>
                    <input 
                     onChange={handleImageAsFile}
                    className="newItem__formInput" type="file" accept="image/*" multiple required/>

                    <div className="newItem__formSubmit">
                        <button type="submit" onClick={onSubmit}>Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewItem
