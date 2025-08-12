import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ displayName: '', photoURL: '' });

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setFormData({
          displayName: currentUser.displayName || '',
          photoURL: currentUser.photoURL || '',
        });
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleSave = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      setUser({ ...auth.currentUser });
      setEditMode(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!user) return null;

  return (
    <div>
      <Helmet><title>My Profile</title></Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
        {/* <div className="absolute top-5 right-5">
          <button onClick={toggleTheme} className="btn btn-sm btn-primary">
            {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div> */}

        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

          <div className="flex flex-col items-center mb-4">
            <img
              src={editMode ? formData.photoURL : user.photoURL || 'https://i.ibb.co/2n4Zr3y/default-avatar.png'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow mb-3"
            />
          </div>

          {editMode ? (
            <>
              <input
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="Full Name"
                className="input bg-blue-400 input-bordered w-full mb-3"
              />
              <input
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Photo URL"
                className="input bg-blue-400 input-bordered w-full mb-3"
              />
              <div className="flex justify-center gap-3 mt-4">
                <button onClick={handleSave} className="btn btn-success">Save</button>
                <button onClick={() => setEditMode(false)} className="btn btn-outline">Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {user.displayName || 'Anonymous'}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p className="text-blue-500 break-words"><strong>Photo URL:</strong> <a href={user.photoURL} target="_blank" rel="noreferrer">{user.photoURL}</a></p>
              <div className="flex justify-center gap-4 mt-6">
                <button onClick={() => setEditMode(true)} className="btn btn-primary">Edit Profile</button>
                <button onClick={handleLogout} className="btn btn-error">Log Out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
