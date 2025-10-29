import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found - Krishna Bajpai</title>
        <meta name="description" content="Page not found - 404 error page" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="relative space-y-4">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/src/assets/hero-flow.png')] bg-no-repeat bg-cover opacity-5" />
            
            <h1 className="text-6xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-3xl font-light relative">
              Page Not Found
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-colors duration-300"
            >
              <Link to="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
