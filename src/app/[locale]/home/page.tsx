import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('IndexPage');
  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>Home</h1>
      <p>description</p>
    </div>
  );
}
