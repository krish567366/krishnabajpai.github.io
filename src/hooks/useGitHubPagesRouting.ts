import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useGitHubPagesRouting = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      // Clear it immediately
      delete sessionStorage.redirect;
      
      // Clean up the path
      const cleanPath = redirect.replace(/^\//, '').replace(/\/$/, '');
      
      // Only redirect if we're not already there and it's not the homepage
      if (cleanPath && cleanPath !== '' && `/${cleanPath}` !== location.pathname) {
        navigate(`/${cleanPath}`);
      }
    }
  }, []);

  // Handle the initial page load
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const path = location.hash.replace('#', '');
      if (path) {
        navigate(path);
      }
    }
  }, [location]);
};