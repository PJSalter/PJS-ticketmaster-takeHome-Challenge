# PJS-ticketmaster-takeHome-Challenge

#### A challenge that was tasked by TicketMaster 

#### This task relates to a specific outline whereby a current event may lack ticket availability. However more could appear in an approaching time ahead from an instance like 'a promotor releases more tickets for us to sell'.

#### They may want to stay clear from this scenario where a fan visits an event details page, sees that there are no tickets and assumes that it's sold out or completely unavailable.

#### To facilitate this we have the ability to add fans to a waiting list, which will allow them to be notified if more tickets become available for sale.

#### The waiting list form is accessed from a "join the waiting list" button which renders on an event details page if it currently has no tickets available.

# User Stories: 

- A fan can be notified via email or SMS, so the form should allow submission of email address and/or mobile phone number.

- A fan must be signed in to Ticketmaster in order to add themselves to the waiting list. If they're not signed in, we'll prompt them to sign in when they click the "join the waiting list" button.

- Once a fan is signed in, we'll have their email address, so we will pre-fill the email address field with it.

- A fan can optionally add their phone number to the form.

- If a fan adds a phone number, they should be given the option to disallow contact via email.

- A fan should not be allowed to submit an empty form.

- Successful submission of the form should send a POST request to the waiting list API which will return a success or error response.

- The waiting list API should be called when the form loads, to prevent adding the fan to the waiting list multiple times. If the fan is already on the waiting list the fan should see a message informing them of that.


