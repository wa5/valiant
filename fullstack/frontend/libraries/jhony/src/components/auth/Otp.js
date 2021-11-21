import React from 'react'
import firebase from 'firebase/compat/app'
import fibconfig from '../../firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

function Otp() {
function mob(){
    firebase.initializeApp(fibconfig)
    const uiConfig={
        signInOptions:[{
            
            provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID,
           
              
             
               
   
           
            recaptchaParameters:{
                type:'image',
                size:'normal',
                badge:'bottomleft'
            },
            defaultCountry:'IN'}],
        callbacks:{
            signInSuccessWithAuthResult:function(){
                alert('success')
                return true
            }
        },
        signInSuccessUrl:'http://localhost:3000/'
    }

    var ui=new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#fbc',uiConfig)
}



    return (
        <>
            <div id="fbc"></div>
            <button onClick={()=>{mob()}}>click me</button>
        </>
    )
}

export default Otp
