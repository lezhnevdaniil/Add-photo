import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Problems() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Ups, problems</h1>
    </div>
  );
}
