import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the current path has a trailing slash (except root), remove it
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      const pathWithoutSlash = location.pathname.slice(0, -1);
      navigate(pathWithoutSlash + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;