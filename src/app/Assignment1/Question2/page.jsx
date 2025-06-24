import UserCard from "../components/Q2";

export default function Userdata(){
    return(
        <>
        <UserCard 
                url="/Images/image.png" 
                username = "Abhisek" 
                email= "abhishek@succesive"
                
              />
              <UserCard 
               url="/Images/image.png" 
                username = "GOKU" 
                email= "abhishek@succesive"
              />
        </>
    );
}