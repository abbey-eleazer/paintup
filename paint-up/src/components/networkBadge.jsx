import { useNetworkStatus } from "../hooks/useNetworkStatus";

export const NetworkBadge = () =>{
  const isOnline = useNetworkStatus();

  return (
    <div className=" inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1 text-sm font-medium shadow-sm">
      <span>{isOnline ? "Online" : "Offline Ready"}</span>
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          isOnline
            ? "bg-green-500 shadow shadow-green-500"
            : "bg-amber-500 shadow shadow-amber-500"
        }`}
      />
    </div>
  );
}

