import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center mt-40">
      <Link
        href="/dashboard"
        className="text-4xl text-white bg-orange-300 p-3 rounded-xl hover:bg-orange-500 duration-700">
        Click This Button
      </Link>
    </div>
  );
};

export default page;
