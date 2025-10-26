// SettingsPage.tsx

import React from 'react';
import { useHistory } from 'react-router-dom';
import clerkClient from 'clerk-sdk';

interface SettingsPageProps {}

interface UserProfile {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  imageUrl?: string | null;
}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const history = useHistory();
  const [userProfile, setUserProfile] = React.useState<UserProfile>({});

  const fetchUserProfile = async () => {
    try {
      const user = await clerkClient.users.getUser(
        clerkClient.user!.id!,
        clerkClient.getSession()!.frontendApi!
      );
      setUserProfile({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddress!.emailAddress,
        phoneNumber: user.phoneNumber,
        imageUrl: user.primaryEmailAddress!.emailAddressImageUrl,
      });
    } catch (err) {
      console.error('Error fetching user profile:', err);
    }
  };

  const updateUserProfile = async (field: string, value: string) => {
    try {
      await clerkClient.users.updateUser(
        clerkClient.user!.id!,
        {
          [field]: value,
        },
        clerkClient.getSession()!.frontendApi!
      );
      setUserProfile({ ...userProfile, [field]: value });
    } catch (err) {
      console.error('Error updating user profile:', err);
    }
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <img src={userProfile.imageUrl} alt="Profile" />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={userProfile.firstName || ''}
          onChange={(e) => updateUserProfile('firstName', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={userProfile.lastName || ''}
          onChange={(e) => updateUserProfile('lastName', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userProfile.email || ''}
          onChange={(e) => updateUserProfile('emailAddress', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={userProfile.phoneNumber || ''}
          onChange={(e) => updateUserProfile('phoneNumber', e.target.value)}
        />
      </div>
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  );
};

export default SettingsPage;