import Link  from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Welcome Home!</h1>
      <section className='gap-2 flex'>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
      </section>
      
    </main>
  );
}
