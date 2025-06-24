import Weather from "../components/Q3";

export default function (){
    return(
        <>
         <Weather
      temperature={20}/>
         <hr></hr>
         <Weather temperature ='abc'/>
       <hr></hr>
       <Weather
      temperature={-67}
      />
        </>
    );
}