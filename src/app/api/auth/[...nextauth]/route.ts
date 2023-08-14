import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const { GOOGLE_ID, GOOGLE_SECRET } = process.env;
if (!GOOGLE_ID || !GOOGLE_SECRET) {
  throw new Error(
    "Missing GOOGLE_ID and GOOGLE_SECRET environment variables. Did you forget to run your script?",
  );
}


const handler = NextAuth({
  providers: [
    Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})

export { handler as GET, handler as POST }