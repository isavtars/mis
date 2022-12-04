import React from 'react'
import Navbar from './Navbar';
import "./exploar.css"
import { useLocation } from 'react-router-dom';
import KhaltiCheckout from "khalti-checkout-web";
const Exploarbbo = () => {
    let book = useLocation().state.item;
  console.log(book)



  let config = {
    // replace this key with yours
    "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
//     // minimum transaction amount must be 10, i.e 1000 in paisa.
//     checkout.show({amount: 1000});
// }

const paymentbykhalti=()=>{
 checkout.show({amount: 1000});
 console.log("click khalti")
}
  return (
   <div className='expoar'>
   <div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>

   
             <div className='exploardiv'>              
                 <div className="expolarbook">
                 <table>
                 <tr>
                   <th>Image</th>
                   <th>Name</th>
                   <th>autho</th>
                   <th>gener</th>
                 </tr>

                 <tr>
                   <td><img src={book.image} alt={`${book.name}`} className="expoimg" /></td>
                   <td>{book.name}</td>
                   <td>{book.author}</td>
                   <td>{book.gener}</td>
                 </tr>


                 
                
                 </table>
              </div>
             
    </div>

    <div className="pay">
    
    <form action="https://uat.esewa.com.np/epay/main" >
    <input value="100" name="tAmt" type="hidden" />
    <input value="90" name="amt" type="hidden"/>
    <input value="5" name="txAmt" type="hidden"/>
    <input value="2" name="psc" type="hidden"/>
    <input value="3" name="pdc" type="hidden"/>
    <input value="EPAYTEST" name="scd" type="hidden"/>
    <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden"/>
    <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su"/>
    <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu"/>
    <input value="Submit" type="submit"/>
    </form>

    <button onClick={paymentbykhalti}>
      pay by khalti
    </button>
    </div>


   </div>
  )
}

export default Exploarbbo