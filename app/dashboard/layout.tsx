import { Toaster } from "react-hot-toast";

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="w-full p-2 mt-16 md:p-14 ">
        <Toaster position="top-center" reverseOrder={false}/>
        {children}
        </div>
    );
  }