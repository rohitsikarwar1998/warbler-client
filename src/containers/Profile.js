import React, { useState, useEffect } from 'react';
import { apiCall } from '../services/api';
import Profile from '../components/Profile/Profile';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProfileContainer = ({ user_id }) => {
  const history = useHistory();
  const api = `http://localhost:8001/api/users/${user_id}/profile/`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [shortBio, setShortBio] = useState('');

  useEffect(() => {
    fetchUserInfo();
  }, []);

  //fetch user information
  async function fetchUserInfo() {
    let data = await apiCall('get', api);
    if (data.name) setName(data.name);
    if (data.email) setEmail(data.email);
    if (data.username) setUsername(data.username);
    if (data.imageUrl) setImageUrl(data.imageUrl);
    if (data.shortBio) setShortBio(data.shortBio);
  }

  let postData = {
    name,
    email,
    username,
    imageUrl,
    shortBio,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    await apiCall('post', api, postData);
    history.goBack();
  };

  let handleCancel = () => {
    let response = window.confirm(
      'All your changes will be lost: are you sure?',
    );
    if (response) history.goBack();
  };

  let set = {
    name,
    email,
    username,
    imageUrl,
    shortBio,
    setName,
    setEmail,
    setUsername,
    setImageUrl,
    setShortBio,
    handleSubmit,
    handleCancel,
  };

  return (
    <div className="profile-container">
      <Helmet>
        <style>{'body { background-color: #ac3b61; }'}</style>
      </Helmet>
      <Profile {...set} />
    </div>
  );
};

export default ProfileContainer;
