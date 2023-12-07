import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_ID ?? "",
      clientSecret: process.env.KAKAO_SECRET ?? "",
    }),
  ],
});
export { handler as GET, handler as POST };
