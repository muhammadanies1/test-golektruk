"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { IconGolekTruk } from "@/assets";

export default function Home() {
  const router = useRouter();

  function toRegister() {
    router.push("/register");
  }

  return (
    <div className="container-pages">
      <div className="columns-login-left">
        <div className="container-columns">
          <Image
            src="https://golektruk.com/login.png"
            alt="image-login"
            width={510}
            height={453}
          />
          <p className="label-message">
            <span>
              Masuk untuk Temukan informasi dan relasi baru setiap hari!
            </span>
          </p>
        </div>
      </div>
      <div className="columns-login-right">
        <div className="card">
          <div className="container-logo">
            <Image src={IconGolekTruk} alt="icon-golektruk" />
          </div>
          <span className="label-masuk">Masuk</span>
          <div className="form">
            <div className="field-container">
              <label>Username</label>
              <input placeholder="Type Username" />
            </div>
            <div className="field-container">
              <label>Password</label>
              <input placeholder="Type Password" />
            </div>
          </div>
          <button>Masuk</button>
          <p>
            <span className="text-black">Belum mempunyai akun? </span>
            <span onClick={toRegister} className="label-daftar">
              Daftar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
