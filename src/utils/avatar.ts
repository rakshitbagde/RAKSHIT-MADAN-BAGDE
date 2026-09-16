import { useState, useEffect } from 'react';

const AVATAR_STORAGE_KEY = 'dr_rakshit_bagde_avatar';
export const DEFAULT_AVATAR = '/profile-photo.png';

export function getAvatarUrl(): string {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(AVATAR_STORAGE_KEY);
      if (saved) return saved;
    } catch {
      // ignore
    }
  }
  return DEFAULT_AVATAR;
}

export function setCustomAvatar(dataUrl: string) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(AVATAR_STORAGE_KEY, dataUrl);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event('avatar-updated'));
  }
}

export function resetAvatar() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(AVATAR_STORAGE_KEY);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event('avatar-updated'));
  }
}

export function useAvatar(): [string, (url: string) => void, () => void] {
  const [avatar, setAvatar] = useState<string>(getAvatarUrl());

  useEffect(() => {
    const onUpdate = () => {
      setAvatar(getAvatarUrl());
    };
    window.addEventListener('avatar-updated', onUpdate);
    return () => window.removeEventListener('avatar-updated', onUpdate);
  }, []);

  return [avatar, setCustomAvatar, resetAvatar];
}
