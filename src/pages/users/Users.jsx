import React from 'react'

import { ErrorMessage } from '../../components/alerts/ErrorMessage';
import { Link, useLoaderData } from 'react-router-dom';

export const Users = () => {

 const { users,error } = useLoaderData();

 return (
   <>
     {!users ? (
       <ErrorMessage
         message={error.message}
         status={error.status}
         code={error.code}
         timestamp={error.timestamp}
       />
     ) : (
       <>
         <div className="container-fluid">
           <table className="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Type</th>
                 <th scope="col">username</th>
                 <th scope="col">Role</th>
                 <th scope="col">user status</th>
                 <th scope="col">expired</th>
                 <th scope="col">user locked</th>
                 <th scope="col">credentials status</th>
               </tr>
             </thead>
             <tbody>
               {users.map((user, key) => (
                 <tr key={key}>
                   <th scope="row">{user.id}</th>
                   <td>{user.username}</td>
                   <td>{user.roles.map((role) => role.roleName + " - ")}</td>
                   <td>{user.enabled ? <>enabled</> : <>disabled</>}</td>
                   <td>
                     {user.accountNonExpired ? <>no expired</> : <>expired</>}
                   </td>
                   <td>
                     {user.accountNonLocked ? <>no locked</> : <>locked</>}
                   </td>
                   <td>
                     {user.credentialsNonExpired ? <>enabled</> : <>disabled</>}
                   </td>
                   <td>
                     <Link
                       to={`/users/${user.id}`}
                       className="btn btn-info"
                     >
                       Ver
                     </Link>
                     <Link
                       to={`/users/${user.id}/edit`}
                       className="btn btn-warning"
                     >
                       Editar
                     </Link>
                     <button
                       
                       className="btn btn-danger"
                     >
                       Eliminar
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </>
     )}
   </>
 );
}
