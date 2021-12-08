import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return null;
}
