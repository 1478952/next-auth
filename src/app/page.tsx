"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session?.user);
  return (
    <main>
      <button onClick={() => signIn()}>로그인</button>
      <button onClick={() => signOut()}>로그아웃</button>
      {session?.user?.name}
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt="사용자 이미지"
          width={200}
          height={200}
        />
      )}
    </main>
  );
}
