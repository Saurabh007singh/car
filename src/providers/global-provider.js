"use client"

import { SessionProvider, useSession } from "next-auth/react";





function AuthSyncWrapper({ children }) {
  const { data: session, status } = useSession();
  

  

  return children;
}

export default function GlobalProviderWrapper({ children, session }) {
  return (
    <SessionProvider session={session}>

        <AuthSyncWrapper>{children}</AuthSyncWrapper>
    
    </SessionProvider>
  );
}
