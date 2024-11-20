import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [image, setImage] = useState(null); // State for the uploaded image
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);
    const onImageChanged = (e) => setImage(e.target.files[0]); // Update state with selected file

    const canSave =
        [title, content, userId].every(Boolean) &&
        addRequestStatus === 'idle';

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');

                // Prepare form data for file upload
                const formData = new FormData();
                formData.append('title', title);
                formData.append('body', content);
                formData.append('userId', userId);
                if (image) {
                    formData.append('image', image);
                }

                await dispatch(addNewPost(formData)).unwrap();

                setTitle('');
                setContent('');
                setUserId('');
                setImage(null); // Reset the image state
                navigate('/');
            } catch (err) {
                console.error('Failed to save the post', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <label htmlFor="postImage">Upload Image:</label>
                <input
                    type="file"
                    id="postImage"
                    name="postImage"
                    accept="image/*"
                    onChange={onImageChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
