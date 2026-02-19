import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <h1 className="mb-8 text-3xl font-bold text-gray-800 sm:text-4xl">
        카운터 앱
      </h1>
      <Counter />
    </div>
  );
}
