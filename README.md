1. Create a new GitHub repository and push the project files.
2. In Netlify, click "New site from Git" and connect your repo.
3. In Netlify site settings → Build & deploy → Environment:
   - Add `STRIPE_SECRET_KEY` with your Stripe **secret** key (starts with sk_...)
4. Edit `index.html` and replace `pk_test_REPLACE_ME` with your Stripe **publishable** key (starts with pk_...).
5. Deploy the site. Netlify will build and serve your static files and serverless functions.
6. In Netlify DNS or your domain provider, create a CNAME for `donate.edsvel.com` pointing to your Netlify site (or set the domain in Netlify's Domain settings).

Notes:
- Do **not** commit your Stripe secret key to the repo.
- Test with Stripe test cards (4242 4242 4242 4242) in test mode.
- When ready to go live, swap keys to your live Stripe keys.