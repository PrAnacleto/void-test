// app/page.js
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login'); // Redireciona imediatamente para /login
}