import { useRouter } from 'next/router';

export function CurrentLocation() {
  const { pathname } = useRouter();

  return (
    <div>
      You are currently at: <pre>{pathname}</pre>
    </div>
  );
}
