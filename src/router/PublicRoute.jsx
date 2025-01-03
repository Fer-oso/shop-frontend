import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCheckUserauthenticated } from '../providers/hooks/useCheckUserAuthenticated';

export const PublicRoute = ({ children }) => {

   const { session } = useCheckUserauthenticated();

  const navigate = useNavigate();

   useEffect(()=>{

       if (session.status === "authenticated") {
         navigate("/");
       }
   },[session])

  return children;
};
