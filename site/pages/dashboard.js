import { useState, useEffect, useContext } from "react";
import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";

const dashboard = () => {

  const [data, setData] = useState({});
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:8080/data/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          return toast.error("Error happened");
        }

        setData(data.userData);
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        // toast.success(data.message);
      })
      .catch((err) => {
        console.error("Dashboard fetch error:", err);
        toast.error("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้");
      });
  }, []);

  return (
    <div>
      <UserHeader />

      <main>
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <LinkBox
            lbTitle="Links"
            lbNumber={data.links || 0}
            lbSvg="url"
            lbTheme="red"
          />

          <LinkBox
            lbTitle="Growth"
            lbNumber="30%"
            lbSvg="growth"
            lbTheme="blue"
          />

          <LinkBox
            lbTitle="Links"
            lbNumber="12"
            lbSvg="email"
            lbTheme="red"
          />

          <LinkBox
            lbTitle="Growth"
            lbNumber="30%"
            lbSvg="ig"
            lbTheme="blue"
          />
        </section>
      </main>
    </div>
  );
};

export default dashboard;