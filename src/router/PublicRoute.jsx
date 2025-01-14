import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCheckUserauthenticated } from '../providers/hooks/useCheckUserAuthenticated';

export const PublicRoute = ({ children }) => {

   const { status} = useCheckUserauthenticated();

  const navigate = useNavigate();

   useEffect(()=>{

       if (status === "authenticated") {
      
         navigate("/");
       }
   },[status])

  return children;
};
