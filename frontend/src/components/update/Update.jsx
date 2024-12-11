import './update.scss';
import React, { useState } from 'react'
import { makeRequest } from '../../../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const Update = ({setOpenUpdate, user}) => {
  const [cover, setCover]=useState(null);
  const [profile, setProfile]=useState(null);
  const [texts, setTexts]=useState({
    name:"",
    city:"",
    website:"",
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    {

      mutationFn: (user) => {
        return makeRequest.put("/users", user);
      },

      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },

    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverPic;
    let profileUrl=user.profilePic;
    
    coverUrl=cover ? await upload(cover):user.coverPic;
    profileUrl=profile ? await upload(profile) :user.profilePic;
    
    mutation.mutate({...texts, coverPic:coverUrl, profilePic:profileUrl});
    setOpenUpdate(false);
  };

  const handleChange=(e)=>{
    setTexts((prev)=>({...prev,[e.target.name]:[e.target.value]}))
  }
  return (
    <div className='update'>
      Update
      <form >
        <input type="file" />
        <input type="file" />
        <input type="text" name="name" onChange={handleChange}/>
        <input type="text" name="city" onChange={handleChange}/>
        <input type="text" name="website" onChange={handleChange}/>
        <button onClick={handleSubmit}>Update</button>
      </form>
      <button onClick={()=>setOpenUpdate(false)}>X</button>
    </div>
  )
}

export default Update
