import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ]
})

export {handler as GET, handler as POST}

// in routes copy this
// in layout.js (import session provider) and wrap home with <sessionprovider></sessionprovider>
// change page.js
//.env.local go to github get id and scret add to .env in github auth callback url -> http://localhost:3000/api/auth/callback/github
//component/sessionwrap.js   then