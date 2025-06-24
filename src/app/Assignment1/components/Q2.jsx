// Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

export default function UserCard({url ,username , email}){
    return(
        <div>
             <img
            src= {url}
            alt="avatar-logo"
            width={22}
            height={22}></img>
            <p> Hello {username} , your email is {email}, </p> 
        </div>
    );
}





// we use {} to store dynmaic value 
// Notes
// React components use props to communicate with each other.
// Every parent compo can pass some information to its children compo by giving the props
// we can also pass javascript value trought them , including obj, arr, function`