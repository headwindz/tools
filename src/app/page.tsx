import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";
import fs from 'fs';

export default function Home() {
  const data = fs.readdirSync('src/app/tool');
  console.log('data==========', data);
  return (
    <main className="flex flex-col min-h-screen p-24 items-center justify-between">
      <input type="text" defaultValue='hello' />
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-full grid grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Link href="/tool/base-64">base64</Link>
      </TabsContent>
      <TabsContent value="password">
        password 
      </TabsContent>
    </Tabs>
    </main>
  );
}
