
<form action="/charge" method="POST">
                <script
                    src="https://checkout.stripe.com/checkout.js" 
                    class="stripe-button"
                    data-key="{{stripePublishableKey}}"
                    data-amount="2500"
                    data-name="SisterWorks Donation"
                    data-description="SisterWorks Donation"
                    data-image="/img/marketplace.png"
                    data-locale="auto"
                    data-currency="aud"
                    data-zip-code="true"
                    data-billingAddress="true">
                </script>
                <script>
                    // Hide default strip button
                    document.getElementsByClassName('stripe-button-el')[0].style.display = 'none';
                </script>
                    {{!-- <input class="input-lg" type="input-box" placeholder="custom amount"/> --}}
                    <button type="submit" class="btn btn-outline-dark btn-lg">Other</button>
                </form> 