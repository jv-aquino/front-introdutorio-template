'use client'
import { logout } from "@/services/UserService";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

function Protegido() {
  const router = useRouter();

  return ( 
    <>
      <p className="p-4">Página protegida pelo servidor!</p>

      <button
        className="mx-4 px-4 py-2 rounded-xl transition-colors dark:bg-[#3d3d3d]
        hover:bg-[#383838] dark:hover:bg-gray-300 hover:text-gray-800 dark:hover:text-blue-950" 
        type="button"
        onClick={async () => {
          try {
            await logout();

            toast.success('Logout efetuado');
            router.push('/auth/login');
          } catch (error: any) {
            console.log(error);
            toast.error(error.message || 'Ocorreu um erro inesperado.');
          }
        }}
      >
        Logout
      </button>
    </>
   );
}

export default Protegido;