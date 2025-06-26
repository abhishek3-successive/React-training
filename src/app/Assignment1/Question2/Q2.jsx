import{cardStyle , imageStyle, nameStyle , emailStyle} from "./Q2.css"; 
export default function UserCard({ url, username, email }) {
  return (
    <div style={cardStyle}>
      <img src={url} alt="avatar" style={imageStyle} />
      <p style={nameStyle}>Hello {username}</p>
      <p style={emailStyle}>Your email is {email}</p>
    </div>
  );
}
