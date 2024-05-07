"use sever";

import { cookies } from "next/headers";
import { Client, Account, Databases } from "node-appwrite";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJRCT!);

  const session = cookies().get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No Session");
  }
  client.setSession(session.value);

  return {
    get Account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJRCT!);

  const session = cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No Session");
  }
  client.setSession(session.value);

  return {
    get Account() {
      return new Account(client);
    },
    get Database() {
      return new Databases(client);
    },
  };
}
