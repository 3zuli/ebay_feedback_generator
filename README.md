# ebay_feedback_generator

A bookmarklet which automatically fills the Ebay feedback form.
Written in pure Javascript to avoid loading of external scripts, which is blocked by a lot of websites.

The script gives the seller a full :star: :star: :star: :star: :star: rating, on-time item arrival, positive shopping experience and fills in a very meaningful randomly generated comment such as "*Good seller, reasonable price, good quality, quick shipping*".

The bookmarklet is generated using this tool: https://mrcoles.com/bookmarklet/ . Simply copy-paste everything between `/* Bookmarklet start */` and `/* Bookmarklet end */` and uncheck both "Include jQuery" and "Include custom script". The result is this link:

```
javascript:(function()%7Bvar%20sellerAdjs%20%3D%20%5B'good'%2C%20'very%20good'%2C%20'nice'%2C%20'reliable'%5D%3Bvar%20qualityAdjs%20%3D%20%5B'very%20good'%2C%20'very%20high'%2C%20'good'%2C%20'high'%5D%3Bvar%20priceAdjs%20%3D%20%5B'good'%2C%20'very%20low'%2C%20'reasonable'%2C%20'affordable'%5D%3Bvar%20shippingAdjs%20%3D%20%5B'fast'%2C%20'quick'%5D%3Bfunction%20randomItem(array)%20%7Breturn%20array%5BMath.floor(Math.random()*array.length)%5D%3B%7Dfunction%20cap(string)%20%7Breturn%20string.charAt(0).toUpperCase()%20%2B%20string.slice(1)%3B%7Dfunction%20fillComment()%20%7Bvar%20commentInput%20%3D%20document.getElementsByName('OVERALL_EXPERIENCE_COMMENT')%5B0%5D%3Bcomment%20%3D%20cap(randomItem(sellerAdjs))%20%2B%20%22%20seller%2C%20%22%20%2B%20randomItem(priceAdjs)%20%2B%20%22%20price%2C%20%22%20%2B%20randomItem(qualityAdjs)%20%2B%20%22%20quality%2C%20%22%20%2B%20randomItem(shippingAdjs)%20%2B%20%22%20shipping%22%3BcommentInput.value%20%3D%20comment%3B%2F*%20https%3A%2F%2Felgervanboxtel.nl%2Fsite%2Fblog%2Fsimulate-keydown-event-with-javascript%20*%2Fvar%20e%20%3D%20new%20Event(%22keydown%22)%3Be.key%3D%220%22%3Be.keyCode%3D0%3Be.which%3De.keyCode%3Be.altKey%3Dfalse%3Be.ctrlKey%3Dtrue%3Be.shiftKey%3Dfalse%3Be.metaKey%3Dfalse%3Be.bubbles%3Dtrue%3BcommentInput.dispatchEvent(e)%3B%7Dfunction%20autoFeedback()%20%7BidRe%20%3D%20%2F%5Cd%7B5%2C%7D-%5Cd%7B5%2C%7D%2Fg%3Bvar%20htmlstr%20%3D%20document.body.innerHTML%3Bvar%20UUID%20%3D%20idRe.exec(htmlstr)%5B0%5D%3Bconsole.log(UUID)%3Bdocument.getElementById(%22ON_TIME_DELIVERY-INPUT-%22%2BUUID%2B%22-2%22).click()%3Bdocument.getElementById(%22OVERALL_EXPERIENCE-INPUT-%22%2BUUID%2B%22-POSITIVE%22).click()%3Bdocument.getElementById(%22DSR_ITEM_AS_DESCRIBED-INPUT-%22%2BUUID%2B%22-5%22).click()%3Bdocument.getElementById(%22DSR_SHIPPING_TIME-INPUT-%22%2BUUID%2B%22-5%22).click()%3Bdocument.getElementById(%22DSR_COMMUNICATION-INPUT-%22%2BUUID%2B%22-5%22).click()%3BfillComment()%3B%7DautoFeedback()%7D)()
```

Create a bookmark, insert this code into its address field and off you go! Open a feedback form, click it and enjoy your precious saved time. 

As a bonus, `shrug.js` will try to insert a ¯\\_(ツ)_/¯ into the currently focused text input field. 
```
javascript:(function()%7Bvar%20focused%20%3D%20document.activeElement%3Bconsole.log(focused.tagName)%3Bif(focused.tagName%3D%3D%22INPUT%22)%7Bfocused.value%20%3D%20focused.value%20%2B%20%22%C2%AF%5C%5C_(%E3%83%84)_%2F%C2%AF%22%7Delse%7Bfocused.innerHTML%20%3D%20focused.innerHTML%20%2B%20%22%C2%AF%5C%5C_(%E3%83%84)_%2F%C2%AF%22%3B%7D%7D)()
```

### TODOs:
 - Handle cases where not all of Item description, Shipping time and Seller communication are shown
 - Add more variations to the random comment generator

